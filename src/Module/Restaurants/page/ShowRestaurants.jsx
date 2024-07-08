import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../SideBar/SideBar';
import AboutSyriaTable from '../../AboutSyriaManagment/page/AboutSyriaTable';
import axios from 'axios';

const ShowRestaurants = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/all_Restaurants');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };

  const deleteRow = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete_restaurant/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const editRow = (id) => {
    navigate(`/restaurant-edit/${id}`);
  };

  return (
    <div className='sidFlex'>
      <SideBar />
      <AboutSyriaTable 
        head1='id'
        head2='اسم المطعم'
        head3='الموقع'
        head4='الوصف'
        head5='الخدمات'
        head8='عروض الأسعار'
        head6='تعديل '
        head7='حذف'
        butnAdd='إضافة مطعم'
        data={data}
        det1={data.map(i => i.name)}
        det2={data.map(i => i.location)}
        det3={data.map(i => i.short_description)}
        det4={data.map(i => i.interior_photos ? "خدمة " : "لا توجد")}
        det5={data.map(i => i.id)}
        det6={data.map(i => i.interior_photos ? '$$' : '')}
        deleteRow={deleteRow}
        editRow={editRow}
        urlAdd='/restaurantsManagment'
        urlEdit='/restaurant-edit'
      />
    </div>
  );
};

export default ShowRestaurants;
