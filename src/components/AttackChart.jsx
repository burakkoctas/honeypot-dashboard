import React, { useEffect, useState } from 'react';
import { fetchAttackByHour } from '../api/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttackChart = ({ attackType }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchAttackByHour(attackType).then((data) => {
            if (data) {
                const formattedData = Object.entries(data).map(([hour, count]) => ({
                    hour: `${hour}:00`,
                    count: count
                }));
                setChartData(formattedData);
            }
        });
    }, [attackType]);

    // Saldırı türüne göre grafik rengi belirleme
    const colors = {
        "brute-force": "#50C878",
        "dictionary-attack": "#FF8042",
        "command-injection": "#FF5733",
        "file-download": "#3498DB",
        "malware": "#9B59B6"
    };

    return (
        <div className="w-[60%] h-[350px] flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800">📊 {attackType.replace("-", " ")} attacks by hour</h3>
            <p className="text-sm text-gray-600 mb-2">Number of {attackType.replace("-", " ")} attacks per hour.</p>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="count" fill={colors[attackType] || "#8884d8"} barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttackChart;
