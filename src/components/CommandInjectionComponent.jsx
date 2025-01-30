import React from 'react';
import AttackChart from './AttackChart';
import AttackInsights from './AttackInsights';
import CommandInjectionLists from './CommandInjectionList';

const CommandInjectionComponent = () => {
    return (
        <div className="flex flex-col gap-10 p-8">
            <h1 className="text-3xl font-bold text-center">💻 Command Injection Analysis</h1>

            <p className="text-lg text-gray-600 my-4 ml-60">Command injection attacks occur when an attacker manipulates input to execute arbitrary system commands on a server.</p>

            {/* Saat Grafiği + Attack Insights */}
            <div className="flex justify-center items-start gap-8">
                <AttackChart attackType="command-injection" />
                <AttackInsights attackType="command-injection" />
            </div>

            {/* En çok kullanılan girdiler ve saldırı yapılan ülkeler */}
            <CommandInjectionLists />
        </div>
    );
};

export default CommandInjectionComponent;
