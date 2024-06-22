import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
// import { Link } from 'react-router-dom'
import "./Login.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const [password, setPassword] = useState("");
 
  const [email, setEmail] = useState("");
  const [ver, setVer] = useState(false);
  const [emailError, setEmailError] = useState("");



  async function handleLogIn(e) {
    e.preventDefault();
    setVer(true);
    let flag=true;
    if(password.length<8){
      flag=false;
    }
    else flag=true;
    try{

    if(flag){

      let res=await axios.post("http://127.0.0.1:8000/api/login",{
        email:email,
        password:password
      })
      if(res.status === 200){
        window.localStorage.setItem("email",email);

      }
    }}catch(err){
      setEmailError(err.response.status)

    }
    
    // axios
    //   .post("http://127.0.0.1:8000/api/login")
    //   .then((res) => {
    //     if (res.status === 200) {
    //       window.localStorage.setItem("token", res.data.authorisation.token);
    //       console.log('a');
    //       navigate("/home");
    //     }
    //   });
}
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
              <h3>مرحبا بكم في لوحة تحكم visit Syria </h3>
            </div>
            <Form onSubmit={handleLogIn()} className="as_form">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  
                  type="email"
                  name="email"
                  id="email"
                  className="as_input"
                  placeholder="البريد الإلكتروني"
                />
              </Form.Group>
              {ver && emailError === 401 && <p>Email Allready taken</p>}

              <Form.Group
                controlId="formBasicPassword"
              >

                <FormControl value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                
                  className="as_input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="كلمة المرور"

                />
                {password.length<8 && ver && <p>Password Error</p>}
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
  );
};

export default Login;
