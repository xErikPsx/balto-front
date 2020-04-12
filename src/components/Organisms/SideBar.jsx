import React from 'react';
import { Menu } from 'antd';
// * Assets
import baltoLogo from '../../assets/balto_logo.png';

const SideBar = (props) => {
  const { sideBarStatus } = props;
  return (
    <div className={`sidebar ${sideBarStatus}`}>
      <a href="/">
        <div className="logo">
          <img src={baltoLogo} alt="logo" />
        </div>
      </a>
      <Menu theme="dark" defaultSelectedKeys={['1']}>
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
          <a href="/form-patients">Nuevo Paciente</a>
        </Menu.Item>
        <Menu.Item key="5">
          <a href="/login">Iniciar Sesión</a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideBar;
