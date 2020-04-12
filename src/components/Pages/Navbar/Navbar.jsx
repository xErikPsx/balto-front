import React, { Component } from 'react';

import NavbarComponent from '../../Organisms/Navbar';

class Navbar extends Component {
    state = {
        showSideBar:false
    }
    toggleSideBar = () =>{
        const { showSideBar} = this.state;
        this.setState({
            showSideBar: showSideBar ? false : true
        })
    }
    render() {
        return (
            <NavbarComponent sideBarStatus={this.state.showSideBar?'':'hide'} onToggleSideBar={this.toggleSideBar}/>
        );
    }
}

export default Navbar;
