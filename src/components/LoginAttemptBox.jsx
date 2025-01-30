import React, { useEffect, useState } from 'react';
import { fetchAttackData } from '../api/api';

const LoginAttemptBox = ({ attackType, status }) => {
    const [attemptData, setAttemptData] = useState(null);

    useEffect(() => {
        // API endpointini belirle
        const endpoint = status === "successful" ? "top-successful" : "top-failed";

        fetchAttackData(attackType, endpoint)
            .then((data) => {
                console.log(`API Response (${attackType} - ${status}):`, data); // API'den gelen veriyi görmek için
                if (data && data.username !== undefined && data.password !== undefined) {
                    setAttemptData(data);
                } else {
                    console.error(`Invalid data format received (${attackType} - ${status}):`, data);
                }
            })
            .catch((error) => console.error(`API Fetch Error (${attackType} - ${status}):`, error));
    }, [attackType, status]);

    return (
        attemptData ? (
            <div className={`p-4 w-96 shadow-md rounded-lg 
                ${status === "successful" ? "bg-green-100 border border-green-300" : "bg-red-100 border border-red-300"}`}>
                <h3 className={`text-xl font-bold 
                    ${status === "successful" ? "text-green-800" : "text-red-800"}`}>
                    {status === "successful" ? "✅Top Successful Attack" : "❌Top Failed Attack"}
                </h3>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                    <span className="font-bold text-gray-700">Username:</span> {attemptData.username}
                </p>
                <p className="text-lg font-semibold text-gray-800">
                    <span className="font-bold text-gray-700">Password:</span> {attemptData.password}
                </p>
                <p className="text-lg font-semibold text-gray-800">
                    <span className="font-bold text-gray-700">Attempts:</span> {attemptData.count}
                </p>
            </div>
        ) : (
            <p className="text-lg font-semibold text-gray-500">
                ⏳ Loading {attackType.replace("-", " ")} {status} attempt...
            </p>
        )
    );
};

export default LoginAttemptBox;
