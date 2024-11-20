import React from 'react';
import { Layout, Menu } from 'antd';
import logo from '../assets/logo.png'; // Resmin yolu
import NavbarMenu from './NavbarMenu';


const { Header } = Layout;



const Navbar = () => {
  return (
    <Layout>
      <Header>
      
        <div style={{ float: 'left', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
        <img src={logo} alt="Logo" style={{ height: '140px',marginTop: "-43px"
        }} />
          
        </div>
      
        <NavbarMenu></NavbarMenu>
      </Header>
    </Layout>
  );
};

export default Navbar;
