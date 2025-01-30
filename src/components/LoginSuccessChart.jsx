import React, { useEffect, useState } from 'react';
import { fetchAttackData } from '../api/api';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const LoginSuccessChart = ({ attackType }) => {
    const [loginData, setLoginData] = useState(null);

    useEffect(() => {
        fetchAttackData("attacker-login-success", "")
            .then((data) => {
                console.log("API Response (attacker-login-success):", data); 

                if (data && data[attackType]) {
                    setLoginData(data[attackType]);
                } else {
                    console.error(`Invalid attackType key (${attackType}):`, data);
                }
            })
            .catch((error) => console.error("API Fetch Error (attacker-login-success):", error));
    }, [attackType]);

    if (!loginData) {
        return <p className="text-lg font-semibold text-gray-500">⏳ Loading login success rate...</p>;
    }

    const pieData = [
        { name: "Successful", value: loginData.successful_logins },
        { name: "Failed", value: loginData.failed_logins }
    ];
    
    const COLORS = ["#00C49F", "#FF8042"];

    const getPercentage = (value) => {
        const total = loginData.successful_logins + loginData.failed_logins;
        return total > 0 ? ((value / total) * 100).toFixed(2) + "%" : "0%";
    };

    const renderLabel = ({ name, value }) => `${name}: ${getPercentage(value)}`;

    // Baş harfleri büyük yapmak için attackType biçimlendirme fonksiyonu
    const formatAttackType = (type) => {
        return type
            .split("_") // Kelimeleri ayır
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Her kelimenin ilk harfini büyüt
            .join(" "); // Kelimeleri birleştir
    };

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🔍 {formatAttackType(attackType)} Login Success Rate</h3>
            <ResponsiveContainer width={405} height={320}>
                <PieChart>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label={renderLabel}
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${getPercentage(value)}`} />
                </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-gray-100 border rounded-lg w-full text-center">
                <p className="text-lg font-semibold text-gray-800">
                    ✅ Successful Logins: <span className="text-green-600">{loginData.successful_logins}</span>
                </p>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                    ❌ Failed Logins: <span className="text-red-600">{loginData.failed_logins}</span>
                </p>
            </div>
        </div>
    );
};

export default LoginSuccessChart;
