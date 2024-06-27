import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from '../../SideBar/SideBar';
import GenericEditForm from '../../sharedComponents/GenericEditForm';

const EditRestaurants = () => {
    const { restaurantId } = useParams();
  

    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/restaurants/${restaurantId}`);
                setInitialData(response.data);
                setLoading(false);
              console.log(response.data);
            } catch (error) {
                console.error('Error fetching the initial data:', error);
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [restaurantId]);
 

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
                nameLabel="اسم المطعم"
                locationLabel="موقع المطعم"
                priceLabel="سعر الحجز"
                mainDescriptionLabel="الوصف الأولي"
                secondaryDescriptionLabel="الوصف الثانوي"
                buttonLabel="تعديل مطعم"
                initialName={initialData.name}
                initialLocation={initialData.location}
                initialPrice={initialData.price}
                initialMainDescription={initialData.long_description}
                initialSecondaryDescription={initialData.short_description}
                initialExternalImage={initialData.exterior_photos}
                initialInternalImage={initialData.interior_photos}
                initialSiteImages={initialData.more_images}
                entityType="restaurant" // For restaurant
                url={`http://localhost:8000/api/restaurants/${restaurantId}`} // Use template literal
        
            />
        </div>
    );
};
//{initialData.more_images}["public/assets/img/hotel.svg"]

export default EditRestaurants;
