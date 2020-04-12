import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import BaltoLogo from '../../media/balto_logo.png';
import { Link } from 'react-router-dom';

function LoginForm() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="loginForm">
      <Form
        name="normal_login "
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <div className="loginForm__logoImgContainer">
          <img src={BaltoLogo} alt="" className="loginForm__logoImg" />
        </div>
        <Form.Item
          className="loginForm__userInput"
          name="username"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su usuario.'
            }
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Usuario"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor, ingrese su contraseña.'
            }
          ]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/#">
            ¿Olvidaste tu contraseña?
          </a>
        </Form.Item>

        <Form.Item>
          <Link to="./patients">
            <Button
              style={{ marginRight: '20px' }}
              size="large"
              className="loginButton login-form-button"
              type="primary"
              link="./patients"
            >
              Iniciar sesión
            </Button>
          </Link>
          O{' '}
          <Link className="linkFormRegister" to="./">
            Registrate
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
