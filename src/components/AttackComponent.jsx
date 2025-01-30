import React from 'react';
import AttackChart from './AttackChart';
import AttackLists from './AttackLists';
import LoginSuccessChart from './LoginSuccessChart';
import LoginAttemptBox from './LoginAttemptBox';
import AttackInsights from './AttackInsights';

const AttackComponent = ({ attackType }) => {
    return (
        <div className="flex flex-col gap-6 px-12 py-6"> {/* Daha az boşluk bırakıldı */}
            <h1 className="text-3xl font-bold text-center">🔥 {attackType.replace("-", " ")} Analysis</h1>
            
            {/* Saat Grafiği + Attack Insights */}
            <div className="flex justify-center items-start gap-4">
                <AttackChart attackType={attackType} />
                <AttackInsights attackType={attackType} />
            </div>

            {/* Tablolar */}
            <AttackLists attackType={attackType} />

            {/* Login Attempt Box'lar ve Login Success Chart'ı yan yana hizala */}
            <div className="flex justify-center items-start gap-4">
                <div className="flex flex-col gap-2">
                    <LoginAttemptBox attackType={attackType} status="successful" />
                    <LoginAttemptBox attackType={attackType} status="failed" />
                </div>
                <LoginSuccessChart />
            </div>
        </div>
    );
};

export default AttackComponent;
