import React, { useEffect, useState } from 'react';
import { fetchTopList } from '../api/api';
import { Card, Table, Col, Row } from 'antd';

const TopList = ({ attackType, endpoint, title, columns }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchTopList(attackType, endpoint).then(setData);
    }, [attackType, endpoint]);

    // Madalya fonksiyonu (Sıralamaya göre)
    const getMedal = (index) => {
        const medals = ["🥇", "🥈", "🥉"];
        return index < 3 ? medals[index] : "";
    };

    // Madalya sütunu özel render fonksiyonu ile büyütüldü
    const renderMedal = (text) => <span className="text-2xl">{text}</span>;

    const tableColumns = [
        { title: '#', dataIndex: 'rank', key: 'rank' },
        ...columns,
        { title: '', dataIndex: 'medal', key: 'medal', render: renderMedal }
    ];

    const tableData = data.map((item, index) => ({
        ...item,
        rank: index + 1,
        medal: getMedal(index)
    }));

    return (
        <Col span={11}>
            <Card title={title} className="shadow-md border border-gray-300">
                <Table pagination={false} columns={tableColumns} dataSource={tableData} />
            </Card>
        </Col>
    );
};

export default TopList;
