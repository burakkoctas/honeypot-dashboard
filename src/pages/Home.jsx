import React from 'react';
import ChartComponent from '../components/ChartComponent';
import TableComponent from '../components/TableComponent';
import { Card } from 'antd';
import ListsGroupComponent from '../components/ListsGroupComponent';

const Home = () => {
    return (
        <div>
            <ListsGroupComponent></ListsGroupComponent>
            <ChartComponent />
            
        </div>
    );
}

export default Home;
