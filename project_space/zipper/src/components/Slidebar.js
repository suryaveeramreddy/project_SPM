import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col,Container,Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import './Slidebar.css';
import { Link } from 'react-router-dom';

function SlideBar() {
  return (
   <Row bg="primary" >
    <Col bg="primary">
    <div className='slidebar' style={{width:"40%"}}>
    <Navbar className='navbarr' expand="md" style={{width:"80%"}}> 
    <Navbar.Brand href="#home"></Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <NavDropdown title="Click to view pages" id="basic-nav-dropdown">  
            <NavDropdown.Item><Link to="/academic_details">Academic Details</Link></NavDropdown.Item>  
            <NavDropdown.Item ><Link to="/placement">Placement</Link></NavDropdown.Item>  
            <NavDropdown.Item ><Link to="/certification">Certifications</Link></NavDropdown.Item>  
            <NavDropdown.Divider />  
          </NavDropdown>  
        </Nav>  
      </Navbar.Collapse>  
     </Navbar>
     </div>
    </Col>
   </Row>
  )
  
}

export default SlideBar
//SlideBar.jsx