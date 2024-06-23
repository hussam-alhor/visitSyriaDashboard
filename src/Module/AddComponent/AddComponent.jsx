import React, { useState, useRef, useEffect } from 'react'
import './AddComponent.css'
import imageIcon from '../../../public/assets/img/imageIcon.png'
import plusImage from '../../../public/assets/img/plusImage.png'
import axios from 'axios';
export default function AddComponent({ nameSection, location, price, firstDescrption, secondDescription, AddNameSection, Menu, route }) {
    // State for form data and error messages

    const [errors, setErrors] = useState({
        nameSection: '',
        location: '',
        price: '',
        firstDescrption: '',
        secondDescription: ''
    });
    const [formData, setFormData] = useState({
        nameSection: '',
        location: '',
        price: '',
        firstDescrption: '',
        secondDescription: '',
        exteriorImage: null,
        interiorImage: null,
        MenuImage: null,
        otherImages: [],


    });
    // State to hold names of uploaded images

    const [imageNames, setImageNames] = useState({
        exteriorImage: '',
        interiorImage: '',
        MenuImage: '',
        otherImages: [],
    });
    // Refs for file inputs

    const exteriorInputRef = useRef(null);
    const interiorInputRef = useRef(null);
    const MenuInputRef = useRef(null);
    const otherInputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

    // Trigger file input click

    const handleFileClick = (inputRef) => {
        inputRef.current.click();
    };
    // Handle file input change

    const handleFileChange = (e, type, index = null) => {
        const file = e.target.files[0];
        if (file) {
            if (type === 'exterior') {
                setFormData({ ...formData, exteriorImage: file });
                setImageNames({ ...imageNames, exteriorImage: file.name });
            } else if (type === 'interior') {
                setFormData({ ...formData, interiorImage: file });
                setImageNames({ ...imageNames, interiorImage: file.name });
            } else if (type === 'menu') {
                setFormData({ ...formData, MenuImage: file });
                setImageNames({ ...imageNames, MenuImage: file.name });
            } else if (type === 'other') {
                const newOtherImages = [...formData.otherImages];
                newOtherImages[index] = file;
                const newOtherImageNames = [...imageNames.otherImages];
                newOtherImageNames[index] = file.name;
                setFormData({ ...formData, otherImages: newOtherImages });
                setImageNames({ ...imageNames, otherImages: newOtherImageNames });
            }
        }
    };
    // Handle input changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });

    };

    // Validate form data and submit

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = { nameSection: '', location: '', price: '', firstDescrption: '', secondDescription: '' };
        if (formData.nameSection.trim() == '') {
            newErrors.nameSection = 'هذا الحقل مطلوب';
            valid = false;
        }
        if (formData.location.trim() == '') {
            newErrors.location = 'هذا الحقل مطلوب';
            valid = false;
        }
        if (formData.firstDescrption.trim() == '') {
            newErrors.firstDescrption = 'هذا الحقل مطلوب';
            valid = false;
        }
        if (formData.secondDescription.trim() == '') {
            newErrors.secondDescription = '*هذا الحقل مطلوب*';
            valid = false;
        }
        if (formData.price.trim() == '') {
            newErrors.price = 'هذا الحقل مطلوب';
            valid = false;
        }
        setErrors(newErrors);
        if (valid) {
            console.log(formData)
        }

    }

    // Ensure useEffect runs when formData changes
    return (

        <div className='addComponent'>
            <form onSubmit={handleSubmit} action="" className='addForm'>
                <div className="addInfo">
                    <div className="input-info">
                        <label htmlFor="nameSection">{nameSection}</label>
                        <input onChange={handleChange} value={formData.nameSection} type="text" name="nameSection" id="nameSection" />
                        {errors.nameSection && <p className='errorMessage'>{errors.nameSection}</p>}
                    </div>
                    <div className="input-info">
                        <label htmlFor="location">{location}</label>
                        <input value={formData.location} onChange={handleChange} type="text" name="location" id="location" />
                        {errors.location && <p className='errorMessage'>{errors.location}</p>}
                    </div>
                    <div className="input-info">
                        <label htmlFor="price">{price}</label>
                        <input value={formData.price} onChange={handleChange} type="text" name="price" id="price" />
                        {errors.price && <p className='errorMessage'>{errors.price}</p>}
                    </div>
                    <div className="input-info">
                        <label htmlFor="firstDescrption">{firstDescrption}</label>
                        <input value={formData.firstDescrption} onChange={handleChange} style={{ height: '70px' }} type="text" name="firstDescrption" id="firstDescrption" />
                        {errors.firstDescrption && <p className='errorMessage'>{errors.firstDescrption}</p>}
                    </div>
                    <div className="input-info">
                        <label htmlFor="secondDescription">{secondDescription}</label>
                        <input value={formData.secondDescription} onChange={handleChange} style={{ height: '140px' }} type="text" name="secondDescription" id="secondDescription" />
                        {errors.secondDescription && <p className='errorMessage'>{errors.secondDescription}</p>}
                    </div>
                    <input className='addSubmit' type="submit" name="" value={AddNameSection} id="" />

                </div>
                <div className="addImages">
                    <div className="input-image">
                        <label htmlFor="">الصورة الخارجية</label>
                        <input
                            id="exteriorInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={exteriorInputRef}
                            onChange={(e) => handleFileChange(e, 'exterior')}
                        />
                        <img src={formData.exteriorImage ? URL.createObjectURL(formData.exteriorImage) : imageIcon} alt="Exterior" onClick={() => handleFileClick(exteriorInputRef)} style={{ cursor: 'pointer' }} />
                        {/* {imageNames.exteriorImage && <p>{imageNames.exteriorImage}</p>} */}
                    </div>
                    <div className="input-image">
                        <label htmlFor="">الصورة الداخلية</label>
                        <input
                            id="interiorInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={interiorInputRef}
                            onChange={(e) => handleFileChange(e, 'interior')}
                        />
                        <img src={formData.interiorImage ? URL.createObjectURL(formData.interiorImage) : imageIcon} alt="Interior" onClick={() => handleFileClick(interiorInputRef)} style={{ cursor: 'pointer' }} />
                        {/* {imageNames.interiorImage && <p>{imageNames.interiorImage}</p>} */}
                    </div>
                    {Menu != null && <div className="input-image">
                        <label htmlFor="">{Menu}</label>
                        <input
                            id="menu"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={MenuInputRef}
                            onChange={(e) => handleFileChange(e, 'menu')}
                        />
                        <img src={formData.MenuImage ? URL.createObjectURL(formData.MenuImage) : imageIcon} alt="Menu" onClick={() => handleFileClick(MenuInputRef)} style={{ cursor: 'pointer' }} />
                        {/* {imageNames.MenuImage && <p>{imageNames.MenuImage}</p>} */}
                    </div>}

                    <div className="gallery">
                        <label>إضافة صور للموقع</label>

                        <div className="choose-gallery">

                            {otherInputRefs.current.map((inputRef, index) => (
                                <div className="input-image" key={index}>
                                    {/* <label>Other Image {index + 1}:</label> */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        ref={inputRef}
                                        onChange={(e) => handleFileChange(e, 'other', index)}
                                    />
                                    <img src={formData.otherImages[index] ? URL.createObjectURL(formData.otherImages[index]) : imageIcon} alt={`Other ${index + 1}`} onClick={() => handleFileClick(inputRef)} style={{ cursor: 'pointer' }} />
                                    {/* {imageNames.otherImages[index] && <p>{imageNames.otherImages[index]}</p>} */}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}
