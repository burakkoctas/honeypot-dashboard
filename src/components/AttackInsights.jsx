import React, { useEffect, useState } from 'react';
import { fetchAttackData } from '../api/api';

const AttackInsights = ({ attackType }) => {
    const [maxHour, setMaxHour] = useState(null);
    const [minHour, setMinHour] = useState(null);

    useEffect(() => {
        fetchAttackData(attackType, "by-hour")
            .then((data) => {
                console.log(`API Response (${attackType} by-hour):`, data); // API verisini kontrol et

                if (data && Object.keys(data).length > 0) {
                    // En çok saldırılan saat
                    const maxEntry = Object.entries(data).reduce((max, entry) => (entry[1] > max[1] ? entry : max));
                    // En az saldırılan saat
                    const minEntry = Object.entries(data).reduce((min, entry) => (entry[1] < min[1] ? entry : min));

                    setMaxHour({ hour: `${maxEntry[0]}:00`, count: maxEntry[1] });
                    setMinHour({ hour: `${minEntry[0]}:00`, count: minEntry[1] });
                } else {
                    console.error(`Invalid data format received (${attackType} by-hour):`, data);
                }
            })
            .catch((error) => console.error(`API Fetch Error (${attackType} by-hour):`, error));
    }, [attackType]);

    return (
        <div className="p-6 w-[300px] shadow-md rounded-lg bg-blue-100 border border-blue-300">
            <h3 className="text-xl font-bold text-blue-900 text-center mb-4">📊 {attackType.replace("-", " ")} Insights</h3>
            {maxHour && minHour ? (
                <>
                    <p className="text-lg font-semibold text-gray-800">
                        📈 Most Attacked Hour: <span className="text-red-500">{maxHour.hour} ({maxHour.count} attacks)</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-2">
                        📉 Least Attacked Hour: <span className="text-blue-600">{minHour.hour} ({minHour.count} attacks)</span>
                    </p>
                </>
            ) : (
                <p className="text-lg font-semibold text-gray-500 text-center">⏳ Loading insights...</p>
            )}
        </div>
    );
};

export default AttackInsights;
