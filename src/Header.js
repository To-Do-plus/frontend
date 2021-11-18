import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './Header.css';
import './LoginButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-md-center">
                <Navbar.Brand><h1>Calendar Carousel</h1></Navbar.Brand>

                <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>

                <NavItem><Link to="/aboutme" className="nav-link">About The Team</Link></NavItem>

                <NavItem>{this.props.userName ? <h2 style={{ color: 'white' }}>Welcome: {this.props.userName}</h2> : <h2 style={{ color: 'white' }}>Please Login</h2>}</NavItem>

                <NavItem><h2 style={{ color: 'fff' }}>a </h2> </NavItem>

                {this.props.userName ? <NavItem > <LogoutButton onLogout={this.props.onLogout} /></NavItem> : <NavItem> <LoginButton resGoogle={this.props.resGoogle} /></NavItem>
                }

            </Navbar>
        )

    }
}

export default withAuth0(Header);