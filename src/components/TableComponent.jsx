import React from 'react';
import { Table } from 'antd';

const TableComponent = ({ data, columns }) => {
    return <Table pagination={false} columns={columns} dataSource={data} />;
};

export default TableComponent;
