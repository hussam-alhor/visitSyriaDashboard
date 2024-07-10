import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from '../../SideBar/SideBar';
import GenericEditForm from '../../sharedComponents/GenericEditForm';

const EditHotel = () => {
    const { hotelId } = useParams();
  
//${restaurantId}
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(true);

    const token = window.localStorage.getItem('token')
  // console.log(token)
  const config = {
    headers : {
      'Authorization': `Bearer ${token}`
    }
  }

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/show_hotel/${hotelId}` , config);
                setInitialData(response.data.hotel);
                setLoading(false);
              console.log(response.data);
            } catch (error) {
                console.error('Error fetching the initial data:', error);
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [hotelId]);
 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!initialData) {
        return <div>Error loading data.</div>;
    }

    return (
        <div className='sidFlex'>
            <SideBar />
            <GenericEditForm
                nameLabel="اسم الفندق"
                locationLabel="موقع الفندق"
                priceLabel="سعر الحجز"
                mainDescriptionLabel="الوصف الأولي"
                secondaryDescriptionLabel="الوصف الثانوي"
                buttonLabel="تعديل فندق"
                initialName={initialData.name}
                initialLocation={initialData.location}
                initialPrice={initialData.price}
                initialMainDescription={initialData.long_description}
                initialSecondaryDescription={initialData.short_description}
                initialExternalImage={initialData.exterior_photos}
                initialInternalImage={initialData.interior_photos}
                initialSiteImages={[]}
                entityType="hotel" 
                url={`http://localhost:8000/api/Edit_hotel/${hotelId}`} 
        
            />
        </div>
    );
};
//{initialData.more_images}["public/assets/img/hotel.svg"]

export default EditHotel;
