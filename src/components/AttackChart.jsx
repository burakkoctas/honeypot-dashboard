import React, { useEffect, useState } from 'react';
import { fetchAttackData } from '../api/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttackChart = ({ attackType }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchAttackData(attackType, "by-hour").then((data) => {
            if (data) {
                const formattedData = Object.entries(data).map(([hour, count]) => ({
                    hour: `${hour}:00`,
                    count: count
                }));
                setChartData(formattedData);
            }
        });
    }, [attackType]);

    const colors = {
        "brute-force": "#50C878",
        "dictionary-attack": "#FF8042"
    };

    return (
        <div className="w-[60%] h-[350px] flex flex-col items-center">
            {/* Başlık ve Açıklama */}
            <h3 className="text-xl font-bold text-gray-800">Attack Distribution by Hour</h3>
 

            {/* Grafik */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="count" fill={colors[attackType]} barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttackChart;
