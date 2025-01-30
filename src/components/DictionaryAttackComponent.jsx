import React from 'react';
import AttackChart from './AttackChart';
import AttackLists from './AttackLists';
import LoginSuccessChart from './LoginSuccessChart';
import LoginAttemptBox from './LoginAttemptBox';
import AttackInsights from './AttackInsights';

const DictionaryAttackComponent = () => {
    return (
        <div className="flex flex-col gap-10 p-8">
            <h1 className="text-3xl font-bold text-center">📖 Dictionary Attack Analysis</h1>

            <p className="text-lg text-gray-600 my-4 ml-60">A dictionary attack is a method where attackers use a precompiled list of common passwords to breach a system.</p>

            {/* Saat Grafiği + Attack Insights */}
            <div className="flex justify-center items-start gap-8">
                <AttackChart attackType="dictionary-attack" />
                <AttackInsights attackType="dictionary-attack" />
            </div>

            {/* Tablolar */}
            <AttackLists attackType="dictionary-attack" />

            {/* Login Attempt Box'lar ve Login Success Chart'ı yan yana hizala */}
            <div className="flex justify-center gap-8">
                <div className="flex flex-col gap-6">
                    <LoginAttemptBox attackType="dictionary-attack" status="successful" />
                    <LoginAttemptBox attackType="dictionary-attack" status="failed" />
                </div>
                <LoginSuccessChart attackType="dictionary_attack" />
            </div>
        </div>
    );
};

export default DictionaryAttackComponent;
