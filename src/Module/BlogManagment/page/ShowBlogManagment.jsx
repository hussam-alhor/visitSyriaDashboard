import React from 'react'
import SideBar from '../../SideBar/SideBar'
import AddArticleComponent from '../../AboutSyriaManagment/component/AddArticleComponent/AddArticleComponent'

const ShowBlogManagment = () => {
  return (
   <>
   <AddArticleComponent
    nameLabel='اسم المقال'
    type='تصنيف المقال'
    mainDescriptionLabel='محتوى المقالة'
    buttonLabel='إضافة مقال'
    entityType=''
    url={`http://localhost:8000/api/Blog`}
   />
   </>
  )
}

export default ShowBlogManagment