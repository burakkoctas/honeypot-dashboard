import React, { useEffect, useState } from 'react';
import ChartComponent from '../components/ChartComponent';
import { Card } from 'antd';
import axios from 'axios';
import PodiumComponent from '../components/PodiumComponent';
import CommandInjectionComponent from '../components/CommandInjectionComponent';
import FileDownloadComponent from '../components/FileDownloadComponent';
import MalwareComponent from '../components/MalwareComponent';
import AttackDistributionChart from '../components/AttackDistributionChart';
import SessionProtocolChart from '../components/SessionProtocolChart';
import DictionaryAttackComponent from '../components/DictionaryAttackComponent';
import BruteForceComponent from '../components/BruteForceComponent';

const Home = () => {
    const [item, setItem] = useState(null);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/analyze/attack-distribution")
            .then((response) => { setItem(response.data); console.log(response.data) })
            .catch((error) => console.error("ERROR : ", error));
    }, []);
    return (
        <div>
            <div className=" text-center">
                {/* Büyük Başlık */}
                <h1 className="text-5xl font-bold text-gray-800 my-40">Welcome To HoneyDashboard!</h1>

                {/* Küçük Açıklama */}
                <p className="text-lg font-bold text-gray-600 mt-2">
                    We analyze and visualize honeypot data for you.
                </p>
            </div>
            <hr className="border-gray-300 my-20" />

            <h1 className="text-3xl font-bold text-center">🌎 General Attacks Analysis</h1>



            <p className="text-lg text-gray-600 my-14 mb-32 ml-60">A small summary for each attack type we analyze.</p>


            <PodiumComponent></PodiumComponent>
            <div className="flex flex-wrap justify-center gap-10">
                <AttackDistributionChart />
                <SessionProtocolChart />
            </div>
            <hr className="border-gray-300 my-20" />


            <BruteForceComponent />
            <hr className="border-gray-300 my-20" />

            <DictionaryAttackComponent></DictionaryAttackComponent>
            <hr className="border-gray-300 my-20" />

            <CommandInjectionComponent></CommandInjectionComponent>
            <hr className="border-gray-300 my-20" />

            <FileDownloadComponent />
            <hr className="border-gray-300 my-20" />

            <MalwareComponent />

        </div>
    );
}

export default Home;
