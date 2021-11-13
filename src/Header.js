import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './Header.css';
import './LoginButton';
import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Calendar Carousel</Navbar.Brand>
                <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
                <NavItem><Link to="/aboutme" className="nav-link">About Me</Link></NavItem>
                <NavItem> <LoginButton resGoogle={this.props.resGoogle} /></NavItem>
                {/* <NavItem> <LogoutButton>Logout</LogoutButton></NavItem> */}
            </Navbar>
        )

    }
}

export default withAuth0(Header);