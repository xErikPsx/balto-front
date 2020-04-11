import React from 'react';

import { Menu } from 'antd';

const SideBar = (props) => {
    const { sideBarStatus } = props;
    return (
        <div className={`sidebar ${sideBarStatus}`}>
            <div className="logo" >BL</div>
            <Menu theme="dark" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Some Else</Menu.Item>
            </Menu>
        </div>
    );
}

export default SideBar;
