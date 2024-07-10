import AddArticleComponent from "../component/AddArticleComponent/AddArticleComponent"

const AboutSyriaAdd = () => {
  return (
   <>
   <AddArticleComponent
    nameLabel='اسم المقال'
    type='تصنيف المقال'
    mainDescriptionLabel='محتوى المقالة'
    buttonLabel='إضافة مقال'
    entityType=''
    url={`http://localhost:8000/api/add_Post`}
   />
   </>
  )
}

export default AboutSyriaAdd