import React, { useEffect, useState } from 'react'
import SideBar from '../../SideBar/SideBar'
import axios from 'axios'
import AboutSyriaTable from '../../AboutSyriaManagment/page/AboutSyriaTable'
import { useNavigate } from 'react-router-dom'

const ShowBlogs = () => {

  const [data, setData] = useState([])
  const token = window.localStorage.getItem('token')
  // console.log(token)
  const config = {
    headers : {
      'Authorization': `Bearer ${token}`
    }
  }
  
      useEffect ( ()=> {

        fetchData();
      }, [] )
    const fetchData = async ()=> {
      try {
        const response = await  axios.get( 'http://127.0.0.1:8000/api/all_blogs' , config)
        console.log(response.data)
        setData (response.data.blog)
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    }
  
    let tit = data.map(i => i.title) ;
    // let location = data.map(i => i.location) ;
    let date = data.map(i=> i.created_at);
    // let serv = data.map(i=> i.interior_photos)
    console.log(date)
    let id = data.map(i=> i.id)
    // let price = data.map(i => i.interior_photos)
    
    const deleteRow = async ()=> {
      try {
        axios.delete(`http://127.0.0.1:8000/api/delete_blog/${id.map(i => i)}`)
        fetchData();
      } catch (error) {
        console.error('Error deleting items:', error)
      }
    }
    const navigate = useNavigate()
  
    const editRow = (id) => {
      navigate(`/blog-edit/${id}`);
    };

  return (
    <div className='sidFlex'>
      <SideBar/>
      
      <AboutSyriaTable 
      
      head1='id'
      head2='عنوان المقال'
      head3='تاريخ النشر'
      head4=''

      head5=''
      head8=''

      head6='تعديل '
      head7='حذف'
      butnAdd = 'إضافة مقالة'
      data={data}
      det1={tit}
      det2={date}
      det3= ''
      det4 = ''
      det5 = {id}
      det6= ''
      deleteRow = {deleteRow}
      urlAdd = '/BlogManagment'
      urlEdit = '/blog-edit'
      editRow = {editRow}
      />
      
      </div>
  )
}

export default ShowBlogs