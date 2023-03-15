import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

const Headers = () => {
  return (
    <div>
        <Navbar bg="dark" varient="dark">
            <Container>
                <NavLink to="/">Home</NavLink>
                <Nav className=''>
                    <NavLink to="/register" className="mt-3 mx-2">Register</NavLink>
                    <img src='/logo192.png' style={{width:50}} alt=""/>
                </Nav>
            </Container>
        </Navbar>


    </div>
  )
}

export default Headers