import AddComponent from '../../AddComponent/AddComponent';


const  ShowRestaurantsManagment = () => {
  
  return (
   <>
   <AddComponent
            nameLabel="اسم المطعم"
            locationLabel="موقع المطعم"
            priceLabel="سعر الحجز"
            mainDescriptionLabel="الوصف الأولي"
            secondaryDescriptionLabel="الوصف الثانوي"
            buttonLabel="إضافة مطعم"
            entityType="restaurant" // For restaurant
            url={`http://localhost:8000/api/add_resturant`} // Use template literal    
            />
   </>
  )
}

export default ShowRestaurantsManagment