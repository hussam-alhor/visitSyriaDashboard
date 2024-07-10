import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import addIcon from '/assets/img/add.svg';
import imageIcon from '/assets/img/image.svg';
import pen from '/assets/img/pen.svg';
import SideBar from '../../../SideBar/SideBar';
// import SideBar from '../SideBar/SideBar';

const AddArticleComponent = ({
    nameLabel,
    type,
    mainDescriptionLabel,
    buttonLabel,
    entityType,
    url,
}) => {

  const handleImageChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const addSiteImage = () => {
    setSiteImages([...siteImages, null]);
  };
  
  const triggerFileInput = (id) => {
    document.getElementById(id).click();
  };
  const [name, setName] = useState('');
  const [typeArt, setTypeArt] = useState('');
  const [mainDescription, setMainDescription] = useState('');
  const [externalImage, setExternalImage] = useState();
  const [siteImages, setSiteImages] = useState([]);
  const token = window.localStorage.getItem('token')

  const config = {
    headers : {
      'Authorization': `Bearer ${token}`
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('title', name);
    formData.append('category', typeArt);
    formData.append('content', mainDescription);
    formData.append('main_image', externalImage);
    formData.append('main_image', siteImages);
    formData.append('user_id', 1);
   
    try {
      const response = await axios.post(url, formData , config);
      console.log('Submitted data:', formData);
      console.log('Response:', response.data);
      if(response.status === 201) {
        alert('Item created successfully');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="sidFlex">
        <SideBar />
        <Form className="flex-grow-1 form-design" onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName" className="form-group-spacing">
                <Form.Label className='labels-form'>{nameLabel}</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Enter title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formLocation" className="form-group-spacing">
                <Form.Label className='labels-form'>{type}</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Enter type"
                  value={typeArt}
                  onChange={(e) => setTypeArt(e.target.value)}
                />
              </Form.Group>
             
              <Form.Group controlId="formMainDescription" className="form-group-spacing">
                <Form.Label className='labels-form'>{mainDescriptionLabel}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="form-control"
                  placeholder="Enter main description"
                  value={mainDescription}
                  onChange={(e) => setMainDescription(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formExternalImage" className="form-group-spacing">
                <Row className="align-items-center">
                  <Col xs={8}>
                    <Form.Label className='labels-form'>الصورة الخارجية</Form.Label>
                  </Col>
                  <Col xs={4} className="d-flex align-items-center image-container" onClick={() => triggerFileInput('externalImageInput')}>
                    {externalImage ? (
                      <Image src={externalImage && URL.createObjectURL(externalImage)} rounded className="border border-secondary image-preview" />
                    ) : (
                      <img src={imageIcon} alt="Add external image" className="placeholder-image" />
                    )}
                    <input
                      id="externalImageInput"
                      type="file"
                      onChange={(e)=> setExternalImage(e.target.files[0])}
                      // onChange={handleImageChange(setExternalImage)}
                      className="form-control-file d-none"
                    />
                    <img src={pen} alt="" className="ml-2 edit-icon" />
                  </Col>
                </Row>
              </Form.Group>
             
              <Form.Group controlId="formSiteImages" className="form-group-spacing">
                <Row className="align-items-center">
                  <Col xs={12}>
                    <Form.Label className='labels-form'>إضافة صور للموقع</Form.Label>
                  </Col>
                </Row>
                <Row>
                  {siteImages.map((image, index) => (
                    <Col key={index} xs={6} md={4} className="d-flex align-items-center image-container" onClick={() => triggerFileInput(`siteImageInput${index}`)}>
                      {image ? (
                        <Image src={URL.createObjectURL(siteImages[index])} rounded className="border border-secondary image-preview" />
                      ) : (
                        <img src={imageIcon} alt="Add site image" className="placeholder-image" />
                      )}
                      <input
                        id={`siteImageInput${index}`}
                        type="file"
                        onChange={(e)=> setSiteImages([...siteImages, e.target.files[0]])}
                        // onChange={handleSiteImageChange(index)}
                        className="form-control-file d-none"
                      />
                      <img src={pen} alt="" className="ml-2 edit-icon" />
                    </Col>
                  ))}
                  <Col xs={6} md={4} className="d-flex align-items-center add-site-image-container">
                    <Button variant="secondary" onClick={addSiteImage} className="add-image-button">
                      <img src={addIcon} alt="Add icon" />
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
    
          <div className="submit-container">
            <Button variant="success" type="submit" className="submit-btn">
              {buttonLabel}
            </Button>
          </div>
        </Form>
        </div>
    </div>
  )
}

export default AddArticleComponent