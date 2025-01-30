import React from 'react';
import AttackChart from './AttackChart';
import AttackLists from './AttackLists';
import LoginSuccessChart from './LoginSuccessChart';
import LoginAttemptBox from './LoginAttemptBox';
import AttackInsights from './AttackInsights';

const BruteForceComponent = () => {
    return (
        <div className="flex flex-col gap-10 p-8">
            <h1 className="text-3xl font-bold text-center">🔥 Brute Force Attack Analysis</h1>



            <p className="text-lg text-gray-600 my-6 ml-60">A brute force attack attempts to gain unauthorized access by systematically trying all possible passwords or credentials</p>

            {/* Saat Grafiği + Attack Insights */}
            <div className="flex justify-center items-start gap-8">
                <AttackChart attackType="brute-force" />
                <AttackInsights attackType="brute-force" />
            </div>

            {/* Tablolar */}
            <AttackLists attackType="brute-force" />

            {/* Login Attempt Box'lar ve Login Success Chart'ı yan yana hizala */}
            <div className="flex justify-center gap-8">
                <div className="flex flex-col gap-6">
                    <LoginAttemptBox attackType="brute-force" status="successful" />
                    <LoginAttemptBox attackType="brute-force" status="failed" />
                </div>
                <LoginSuccessChart attackType="brute_force" />
            </div>
        </div>
    );
};

export default BruteForceComponent;
