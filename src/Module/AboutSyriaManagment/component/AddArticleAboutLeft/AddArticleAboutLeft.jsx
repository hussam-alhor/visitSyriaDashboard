import React from 'react'
import Form from 'react-bootstrap/Form';
import './AddArticleAboutLeft.css'


const AddArticleAboutLeft = () => {
  return (
    <div>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>الصورة الرئيسية</Form.Label>
        <Form.Control type="file" calssName="addArticleImg" />
      </Form.Group>
    </div>
  )
}

export default AddArticleAboutLeft