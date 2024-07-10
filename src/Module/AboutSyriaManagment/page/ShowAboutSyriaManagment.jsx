import SideBar from "../../SideBar/SideBar";
import AboutSyriaTable from "./AboutSyriaTable";
import "./ShowAboutSyriaManagment.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowAboutSyriaManagment = () => {
  
  const [data, setData] = useState([])
  const token = window.localStorage.getItem('token')
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
      const response = await  axios.get( 'http://127.0.0.1:8000/api/all_posts', config)
      setData (response.data.post)
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  }

  let tit = data.map(i => i.title) ;
  let category = data.map(i => i.category) ;
  let content = data.map(i=> i.content);
  let img = data.map(i=> i.main_image)
  let id = data.map(i=> i.id)
 
  
  const deleteRow = async ()=> {
    try {
      axios.delete(`http://127.0.0.1:8000/api/delete_post/${id.map(i => i)}`)
      fetchData();
    } catch (error) {
      console.error('Error deleting items:', error)
    }
  }

  const navigate = useNavigate()
  
  const editRow = (id) => {
    navigate(`/AboutSyriaEdit/${id}`);
  };
  
  return (
    
     <div className="sidFlex">
      <SideBar />

      {/* <div className="showAboutContent">
      <Row>
          <Col sm='5'>
           <AddArticleRight/>
          </Col>
          <Col sm='5'>
            <AddArticleAboutLeft />
          </Col>
      </Row>
      </div> */}  

        <AboutSyriaTable
          
          head1='id'
          head2='عنوان المقال'
          head3='التصنيفات'
          head4='نص المقال'
          head5=' الصور'
          head6='تعديل '
          head7='حذف'
          head8=''
          butnAdd= "إضافة مقال"
          data={data}
          det1={tit}
          det2={category}
          det3={content}
          det4 = {img ? "تم التحميل" : "لم يتم التحميل"}
          det5 = {id}
          det6 = ''
          deleteRow = {deleteRow}
          urlAdd = '/AboutSyriaAdd'
          urlEdit = '/AboutSyriaEdit'
          editRow = {editRow}
        />
    </div>
  );
};


export default ShowAboutSyriaManagment;