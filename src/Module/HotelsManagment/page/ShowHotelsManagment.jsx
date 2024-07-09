import React, { useState } from 'react'
import SideBar from '../../SideBar/SideBar'
import AddComponent from '../../AddComponent/AddComponent'
import axios from 'axios'


// user_id'=>$request->user_id,
//             'name'=>$request->name,
//             'location'=>$request->location,
//              'short_description'=>$request->short_description,
//              'long_description'=>$request->long_description,
//              'exterior_photos'=>$exterior_photos,
//              'interior_photos'=>$interior_photos,
//              //'more_images'=>$request->,
//              'services'=>$request->services,
//              'price

const ShowHotelsManagment = () => {

  // const [user_id, setUser_id] = useState(1)
  // const [ name , setName] = useState()
  // const [  location , setLocation] = useState()
  // const [  short_description , setShort_description] = useState()
  // const [  long_description , setLong_description] = useState()
  // const [  services , setServices] = useState("")
  // const [  price , setPrice] = useState()
  // const [  interior_photos , setInterior_photos] = useState()
  // const [  exterior_photos , setExterior_photos] = useState()

  // const handleSubmit = async (e)=> {
  //   e.preventDefault();
  //   let response = await axios.post('http://127.0.0.1:8000/api/add_hotel' , {
  //     user_id:user_id,
  //     name: name,
  //     location: location,
  //     short_description:short_description,
  //     long_description:long_description,
  //     interior_photos: interior_photos,
  //     exterior_photos: exterior_photos,
  //     services:services,
  //     price:price
  //   })
  //   console.log(response.data)
  // }

  return (
    <div className='sidFlex'>
      <SideBar/>
       
      <AddComponent 
                     nameSection='اسم الفندق' 
                     location='موقع الفندق'
                      price='عروض الأسعار' 
                      firstDescrption='الوصف الأولي'
                      secondDescription='الوصف الثانوي' 
                      AddNameSection='إضافة فندق'
                      Menu= ''
                      route=''
                      // handleSubmit = {handleSubmit}
                      // nameform = {name}
                      // locationform = {location}
                      // priceform = {price}
                      // firstDescrptionform = {short_description}
                      // secondDescriptionform = {long_description}
                      // servicesform = {services}
                      // interior_photosform = {interior_photos}
                      // exterior_photosform = {exterior_photos}
                      /> 
      </div>
  )
}

export default ShowHotelsManagment