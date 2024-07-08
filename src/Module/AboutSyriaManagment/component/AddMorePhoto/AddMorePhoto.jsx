import React, { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
// import './AddArticleAboutLeft.css'
import img from '/assets/img/image.svg'
import plus from '/assets/img/plus.svg'
// import AddMorePhoto from '../AddMorePhoto/AddMorePhoto';


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
    <div>
       <Form.Group controlId="formFile" className="mb-3">
       
        <Form.Control
          type="file" 
          calssName="addArticleImg"
          ref={fileRef}
          onChange={handleFileChange}
          style={{display:'none'}}
          />
          {selectImg ?
            <div className="aboutImg">
              <img onClick={()=> fileRef.current.click()} src={selectImg} alt="img" className='aboutImgContent' /> 
            </div>:
            <>
              <div className="aboutImg">
                {/* <img onClick={()=> fileRef.current.click()} src={plus} alt="" className='aboutImgPlus' />  */}
                <img onClick={()=> fileRef.current.click()} src={img} alt="" className='aboutImgImg' /> 
              </div>
            </>
          }
       </Form.Group>
    </div>
  )
}

export default AddMorePhoto