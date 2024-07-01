import React, { useState } from "react";
import { Button, Col, Container, Form, FormControl, Row,} from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ver, setVer] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  
  const navigate = useNavigate();

 console.log(email)

  async function handleLogIn(e) {
    // console.log("first");
    e.preventDefault();
    setVer(true);

    let flag=true;
    if(password.length < 8){
      flag=false;
    }
     else flag=true;

    try{
      if(flag){

      let res = await axios.post("http://127.0.0.1:8000/api/login",{
          email:email,
          password:password
        }) 
        if(res.status === 200){
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("token", res.data.authorisation.token)
          navigate("/home");
        } 
      } 
     } catch(err){
      console.log(err)
       setEmailError(err.response.status)
       setPasswordError(err.response.status)
     }
    
  }  

  return (
    <>
    {/* <Link to={'/'} /> */}
      <Container className="d-flex justify-content-center align-items-center bg-rgba(212, 239, 229, 0.5) pt-5">
        <Row className="as_row">
          <Col className="as_col">
            <div className="as_login">
              <h1>
                Visit<span> Syria</span>
              </h1>
              <h3>مرحبا بكم في لوحة تحكم visit Syria </h3>
            </div>


            <Form onSubmit={handleLogIn} className="as_form">
              <Form.Group controlId="formBasicEmail">

                <Form.Control 
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="as_input"
                  placeholder="البريد الإلكتروني"
                  required
                />

              </Form.Group>
              {/* {ver && emailError === 401 ? <p className="as-error">هذا الإيميل موجود مسبقا</p>: ''} */}

              <Form.Group controlId="formBasicPassword">
                <FormControl
                 value={password}
                 onChange={(e) =>setPassword(e.target.value) }
                 className="as_input"
                 type="password"
                 name="password"
                 id="password"
                 placeholder="كلمة المرور"

                />
                { password.length < 8 && ver || PasswordError === 401 ? <p className="as-error">كلمة المرور او الإيميل غير صحيح</p> : ''}
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