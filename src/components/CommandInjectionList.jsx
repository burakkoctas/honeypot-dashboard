import React, { useEffect, useState } from 'react';
import { fetchCommandInjectionTopInputs, fetchCommandInjectionTopCountries } from '../api/api';
import { Card, Table, Col, Row } from 'antd';

const CommandInjectionLists = () => {
    const [topInputs, setTopInputs] = useState([]);
    const [topCountries, setTopCountries] = useState([]);

    useEffect(() => {
        fetchCommandInjectionTopInputs().then(setTopInputs);
        fetchCommandInjectionTopCountries().then(setTopCountries);
    }, []);

    // Madalya fonksiyonu (Sıralamaya göre)
    const getMedal = (index) => {
        const medals = ["🥇", "🥈", "🥉"];
        return index < 3 ? medals[index] : "";
    };

    // Madalya sütunu özel render fonksiyonu ile büyütüldü
    const renderMedal = (text) => <span className="text-2xl">{text}</span>;

    const tableData = [
        {
            title: "Top Command Injection Inputs",
            columns: [
                { title: '#', dataIndex: 'rank', key: 'rank' },
                { title: 'Input', dataIndex: 'input', key: 'input' },
                { title: 'Count', dataIndex: 'count', key: 'count' },
                { title: '🏅', dataIndex: 'medal', key: 'medal', render: renderMedal }
            ],
            data: topInputs.map((item, index) => ({
                ...item,
                rank: index + 1,
                medal: getMedal(index)
            }))
        },
        {
            title: "Top Command Injection Attack Countries",
            columns: [
                { title: '#', dataIndex: 'rank', key: 'rank' },
                { title: 'Country', dataIndex: 'country', key: 'country' },
                { title: 'Count', dataIndex: 'count', key: 'count' },
                { title: '🏅', dataIndex: 'medal', key: 'medal', render: renderMedal }
            ],
            data: topCountries.map((item, index) => ({
                ...item,
                rank: index + 1,
                medal: getMedal(index)
            }))
        }
    ];

    return (
        <Row gutter={32} className="p-5 flex justify-center">
            {tableData.map((table, index) => (
                <Col span={11} key={index}>
                    <Card title={table.title} className="shadow-md border border-gray-300">
                        <Table pagination={false} columns={table.columns} dataSource={table.data} />
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default CommandInjectionLists;
