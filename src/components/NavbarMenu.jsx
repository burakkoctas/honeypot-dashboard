import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        label: "Home",
        key: "home"
    },
    {
        label: "Reports",
        key: "reports",
    },
    {
        label: "About",
        key: "about",
    },
]

const NavbarMenu = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState("home");
    const handleClick = (e) => {
        console.log("click", e);
        setCurrent(e.key);
        navigate(`/${e.key}`);
    }

    return (
        <Menu theme='dark' onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}

export default NavbarMenu;
