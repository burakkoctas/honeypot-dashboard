import React, { useEffect, useState } from 'react';
import { fetchSessionProtocols } from '../api/api';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const SessionProtocolChart = () => {
    const [protocolData, setProtocolData] = useState([]);

    useEffect(() => {
        fetchSessionProtocols()
            .then((data) => {
                console.log("API Response (session-connect/top-protocols):", data);
                if (Array.isArray(data) && data.length > 0) {
                    setProtocolData(data);
                } else {
                    console.error("Invalid data format received:", data);
                }
            })
            .catch((error) => console.error("API Fetch Error (session-connect/top-protocols):", error));
    }, []);

    if (protocolData.length === 0) {
        return <p className="text-lg font-semibold text-gray-500">⏳ Loading protocol data...</p>;
    }

    // SSH ve Telnet saldırılarını yüzdelik olarak hesaplayalım
    const totalAttacks = protocolData.reduce((sum, protocol) => sum + protocol.count, 0);
    const pieData = protocolData.map((item) => ({
        name: item.protocol.toUpperCase(),
        value: item.count
    }));

    const COLORS = ["#0088FE", "#FFBB28"]; // SSH için mavi, Telnet için sarı

    const getPercentage = (value) => {
        return totalAttacks > 0 ? ((value / totalAttacks) * 100).toFixed(2) + "%" : "0%";
    };

    const renderLabel = ({ name, value }) => `${name}: ${getPercentage(value)}`;

    return (
        <div className="flex flex-col gap-8 items-start">
            {/* Pie Chart */}
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🔍 Used Protocol Distribution</h3>
                <ResponsiveContainer width={400} height={200}>
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
            </div>

            {/* Toplam SSH ve Telnet Saldırılarını Gösteren Kutucuk */}
            <div className="p-6 w-[400px] shadow-md rounded-lg bg-blue-100 border border-blue-300">
                <h3 className="text-xl font-bold text-blue-900 text-center mb-4">📊 Used Protocol Stats</h3>
                {protocolData.map((protocol, index) => (
                    <p key={index} className="text-lg font-semibold text-gray-800">
                        {protocol.protocol.toUpperCase()}: <span className="text-red-500">{protocol.count} attacks</span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default SessionProtocolChart;
