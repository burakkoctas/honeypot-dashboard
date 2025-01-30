import React, { useEffect, useState } from 'react';
import { fetchAttackData } from '../api/api';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const LoginSuccessChart = () => {
    const [loginData, setLoginData] = useState(null);

    useEffect(() => {
        fetchAttackData("login-success-rate", "")
            .then((data) => {
                console.log("API Response (login-success-rate):", data); // API'den gelen veriyi kontrol et
                if (data && data.successful_logins !== undefined && data.failed_logins !== undefined) {
                    setLoginData(data);
                } else {
                    console.error("Invalid data format received:", data);
                }
            })
            .catch((error) => console.error("API Fetch Error (login-success-rate):", error));
    }, []);

    if (!loginData) {
        return <p className="text-lg font-semibold text-gray-500">⏳ Loading login success rate...</p>;
    }

    const pieData = [
        { name: "Successful Logins", value: loginData.successful_logins },
        { name: "Failed Logins", value: loginData.failed_logins }
    ];
    
    const COLORS = ["#00C49F", "#FF8042"];

    const getPercentage = (value) => {
        const total = loginData.successful_logins + loginData.failed_logins;
        return total > 0 ? ((value / total) * 100).toFixed(2) + "%" : "0%";
    };

    const renderLabel = ({ name, value }) => `${name}: ${getPercentage(value)}`;

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🔍 Login Success Rate</h3>
            <ResponsiveContainer width={300} height={300}>
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
