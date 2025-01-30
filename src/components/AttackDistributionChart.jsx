import React, { useEffect, useState } from 'react';
import { fetchAttackDistribution } from '../api/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AttackDistributionChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchAttackDistribution().then((data) => {
            console.log("API Response (attack-distribution):", data);
            if (Array.isArray(data) && data.length > 0) {
                // Pivoting saldırısını çıkartıyoruz
                const filteredData = data.filter(item => item.attack_type !== "pivoting");
                setChartData(filteredData);
            } else {
                console.error("Invalid data format received:", data);
            }
        }).catch((error) => console.error("API Fetch Error (attack-distribution):", error));
    }, []);

    if (chartData.length === 0) {
        return <p className="text-lg font-semibold text-gray-500">⏳ Loading attack distribution data...</p>;
    }

    // Saldırı türlerine göre özel renkler
    const colors = {
        "brute_force": "#50C878",
        "dictionary_attack": "#FF8042",
        "command_injection": "#FF5733",
        "file_download": "#3498DB",
        "malware": "#9B59B6"
    };

    return (
        <div className="w-[60%] h-[450px] flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800">📊 Attack Distribution Across All Types</h3>
            <p className="text-md text-gray-600 mb-4">
                This chart represents the number of attacks for each attack type.
            </p>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="attack_type" tick={{ fontSize: 14 }} />
                    <YAxis tick={{ fontSize: 14 }} />
                    <Tooltip />

                    <Bar dataKey="attack_count" barSize={40}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[entry.attack_type] || "#8884d8"} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttackDistributionChart;
