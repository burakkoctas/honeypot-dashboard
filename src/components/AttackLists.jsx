import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import TableComponent from './TableComponent';
import { fetchAttackData } from '../api/api';

const AttackLists = ({ attackType }) => {
    const [topCountries, setTopCountries] = useState([]);
    const [topCombinations, setTopCombinations] = useState([]);

    useEffect(() => {
        fetchAttackData(attackType, "top-countries").then(setTopCountries);
        fetchAttackData(attackType, "top-combinations").then(setTopCombinations);
    }, [attackType]);

    // Madalya fonksiyonu (Sıralamaya göre)
    const getMedal = (index) => {
        const medals = ["🥇", "🥈", "🥉"];
        return index < 3 ? medals[index] : "";
    };

    // Madalya sütununu özel render fonksiyonu ile büyütelim
    const renderMedal = (text) => <span className="text-3xl">{text}</span>;

    const tableData = [
        {
            title: `Top ${attackType.replace("-", " ")} Attack Countries`,
            columns: [
                { title: '#', dataIndex: 'rank', key: 'rank' },
                { title: 'Country', dataIndex: 'country', key: 'country' },
                { title: 'Attack Count', dataIndex: 'count', key: 'count' },
                { title: '', dataIndex: 'medal', key: 'medal', render: renderMedal } // Büyük madalyalar
            ],
            data: topCountries.map((item, index) => ({
                ...item,
                rank: index + 1,
                medal: getMedal(index)
            }))
        },
        {
            title: `Top ${attackType.replace("-", " ")} Username-Password Combinations`,
            columns: [
                { title: '#', dataIndex: 'rank', key: 'rank' },
                { title: 'Username', dataIndex: 'username', key: 'username' },
                { title: 'Password', dataIndex: 'password', key: 'password' },
                { title: 'Count', dataIndex: 'count', key: 'count' },
                { title: '', dataIndex: 'medal', key: 'medal', render: renderMedal } // Büyük madalyalar
            ],
            data: topCombinations.map((item, index) => ({
                ...item,
                rank: index + 1,
                medal: getMedal(index)
            }))
        }
    ];

    return (
        <Col className="pl-40" gutter={12}>
            <Row className="p-5" gutter={32}>
                {tableData.map((table, index) => (
                    <Col span={11} key={index}>
                        <Card title={table.title}>
                            <TableComponent data={table.data} columns={table.columns} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    );
};

export default AttackLists;
