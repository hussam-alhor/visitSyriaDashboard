import React, { useRef, useState } from 'react'
import "./AddMorePhoto.css"
import { Form } from 'react-bootstrap'
import img from '/assets/img/image.svg'

const id = [
{
  id:1 ,
},
{
  id:2 ,
},
{
  id:3 ,
},
{
  id:4 ,
},
]


const AddMorePhoto = () => {

    const [selectImg, setSelectImg] = useState('')

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if(file) {
      setSelectImg(URL.createObjectURL(file));
    }
  }
  
  const fileRef = useRef(null)

  return (
    <>
      <Form.Label> صور إضافية </Form.Label>
     <div className='AboutAddMore'>
        {
          id.map((item , index)=> (
            <Form.Group controlId="formFile" className='AboutMoreH' key={index} >
            <Form.Control
              type="file" 
              calssName="addArticleImgMore"
              ref={fileRef}
              onChange={handleFileChange}
              style={{display:'none'}}
              />
              {selectImg ?
                <div className="aboutImgMore">
                  <img onClick={()=> fileRef.current.click()} src={selectImg} alt="img" className='aboutImgContent' /> 
                </div>:
                <>
                  <div className="aboutImgMore">
                    <img onClick={()=> fileRef.current.click()} src={img} alt="" className='aboutImgImg' /> 
                  </div>
                </>
              }
           </Form.Group>

          ))
        }
      </div>
    </>
  )
}

export default AddMorePhoto