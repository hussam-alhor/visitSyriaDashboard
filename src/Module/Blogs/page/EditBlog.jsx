import React, { useEffect, useState } from 'react'
import ArticleEdit from '../../AboutSyriaManagment/component/ArticleEdit/ArticleEdit'
import SideBar from '../../SideBar/SideBar'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const EditBlog = () => {

    const { AboutId } = useParams();
    const token = window.localStorage.getItem('token')
  // console.log(token)
  const config = {
    headers : {
      'Authorization': `Bearer ${token}`
    }
  }
  
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(true);
   console.log(AboutId)
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/show_bloge/${AboutId}` , config);
                setInitialData(response.data.post);
                setLoading(false);
              console.log(response.data);
            } catch (error) {
                console.error('Error fetching the initial data:', error);
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [AboutId]);
 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!initialData) {
        return <div>Error loading data.</div>;
    }

  return (
    <div className='sidFlex'>
      <SideBar/>
      <ArticleEdit
        nameLabel="عنوان المقال"
        typeLabel="تصنيف المقال"
        mainDescriptionLabel='محتوى المقال'
        buttonLabel='تعديل المقال'
        initialName={initialData.title}
        initialtype= ''
        initialMainDescription={initialData.content}
        initialMainImage={initialData.main_image}
        url={`http://localhost:8000/api/Blog/${AboutId}`}
      />
    </div>
  )
}

export default EditBlog