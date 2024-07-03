import React, { useEffect, useState } from 'react'
import SideBar from '../../SideBar/SideBar'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import './Setting.css';
import imageIcon from '../../../../public/assets/img/image.svg';
import axios from 'axios';




const Setting = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUserData = async () => {
      try {
        const response = axios.get('http://localhost:8000/api/users/show_user/1', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const { name, email, image } = response.data;
        setName(name);
        setEmail(email);
        if (image) {
          setImage(`/${image}`);
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    if (password) {
      formData.append('password', password);
    }
    if (imageFile) {
      formData.append('image', imageFile);
    }


    try {
      const response = await axios.post('http://localhost:8000/api/users/update_user/1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error updating the profile!', error);
    }
  };




  return (
    <div className='sidFlex'>
    <SideBar/>
      <Container className="setting-container">
        <div className="setting_row">
          <div className="col_img">
            <span>صورة الملف الشخصي</span>
             <div className="mb-3">
            {image ? (
              <img src={`http://localhost:8000/${image}`} className="rounded-circle" />
            ) : (
              <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: 100, height: 100}}>
               <img src={imageIcon} alt="" />
              </div>
            )}
          </div>
          </div>
          <div className='col_form'>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file"style={{ display: 'none' }}  onChange={handleImageChange} />
        
         <Button onClick={() => document.getElementById('formFile').click()} className="Edit_btn">
           تغيير
         </Button>
           <Button className="Delete_btn" onClick={handleRemoveImage}>
             حذف
           </Button>
         
       </Form.Group>
       </div> 
       </div>
       
       <Form onSubmit={handleSubmit()}>
        <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridAddress" >
          <Form.Label>اسم المستخدم</Form.Label>
          <Form.Control type="text" className='pass_form' value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>عنوان الإيميل</Form.Label>
            <Form.Control type="email"className='pass_form' value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group controlId="formGridPassword">
            <Form.Label>كلمة المرور</Form.Label> 
            <Form.Control type="password" className='pass_form' value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>


        </Row>
        <Button type="submit" className="Edit_btn">تحديث</Button>
       

      </Form>
           
        </Container>

      
      
      </div>
  )
}

export default Setting