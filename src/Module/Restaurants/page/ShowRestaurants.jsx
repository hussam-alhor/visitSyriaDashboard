import React, { useEffect, useState } from 'react'
import SideBar from '../../SideBar/SideBar'
import AboutSyriaTable from '../../AboutSyriaManagment/page/AboutSyriaTable'
import axios from 'axios'

const ShowRestaurants = () => {
  
    const [data, setData] = useState([])
  
      useEffect ( ()=> {

        fetchData();
      }, [] )
    const fetchData = async ()=> {
      try {
        const response = await  axios.get( 'http://127.0.0.1:8000/api/all_Restaurants');
      console.log(response.data);
        setData (response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    }
  
    let tit = data.map(i => i.name) ;
    let location = data.map(i => i.location) ;
    let content = data.map(i=> i.short_description);
    let serv = data.map(i=> i.interior_photos)
    let id = data.map(i=> i.id)
    let price = data.map(i => i.interior_photos)
    
    const deleteRow = async ()=> {
      try {
        axios.delete(`http://127.0.0.1:8000/api/delete_restaurant/${id.map(i => i)}`)
       
        fetchData();
        // console.log('hello')
      } catch (error) {
        console.error('Error deleting items:', error)
      }
    }
  


  return (
    <div className='sidFlex'>
      <SideBar/>
      <AboutSyriaTable 
      
      head1='id'
      head2='اسم المطعم'
      head3='الموقع'
      head4='الوصف'
      head5='الخدمات'
      head8='عروض الأسعار'
      head6='تعديل '
      head7='حذف'
      butnAdd = 'إضافة مطعم'
      data={data}
      det1={tit}
      det2={location}
      det3={content}
      det4 = {serv ? "خدمة " : "لا توجد"}
      det5 = {id}
      det6= {price && '$$' || ''}
      deleteRow = {deleteRow}
      urlAdd = '/restaurantsManagment'
      urlEdit = '/restaurant-edit'
      
      />
      </div>
  )
}

export default ShowRestaurants