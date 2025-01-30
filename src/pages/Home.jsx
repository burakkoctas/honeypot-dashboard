import React, { useEffect, useState } from 'react';
import ChartComponent from '../components/ChartComponent';
import { Card } from 'antd';
import axios from 'axios';
import PodiumComponent from '../components/PodiumComponent';
import AttackComponent from '../components/AttackComponent';

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
            <PodiumComponent></PodiumComponent>
            <AttackComponent attackType="brute-force" />
            <AttackComponent attackType="dictionary-attack" />
            <ChartComponent />

        </div>
    );
}

export default Home;
