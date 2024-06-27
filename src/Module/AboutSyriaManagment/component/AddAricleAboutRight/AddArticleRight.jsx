import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './AddArticleRight.css'

const AddArticleRight = () => {
  
  const [ i , setI ] = useState(false)

  const handleSelect = () => {
    setI(true)
  }

  return (

    <div>
    <Form action='' className='aboutRightForm'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>عنوان المقالة</Form.Label>
        <Form.Control 
        className='aboutRightFormInput'
          type="text"
           placeholder=""
           />
      </Form.Group>

      <Form.Select aria-label="Default select example" onClick={handleSelect}>
        { !i ? (
          <option>تصنيف المقالة</option> 
        ) : (
        <>
        <option value="1">التاريخ</option>
        <option value="2">الآثار</option>
        <option value="3">الحضارات</option>
        <option value="3">الطبيعة</option>
        <option value="3">السياحة</option>
        </>
       )}
      </Form.Select>

      <Form.Group className="mb-3 aboutRightText" controlId="exampleForm.ControlTextarea1">
        <Form.Label>محتوى المقالة</Form.Label>
        <Form.Control 
         as="textarea"
         rows={8}
         className='aboutRightFormInput' 
         />
      </Form.Group>
    </Form>
     
    </div>
  )
}

export default AddArticleRight