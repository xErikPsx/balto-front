
import React from 'react';
import { Layout,Menu } from 'antd';
import Icon from '@mdi/react';
import {mdiBackburger, mdiMenu} from '@mdi/js';
import 'antd/dist/antd.css';

import SideBar from './SideBar';

const { Header } = Layout;

function Navbar (props) {
  const { onToggleSideBar,sideBarStatus } = props;
  return (
      <Header>
        <div className="web">
          <div className="logo" >BL</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Some Else</Menu.Item>
          </Menu>
        </div>
        <div className="mobile">
            <Icon onClick={onToggleSideBar} color="#fff" path={sideBarStatus ==='hide'? mdiMenu: mdiBackburger} size={1}  />
          <SideBar sideBarStatus={sideBarStatus} />
        </div>
      </Header>
  )
}

export default Navbar

