import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'

export default class NavBar extends Component {
    
    render() {
        return (
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Image src='NV.png'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="nav-links"/>
                    <Navbar.Collapse className="justify-content-end" id="nav-links">
                        <Navbar.Text>
                            <NavLink to="/" className={(status) => { return status.isActive ? 'active' : 'inactive' }}>Home</NavLink>
                            <NavLink to="/about" className={(status) => { return status.isActive ? 'active' : 'inactive' }}>About Me</NavLink>
                            {/* <NavLink to="/blog" className={(status) => { return status.isActive ? 'active' : 'inactive' }}>Blog</NavLink> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
};