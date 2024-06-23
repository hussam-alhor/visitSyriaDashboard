import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './NavBar.css'
import search_icon from '/public/assets/img/search_icon.svg'

const NavBar = () => {

  const navigate = useNavigate()

  function handleLogOut () {
    window.localStorage.removeItem('email');
    // window.location.pathname = '/' ;
    navigate('/');
  }

  return (
    <div>
        <Navbar expand="lg"  className='NavDash' >
      <Container className='NavDashCont'>
         <Row>
          <Col sm='6'>
           <Navbar.Brand href="#home"><span>Visit</span> Syria</Navbar.Brand>
          </Col>
          <Col sm="6">
            <Form inline className='NavDashForm'>
                <Form.Control type="text" className=" mr-sm-2 NavDashSearch"/>
                <img src={search_icon}/>
            </Form>
          </Col>
         </Row>
         {window.localStorage.getItem('email') ? (
           <div className='navLogOut'  onClick={handleLogOut} >تسجيل خروج</div>

         ) : ( <div></div> ) }
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar