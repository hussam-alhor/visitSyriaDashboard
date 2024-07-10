import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import addIcon from '/assets/img/add.svg';
import imageIcon from '/assets/img/image.svg';
import pen from '/assets/img/pen.svg';

const ArticleEdit = ({
    nameLabel,
    typeLabel,
    mainDescriptionLabel,
    buttonLabel,
    initialName,
    initialtype,
    initialMainDescription,
    initialMainImage,
    url,
}) => {
    const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialtype);
  const [mainDescription, setMainDescription] = useState(initialMainDescription);
  const [siteImages, setSiteImages] = useState(initialMainImage);
  const [moreImages , setMoreImages] = useState([]);

  useEffect(() => {

    setName(initialName);
    setType(initialtype);
    setMainDescription(initialMainDescription);
    setSiteImages(initialMainImage);

  }, [
    initialName,
    initialtype,
    initialMainDescription,
    initialMainImage,
  ]);

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

  const token = window.localStorage.getItem('token')
  // console.log(token)
  const config = {
    headers : {
      'Authorization': `Bearer ${token}`
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      type,
      mainDescription,
      siteImages,
    };

    try {
      const response = await axios.put(url, formData , config);
      console.log('Submitted data:', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error updating the item:', error);
    }
  };
  return (
    <div>
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
            <Form.Label className='labels-form'>{typeLabel}</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
                {siteImages ? (
                  <Image src={siteImages} rounded className="border border-secondary image-preview" />
                ) : (
                  <img src={imageIcon} alt="Add external image" className="placeholder-image" />
                )}
                <input
                  id="externalImageInput"
                  type="file"
                  onChange={handleImageChange(setSiteImages)}
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
              {moreImages.map((image, index) => (
                <Col key={index} xs={6} md={4} className="d-flex align-items-center image-container" onClick={() => triggerFileInput(`siteImageInput${index}`)}>
                  {image ? (
                    <Image src={`http://localhost:8000/storage/${moreImages}`} rounded className="border border-secondary image-preview" />
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
    </div>
  )
}

export default ArticleEdit