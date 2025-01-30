import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { fetchAttackRatios } from '../api/api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#ADFF2F'];

const ChartComponent = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      fetchAttackRatios().then((data) => {
          console.log("API Response:", data); // API'den gelen veriyi kontrol et
          if (data) {
              const formattedData = data.map(item => ({
                  name: item.attack_type.replace(/_/g, " "), // "brute_force" → "Brute Force"
                  value: Number(item.percentage.toFixed(2)) // Yüzdelik değeri sayıya çevir
              }));
              console.log("Formatted Data:", formattedData); // Dönüştürülen veriyi gör
              setChartData(formattedData);
          }
      });
  }, []);
  

    return (
        <PieChart width={600} height={600}>
            <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={250}
                fill="#8884d8"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(2)}%)`} // Yüzdeyi göster
            >
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
    );
};

export default ChartComponent;
