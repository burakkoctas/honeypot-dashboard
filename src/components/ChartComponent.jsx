import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Brute Force', value: 400 },
  { name: 'SQL Injection', value: 300 },
  { name: 'DDoS', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ChartComponent = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={150}
      fill="#8884d8"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default ChartComponent;
