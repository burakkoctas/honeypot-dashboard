import React from 'react';
import AttackChart from './AttackChart';
import AttackLists from './AttackLists';
import LoginSuccessChart from './LoginSuccessChart';
import LoginAttemptBox from './LoginAttemptBox';
import AttackInsights from './AttackInsights';

const AttackComponent = ({ attackType }) => {
    const deneme = "burak".Capi
    return (
        <div className="flex flex-col gap-10 p-8">
            <h1 className="text-3xl font-bold text-center">🔥 {attackType.replace("-", " ")} Analysis</h1>
            
            {/* Saat Grafiği + Attack Insights (Mevcut Saldırı Türü İçin) */}
            <div className="flex justify-center items-start gap-8">
                <AttackChart attackType={attackType} />
                <AttackInsights attackType={attackType} />
            </div>

            {/* Tablolar */}
            <AttackLists attackType={attackType} />

            {/* Login Attempt Box'lar ve Login Success Chart'ı yan yana hizala */}
            <div className="flex justify-center gap-8">
                <div className="flex flex-col gap-6">
                    <LoginAttemptBox attackType={attackType} status="successful" />
                    <LoginAttemptBox attackType={attackType} status="failed" />
                </div>
                <LoginSuccessChart attackType={attackType} />
            </div>


        </div>
    );
};

export default AttackComponent;
