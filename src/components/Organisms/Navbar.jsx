import React, { Component } from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Navbar extends Component {
    render() {
        return (
            <div class="navbar">
                <span></span>
                <Button type="primary" shape="circle" icon={UserOutlined}>
                </Button>
                <Button type="primary" shape="circle" icon={UserOutlined}>
                </Button>
            </div>
        );
    }
}


export default Navbar;

