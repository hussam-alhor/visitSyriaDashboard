import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import addIcon from '/assets/img/add.svg';
import imageIcon from '/assets/img/image.svg';
import pen from '/assets/img/pen.svg';
import SideBar from '../SideBar/SideBar';


export default function AddComponent({
    nameLabel,
    locationLabel,
    priceLabel,
    mainDescriptionLabel,
    secondaryDescriptionLabel,
    buttonLabel,
    entityType,
    url,
    }) {
 
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
        const [location, setLocation] = useState('');
        const [price, setPrice] = useState();
        const [mainDescription, setMainDescription] = useState('');
        const [secondaryDescription, setSecondaryDescription] = useState('');
        const [externalImage, setExternalImage] = useState();
        const [internalImage, setInternalImage] = useState(null);
        const [siteImages, setSiteImages] = useState([]);
        const [menuImage, setMenuImage] = useState();
        const token = window.localStorage.getItem('token')
        // console.log(token)
        const config = {
          headers : {
            'Authorization': `Bearer ${token}`
          }
        }
        // console.log(token)
        const handleSubmit = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append('user_id' , 1)
          formData.append('name', name);
          formData.append('location', location);
          formData.append('price', price);
          formData.append('short_description', mainDescription);
          formData.append('long_description', secondaryDescription);
          formData.append('exterior_photos', externalImage)
          formData.append('interior_photos', internalImage)
          formData.append('interior_photos', siteImages)
          formData.append('interior_photos', menuImage)
          try {
            const response = await axios.post(url, formData , config);
            console.log('Submitted data:', formData);
            console.log('Response:', response.data);
            if(response.status === 201) {
              alert('Item created successfully');
            }
          } catch (error) {
            console.error('Error updating the item:', error);
          }
        };
      
    return (
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
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formLocation" className="form-group-spacing">
                <Form.Label className='labels-form'>{locationLabel}</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPrice" className="form-group-spacing">
                <Form.Label className='labels-form'>{priceLabel}</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
              <Form.Group controlId="formSecondaryDescription" className="form-group-spacing">
                <Form.Label className='labels-form'>{secondaryDescriptionLabel}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="form-control"
                  placeholder="Enter secondary description"
                  value={secondaryDescription}
                  onChange={(e) => setSecondaryDescription(e.target.value)}
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
              <Form.Group controlId="formInternalImage" className="form-group-spacing">
                <Row className="align-items-center">
                  <Col xs={8}>
                    <Form.Label className='labels-form'>الصورة الداخلية</Form.Label>
                  </Col>
                  <Col xs={4} className="d-flex align-items-center image-container" onClick={() => triggerFileInput('internalImageInput')}>
                    {internalImage ? (
                      <Image src={internalImage && URL.createObjectURL(internalImage)} rounded className="border border-secondary image-preview" />
                    ) : (
                      <img src={imageIcon} alt="Add internal image" className="placeholder-image" />
                    )}
                    <input
                      id="internalImageInput"
                      type="file"
                      onChange={(e)=> setInternalImage(e.target.files[0])}
                      // onChange={handleImageChange(setInternalImage)}
                      className="form-control-file d-none"
                    />
                    <img src={pen} alt="" className="ml-2 edit-icon" />
                  </Col>
                </Row>
              </Form.Group>
              {entityType === 'restaurant' && (
                <Form.Group controlId="formMenuImage" className="form-group-spacing">
                  <Row className="align-items-center">
                    <Col xs={8}>
                      <Form.Label className='labels-form'>إضافة منيو</Form.Label>
                    </Col>
                    <Col xs={4} className="d-flex align-items-center image-container" onClick={() => triggerFileInput('menuImageInput')}>
                      {menuImage ? (
                        <img src={ menuImage} rounded className="border border-secondary image-preview" />
                      ) : (
                        <img src={imageIcon} alt="Add menu image" className="placeholder-image" />
                      )}
                      <input
                        id="menuImageInput"
                        type="file"
                        onChange={handleImageChange(setMenuImage)}
                        className="form-control-file d-none"
                      />
                      <img src={pen} alt="" className="ml-2 edit-icon" />
                    </Col>
                  </Row>
                </Form.Group>
              )}
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
    )
}
