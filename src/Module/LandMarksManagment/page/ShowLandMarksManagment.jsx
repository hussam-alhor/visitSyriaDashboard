import AddComponent from "../../AddComponent/AddComponent"

const ShowLandMarksManagment = () => {
  return (
    <>
      <AddComponent
         nameLabel="اسم المعلم"
         locationLabel="موقع المعلم"
         priceLabel="سعر الحجز"
         mainDescriptionLabel="الوصف الأولي"
         secondaryDescriptionLabel="الوصف الثانوي"
         buttonLabel="إضافة معلم"
         entityType="" // For restaurant
         url={`http://localhost:8000/api/add_landMark`} // Use template literal    
       />
    </>
  )
}

export default ShowLandMarksManagment