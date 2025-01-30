import React from 'react';
import LoginAttemptBox from '../cards/LoginAttemptBox';

const BruteForceAttempts = () => {
    return (
        <div className="flex flex-col gap-6">
            <LoginAttemptBox attackType="brute-force" status="successful" />
            <LoginAttemptBox attackType="brute-force" status="failed" />
        </div>
    );
};

export default BruteForceAttempts;