import React from "react";
import "./founders-form.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Founders_form = () => {
    const navigate = useNavigate();
    const notify = () => toast.success('Details Saved');
    const enotify = () => toast.error('Error Occured');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [category, setCategory] = useState('');
    const [companyweb, setcompnayweb] = useState('');
    const [country, setcountry] = useState('');
    const [city, setCity] = useState('');
    const [file, setFile] = useState();


    const handleFile = (e) => {
        const FILE = e.target.files[0];
        setFile(FILE);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('firstname', firstName);
        formDataToSend.append('lastname', lastName);
        formDataToSend.append('email', email);
        formDataToSend.append('phoneNumber', phone);
        formDataToSend.append('companyName', companyName);
        formDataToSend.append('category', category);
        formDataToSend.append('compwebsite', companyweb);
        formDataToSend.append('country', country);
        formDataToSend.append('city', city);
        formDataToSend.append('testImage', file);

        console.log(formDataToSend);

        try {
            const res = await axios.post('http://localhost:3001/uploadcompany', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.status === 201 || res.status === 200) {
                notify();
                return;
            }
            else {
                enotify();
                return;
            }
        }
        catch (err) {
            enotify();
            console.error(err);
            return;
        }
    };


    return (
        <>
            <ToastContainer />
            <div className="comp-details-form">
                <h1 className="comp-details-head">Let's Begin the Path to Finding Investors</h1>
                <br />
                <p className="comp-details-subhead">Tell us a bit about yourself and your company</p>
                <br />

                <h2 className="comp-form-head">1. Contact Info</h2>
                <br />
                <form>
                    <div className="comp-form-container">
                        <div>
                            <label className="founders-form-label">First Name:</label>
                            <input type="text" name="fname" className="founders-form-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <label className="founders-form-label">Last Name:</label>
                            <input type="text" name="lname" className="founders-form-input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>

                    <div className="comp-form-container">
                        <div>
                            <label className="founders-form-label">Email Address: </label>
                            <input type="email" name="email" className="founders-form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label className="founders-form-label">Phone Number: </label>
                            <input type="text" name="phone" className="founders-form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>

                    <h2 className="comp-form-head">2. Company Basics</h2>
                    <br />
                    <div className="comp-form-container">
                        <div>
                            <label className="founders-form-label">Company Name:</label>
                            <input type="text" name="company-name" className="founders-form-input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                        <div>
                            <label className="founders-form-label">Category:</label>
                            <select name="category" className="founders-form-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Art">Select</option>
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
                            <input type="url" name="company-website" value={companyweb} className="founders-form-input" onChange={(e) => setcompnayweb(e.target.value)} />
                        </div>
                        <div>
                            <label className="founders-form-label">Country:</label>
                            <input type="text" name="country" className="founders-form-input" value={country} onChange={(e) => setcountry(e.target.value)} />
                        </div>
                    </div>

                    <div className="comp-form-container">
                        <div>
                            <label className="founders-form-label">City:</label>
                            <input type="text" name="city" className="founders-form-input" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div>
                            <label className="founders-form-label">Upload company poster image:</label>
                            <input type="file" name="testImage" className="founders-form-input" onChange={handleFile} />
                        </div>
                    </div>

                    <button type="submit" className="founders-form-button" onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </>
    );
};

export default Founders_form;