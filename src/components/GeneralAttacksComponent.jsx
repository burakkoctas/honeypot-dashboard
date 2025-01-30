import React from 'react';
import PodiumComponent from './PodiumComponent';
import AttackDistributionChart from './AttackDistributionChart';
import SessionProtocolChart from './SessionProtocolChart';

const GeneralAttacksComponent = () => {
    return (
        <div className="flex flex-col gap-10 p-8">
            <h1 className="text-3xl font-bold text-center">🌍 General Attack Analysis</h1>

            {/* Podium Component - En Çok Saldırı Alan Saldırı Türleri */}
            <PodiumComponent />

            {/* Saldırı Dağılımı ve Oturum Protokolü Grafiklerini Yan Yana Getirelim */}
            <div className="flex flex-wrap justify-center gap-10">
                <AttackDistributionChart />
                <SessionProtocolChart />
            </div>
        </div>
    );
};

export default GeneralAttacksComponent;
