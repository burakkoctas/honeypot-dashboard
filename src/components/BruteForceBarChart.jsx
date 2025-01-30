import React, { useEffect, useState } from 'react';
import { fetchBruteForceByHour } from '../api/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BruteForceChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchBruteForceByHour().then((data) => {
            if (data) {
                const formattedData = Object.entries(data).map(([hour, count]) => ({
                    hour: `${hour}:00`,
                    count: count
                }));
                setChartData(formattedData);
            }
        });
    }, []);

    return (
        <div className="w-[60%] h-[300px] flex justify-center items-center">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#50C878" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BruteForceChart;
