import React, { useState, useEffect } from "react";
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import './signup.css'
import signimg from "../Assets/log.svg"
import background from "../Assets/background.png";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const notify = () => toast.success('Account Created Sucessfully');
    const enotify = () => toast.error('Error Occured: Please Try again');

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:3001/register')
        .then((res) => {
            console.log(res.data)
        })
    }

    const handleRegister = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:3001/register', { email, name, password })
        .then(() => {
            notify();
            setEmail('')
            setName('')
            setPassword('')
            fetchUsers();
            navigate('/login')
        })
        .catch((error) => {
            enotify();
            console.log('Unable to register user');
        })

    }

    return (
        <>
            <ToastContainer />
            <login className="login-body" /*style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})` }}*/>
                <div className="sign-container" style={{backgroundImage: `url(${background})`,
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundSize: "cover" }}>
                    <div className="sign-col">
                        <img src={signimg} alt="man" className="sign-img"/>
                    </div>
                    <div className="login-box sign-col">
                        <h2 className="page-head">Sign-up</h2>
                        <form onSubmit={handleRegister}>
                            <div className="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" name="name" className="sign-input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                                                    
                            <div className="input-field">
                                <input type="text" name="email" className="sign-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            
                            <div className="input-field">
                                <input type="password" name="password" className="sign-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            

                            <button type="submit" className="sign-submit" >SignUp</button>

                            <p className="check-line">Have an account? <Link to='/login'>Log in</Link></p>
                        </form>
                    </div>
                </div>
            </login>
        </>
    )
}

export default Signup