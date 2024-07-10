import React from 'react'
import AddComponent from '../../AddComponent/AddComponent'

const ShowHotelsManagment = () => {
  return (
    <div>
      <>
      <AddComponent
         nameLabel="اسم الفندق"
         locationLabel="موقع الفندق"
         priceLabel="سعر الحجز"
         mainDescriptionLabel="الوصف الأولي"
         secondaryDescriptionLabel="الوصف الثانوي"
         buttonLabel="إضافة فندق"
         entityType="" // For restaurant
         url={`http://localhost:8000/api/add_hotel`} // Use template literal    
       />
      </>
    </div>
  )
}

export default ShowHotelsManagment