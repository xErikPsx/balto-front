import React from 'react';
import { Layout, Menu } from 'antd';
import Icon from '@mdi/react';
import { mdiBackburger, mdiMenu } from '@mdi/js';
import 'antd/dist/antd.css';
import SideBar from './SideBar';
// * Media
import baltoLogo from '../../media/balto_logo.png';

const { Header } = Layout;

function Navbar(props) {
  const { onToggleSideBar, sideBarStatus } = props;
  return (
    <Header>
      <div className="web">
        <a href="/">
          <div className="logo">
            <img src={baltoLogo} alt="logo" />
          </div>
        </a>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          styles={{ backgroundColor: '#272727 !important' }}
        >
          <Menu.Item key="1">
            <a href="/">Balto</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="/symptoms">Sintomas</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="/patients">Pacientes</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="/login">Iniciar Sesión</a>
          </Menu.Item>
          <Menu.Item key="5">
            <a href="/register">Registrarse</a>
          </Menu.Item>
        </Menu>
      </div>
      <div className="mobile">
        <Icon
          onClick={onToggleSideBar}
          color="#fff"
          path={sideBarStatus === 'hide' ? mdiMenu : mdiBackburger}
          size={1}
        />
        <SideBar sideBarStatus={sideBarStatus} />
      </div>
    </Header>
  );
}

export default Navbar;
