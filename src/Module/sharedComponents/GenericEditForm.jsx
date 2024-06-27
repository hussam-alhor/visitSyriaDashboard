import React, { useState } from 'react';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import './genericEdit.css';
import addIcon from '../../../public/assets/img/add.svg';
import imageIcon from '../../../public/assets/img/image.svg';
import pen from '../../../public/assets/img/pen.svg';

const GenericEditForm = ({
  nameLabel,
  locationLabel,
  priceLabel,
  mainDescriptionLabel,
  secondaryDescriptionLabel,
  buttonLabel,
  initialName,
  initialLocation,
  initialPrice,
  initialMainDescription,
  initialSecondaryDescription,
  initialExternalImage,
  initialInternalImage,
  initialMenuImage,
  initialSiteImages,
  entityType,
  url,
   // Accept URL as a prop

}) => {
  const [name, setName] = useState(initialName);
  const [location, setLocation] = useState(initialLocation);
  const [price, setPrice] = useState(initialPrice);
  const [mainDescription, setMainDescription] = useState(initialMainDescription);
  const [secondaryDescription, setSecondaryDescription] = useState(initialSecondaryDescription);
  const [externalImage, setExternalImage] = useState(initialExternalImage);
  const [internalImage, setInternalImage] = useState(initialInternalImage);
  const [siteImages, setSiteImages] = useState(initialSiteImages);
  const [menuImage, setMenuImage] = useState(initialMenuImage);
 
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

  const handleSiteImageChange = (index) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newSiteImages = [...siteImages];
        newSiteImages[index] = reader.result;
        setSiteImages(newSiteImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (id) => {
    document.getElementById(id).click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      location,
      price,
      mainDescription,
      secondaryDescription,
      externalImage,
      internalImage,
      siteImages,
      menuImage
    };
    console.log('Form data before submission:', formData); // Log the form data

    try {
 console.log(url);
      const response = await axios.put(url, formData);
      console.log('Submitted data:', formData); // Log the submitted data
      console.log('Response:', response.data); // Log the response from the server
    
    } catch (error) {
      console.error('Error updating the restaurant:', error);
    }
  };

  return (
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
                  <Image src={`http://localhost:8000/storage/${externalImage}`} rounded className="border border-secondary image-preview" />
                ) : (
                  <img src={imageIcon} alt="Add external image" className="placeholder-image" />
                )}
                <input
                  id="externalImageInput"
                  type="file"
                  onChange={handleImageChange(setExternalImage)}
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
                  <Image src={`http://localhost:8000/storage/${internalImage}`} rounded className="border border-secondary image-preview" />
                ) : (
                  <img src={imageIcon} alt="Add internal image" className="placeholder-image" />
                )}
                <input
                  id="internalImageInput"
                  type="file"
                  onChange={handleImageChange(setInternalImage)}
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
                    <Image src={`http://localhost:8000/storage/${menuImage}`} rounded className="border border-secondary image-preview" />
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
                    <Image src={`http://localhost:8000/storage/${image}`} rounded className="border border-secondary image-preview" />
                  ) : (
                    <img src={imageIcon} alt="Add site image" className="placeholder-image" />
                  )}
                  <input
                    id={`siteImageInput${index}`}
                    type="file"
                    onChange={handleSiteImageChange(index)}
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
  );
};

export default GenericEditForm;
