import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className='inset-x-0 bottom-0 h-16' style={{ textAlign: 'center', backgroundColor: '#001529', color: 'white' }}>
      Honeypot Dashboard ©2024 Created by Team Çetintav
    </Footer>
  );
};

export default AppFooter;
