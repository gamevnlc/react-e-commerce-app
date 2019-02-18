import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Navbar, NavbarBrand} from 'reactstrap'
import logo from '../logo.svg'

class NavbarApp extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar color="light" dark expand="md">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavbarApp;
