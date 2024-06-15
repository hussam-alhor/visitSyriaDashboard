import React from 'react'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import "./Login.css";


const Login = () => {
  return (
    <>
    {/* <Link to={'/'} /> */}
    <Container className="d-flex justify-content-center align-items-center vh-100 bg-rgba(212, 239, 229, 0.5)">
        <Row className="as_row">
          <Col className="as_col">
            <div className="as_login">
              <h1>
                Visit<span> Syria</span>
              </h1>
              <h3>مرحبا بكم في لوحة تحكم  visit Syria </h3>
            </div>
            <Form
            //  onSubmit={(e) => handleLogIn(e)}
              className="as_form" >
              <Form.Group controlId="formBasicEmail">
                <Form.Control 
                // onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })} value={formLogin.email} 
                 type="email" name="email" id="email"
                  className="as_input"
                  placeholder="البريد الإلكتروني"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" 
              
              //  onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })} value={formLogin.password} 
              >
              <FormControl className="as_input" 
                    type="password" name="password" id="password"
                    placeholder="كلمة المرور"
                  />
              </Form.Group>

              <Button
                // variant="secondary"
                type="submit"
                className="as-button"
                size="lg"
              >
                دخول
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>


    </>
  )
}

export default Login