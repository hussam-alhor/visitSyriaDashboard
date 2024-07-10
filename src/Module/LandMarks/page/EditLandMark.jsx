import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from '../../SideBar/SideBar';
import GenericEditForm from '../../sharedComponents/GenericEditForm';

const EditLandMark = () => {
    const { landmarkId } = useParams();
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
                const response = await axios.get(`http://localhost:8000/api/show_landMark/${landmarkId}` , config);
                setInitialData(response.data.landmark);
               
                setLoading(false);
                console.log('Fetched initial data:', response.data);
            } catch (error) {
                console.error('Error fetching the initial data:', error);
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [landmarkId]);

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
                nameLabel="اسم المعلم السياحي"
                locationLabel="موقع المعلم السياحي"
                priceLabel="سعر الحجز"
                mainDescriptionLabel="الوصف الأولي"
                secondaryDescriptionLabel="الوصف الثانوي"
                buttonLabel="تعديل معلم"
                initialName={initialData.name}
                initialLocation={initialData.location}
                initialPrice={initialData.price}
                initialMainDescription={initialData.long_description}
                initialSecondaryDescription={initialData.short_description}
                initialExternalImage={initialData.exterior_photos}
                initialInternalImage={initialData.interior_photos}
                initialSiteImages={[]}
                entityType="landmark" 
                url={`http://localhost:8000/api/Edit_landMark/${landmarkId}`}
            />
        </div>
    );
};

export default EditLandMark;
