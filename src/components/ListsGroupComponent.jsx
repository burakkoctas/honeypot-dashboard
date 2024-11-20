import { Card, Col, Row, Space } from 'antd';
import React from 'react';
import TableComponent from './TableComponent';

const ListsGroupComponent = () => {
    return (
        <div>
            <Col className='pl-40' gutter={12}>
                <Row  className='p-5' gutter={32}>
                    <Col span={11}>
                        <Card title="Most Recent IP's"><TableComponent /></Card>
                    </Col>
                    <Col span={11}>
                        <Card title="Most Recent IP's"><TableComponent /></Card>
                    </Col>
                </Row>
                <Row className='p-5' gutter={32}>
                    <Col span={11}>
                        <Card title="Most Recent IP's"><TableComponent /></Card>
                    </Col>
                    <Col span={11}>
                        <Card title="Most Recent IP's"><TableComponent /></Card>
                    </Col>
                </Row>
                <Row className='p-5' gutter={32}>
                    <Col span={11}>
                        <Card title="Most Recent IP's"><TableComponent /></Card>
                    </Col>
                    <Col span={11}>
                        <Card title="Most Recent IP's"><TableComponent /></Card>
                    </Col>
                </Row>
                <Row className='p-5' gutter={32}>
                    <Col span={11}>
                        <Card><TableComponent /></Card>
                    </Col>
                    <Col span={11}>
                        <Card><TableComponent /></Card>
                    </Col>
                </Row>
                <Row className='p-5' gutter={32}>
                    <Col span={11}>
                        <Card><TableComponent /></Card>
                    </Col>
                    <Col span={11}>
                        <Card><TableComponent /></Card>
                    </Col>
                </Row>
                </Col>
        </div>
    );
}

export default ListsGroupComponent;
