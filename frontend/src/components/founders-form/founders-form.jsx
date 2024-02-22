import React from "react";
import "./founders-form.css";
import { useState} from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Founders_form = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        compname: '',
        category: '',
        compwebsite: '',
        country: '',
        city: '',
        testImage: null
      });
      const [file , setFile] = useState();
    
    //   const handleChange = (e) => {
    //     if (e.target.name === 'testImage') {
    //       setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //       setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    //   };
      const handleFile = (e) =>{
        const FILE = e.target.files[0];
        setFile(FILE);
        console.log(FILE);
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('firstname', formData.firstname);
        formDataToSend.append('lastname', formData.lastname);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phoneNumber', formData.phone);
        formDataToSend.append('companyName', formData.compname);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('compwebsite', formData.compwebsite);
        formDataToSend.append('country', formData.country);
        formDataToSend.append('city', formData.city);
        formDataToSend.append('imag', file);
        

    
        try {
            const response = await axios.post('http://localhost:3001/uploadcompany', formDataToSend);
            if (response.status === 201 || response.status === 200) {
                console.log('Company saved successfully');
            }
        } catch (error) {
            alert("Error Adding Company");
            console.error('Error:', error);
        }
    };
    
 
    return (
        <div className="comp-details-form">
            <h1 className="comp-details-head">Let's Begin the Path to Finding Investors</h1>
            <br />
            <p className="comp-details-subhead">Tell us a bit about yourself and your company</p>
            <br />
            
            <h2 className="comp-form-head">1. Contact Info</h2>
            <br />
            <div className="comp-form-container">
                <div>
                    <label className="founders-form-label">First Name:</label>
                    <input type="text" name="fname" className="founders-form-input" onChange={handleChange}/>
                </div>
                <div>
                    <label className="founders-form-label">Last Name:</label>
                    <input type="text" name="lname" className="founders-form-input" onChange={handleChange}/>
                </div>
            </div>

            <div className="comp-form-container">
                <div>
                    <label className="founders-form-label">Email Address: </label>
                    <input type="email" name="email" className="founders-form-input" onChange={handleChange}/>
                </div>
                <div>
                    <label className="founders-form-label">Phone Number: </label>
                    <input type="text" name="phone" className="founders-form-input" onChange={handleChange}/>
                </div>
            </div>

            <h2 className="comp-form-head">2. Company Basics</h2>
            <br />
            <div className="comp-form-container">
                <div>
                    <label className="founders-form-label">Company Name:</label>
                    <input type="text" name="company-name" className="founders-form-input" onChange={handleChange}/>
                </div>
                <div>
                    <label className="founders-form-label">Category:</label>
                    <select name="category" className="founders-form-input"  onChange={handleChange}>
                        <option value="Art">Art</option>
                        <option value="Comics">Comics</option>
                        <option value="Crafts">Crafts</option>
                        <option value="Dance">Dance</option>
                        <option value="Design">Design</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Filmm & Video">Filmm & Video</option>
                        <option value="Food">Food</option>
                        <option value="Games">Games</option>
                        <option value="Journalism">Journalism</option>
                        <option value="Music">Music</option>
                        <option value="Photography">Photography</option>
                        <option value="Publishing">Publishing</option>
                        <option value="Technology">Technology</option>
                        <option value="Theater">Theater</option>
                    </select>
                </div>
            </div>

            <div className="comp-form-container">
                <div>
                    <label className="founders-form-label">Company Website:</label>
                    <input type="url" name="company-website" className="founders-form-input" onChange={handleChange}/>
                </div>
                <div>
                    <label className="founders-form-label">Country:</label>
                    <input type="text" name="country" className="founders-form-input" onChange={handleChange}/>
                </div>
            </div>
            
            <div className="comp-form-container">
                <div>
                    <label className="founders-form-label">City:</label>
                    <input type="text" name="city" className="founders-form-input"  onChange={handleChange}/>
                </div>
                <div>
                    <label className="founders-form-label">Upload company poster image:</label>
                    <input type="file" name="testImage" className="founders-form-input" onChange={handleFile}/>
                </div>
            </div>

            <button type="submit" className="founders-form-button" onClick={handleSubmit}>Register</button>
            
        </div>
    );
};

export default Founders_form;