import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'IP Address', dataIndex: 'ip', key: 'ip' },
  { title: 'Attack Type', dataIndex: 'type', key: 'type' },
  { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
];

const data = [
  { key: '1', ip: '192.168.1.1', type: 'Brute Force', timestamp: '2024-11-19 12:00:00' },
  { key: '2', ip: '192.168.1.2', type: 'SQL Injection', timestamp: '2024-11-19 12:05:00' },
];

const TableComponent = () => <Table pagination={false} columns={columns} dataSource={data} />;

export default TableComponent;
