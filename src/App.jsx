import './App.css'
import NavBar from './Module/NavBar/NavBar'
import SideBar from './Module/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import ShowDashboard from './Module/Dashboard/page/ShowDashboard'

import ShowHotelsManagment from './Module/HotelsManagment/page/ShowHotelsManagment'
import ShowHotelsReports from './Module/HotelsReports/page/ShowHotelsReports'
import ShowRestaurantsManagment from './Module/RestaurantsManagment/page/ShowRestaurantsManagment'
import ShowRestaurantsReports from './Module/RestaurantsReports/page/ShowRestaurantsReports'
import ShowLandMarksManagment from './Module/LandMarksManagment/page/ShowLandMarksManagment'
import ShowLandMarksReports from './Module/LandMarksReport/page/ShowLandMarksReports'
import ShowBlogManagment from './Module/BlogManagment/page/ShowBlogManagment'
import ShowBlogReport from './Module/BlogReport/page/ShowBlogReport'
import Setting from './Module/Setting/page/Setting'
import ShowAboutSyriaManagment from './Module/AboutSyriaManagment/page/ShowAboutSyriaManagment'
import ShowHotels from './Module/Hotels/page/ShowHotels'
import ShowRestaurants from './Module/Restaurants/page/ShowRestaurants'
import ShowLandMarks from './Module/LandMarks/page/ShowLandMarks'
import ShowBlogs from './Module/Blogs/page/ShowBlogs'
import Login from './Module/Login/page/Login'
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import ReactDOM from 'react-dom';



import { Container, Row, Col } from 'react-bootstrap';
import EditRestaurants from './Module/Restaurants/page/EditRestaurants'
import EditHotel from './Module/Hotels/page/EditHotel'
import EditLandMark from './Module/LandMarks/page/EditLandMark'
import AboutSyriaAdd from './Module/AboutSyriaManagment/page/AboutSyriaAdd'
import AboutSyriaEdit from './Module/AboutSyriaManagment/page/AboutSyriaEdit'
import AddComponent from './Module/AddComponent/AddComponent'

    

const App = () => {


  return ( 
    <> 
    <NavBar/>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<ShowDashboard/>} />

    <Route path='/AboutSyria' element={<ShowAboutSyriaManagment/>} />
    <Route path='/AboutSyriaAdd' element={<AboutSyriaAdd/>} />
    <Route path='/AboutSyriaEdit' element={<AboutSyriaEdit/>} />

    <Route path='/hotels' element={<ShowHotels/>} />
    <Route path='/hotelsManagment' element={<ShowHotelsManagment/>}/>
    <Route path='/hotelsReports' element={<ShowHotelsReports/>} /> 
    <Route path="/hotel-edit/:hotelId" element={<EditHotel />} />


    <Route path='/restaurants' element={<ShowRestaurants/>} />
    <Route path='/restaurantsManagment' element={<ShowRestaurantsManagment/>} />
    <Route path='/restaurantsReports' element={<ShowRestaurantsReports/>} />
    <Route path="/restaurant-edit/:restaurantId" element={<EditRestaurants />} />


    <Route path='/landMarks' element={<ShowLandMarks/>} />
    <Route path='/landMarksManagment' element={<ShowLandMarksManagment/>} />
    <Route path='/landMarksReports' element={<ShowLandMarksReports/>} />
    <Route path="/landmark-edit/:landmarkId" element={<EditLandMark />} />

    <Route path='/Blogs' element={<ShowBlogs/>} />
    <Route path='/BlogManagment' element={<ShowBlogManagment/>} />
    <Route path='/BlogReport' element={<ShowBlogReport/>} />
    

    <Route path='/setting' element={<Setting/>} />
</Routes> 
</> 
)};
//     <div className='editComponent'>
//     <NavBar/>
 
// <div >
//       <Row>
//         <Col md={3} className='sidee'>
//           <SideBar  />
//         </Col>
//         <Col md={9}>
//         <GenericEditForm
//   nameLabel="اسم المطعم"
//   locationLabel="موقع المطعم"
//   priceLabel="سعر الحجز"
//   mainDescriptionLabel="الوصف الأولي"
//   secondaryDescriptionLabel="الوصف الثانوي"
//   buttonLabel="تعديل مطعم"
//   initialName="وردة الشام"
//   initialLocation="دمشق"
//   initialPrice="5000"
//   initialMainDescription="وصف رئيسي"
//   initialSecondaryDescription="وصف ثانوي"
//   initialExternalImage={null}
//   initialInternalImage={null}
//   intialMenueImage={'public/assets/img/restaurant.svg'}
//   initialSiteImages={['public/assets/img/restaurant.svg','public/assets/img/home.svg']}
//   entityType="restaurant" // For restaurant
// />

        /* <GenericEditForm
  nameLabel="اسم الفندق"
  locationLabel="موقع الفندق"
  priceLabel="سعر الحجز"
  mainDescriptionLabel="الوصف الأولي"
  secondaryDescriptionLabel="الوصف الثانوي"
  buttonLabel="تعديل فندق"
  initialName="فندق دمشق"
  initialLocation="دمشق"
  initialPrice="10000"
  initialMainDescription="وصف رئيسي"
  initialSecondaryDescription="وصف ثانوي"
  initialExternalImage={null}
  initialInternalImage={null}
  initialSiteImages={[]}
  entityType="hotel" // For hotel
/> */

//         </Col>
//       </Row>
//       </div>
//       </div>
//   );
// };

      
     
    
export default App;
