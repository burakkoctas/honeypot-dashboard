import React from 'react';
import LoginAttemptBox from '../cards/LoginAttemptBox';

const DictionaryAttackAttempts = () => {
    return (
        <div className="flex flex-col gap-6">
            <LoginAttemptBox attackType="dictionary-attack" status="successful" />
            <LoginAttemptBox attackType="dictionary-attack" status="failed" />
        </div>
    );
};

export default DictionaryAttackAttempts;
