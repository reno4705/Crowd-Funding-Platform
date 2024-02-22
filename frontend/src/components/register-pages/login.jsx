import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import signimg from "../Assets/log.svg"
import './signup.css'
import background from "../Assets/background.png";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

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


    const handleLogin =  async (event) => {
        event.preventDefault();
        try {
            const response = await axios
            .post('http://localhost:3001/login', { email, password })
            const token = response.data.token
            
            setEmail('')
            setPassword('')
            fetchUsers();
            navigate('/home')
            window.location.reload();
            localStorage.setItem('token', token)
        } catch (error) {
            console.log('Login Error', error)
        }
    }

    return (
        <>
        <ToastContainer/>
        <login className="login-body">
            <div className="sign-container" style={{backgroundImage: `url(${background})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover" }}>
                <div className="sign-col">
                    <img src={signimg} alt="man" className="sign-img"/>
                </div>
                <div class="login-box sign-col">
                    <h2 className="page-head">Log-in</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-field">
                            <input type="text" name="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="sign-input"/>
                        </div>

                        <div className="input-field">
                            <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="sign-input"  />
                        </div>

                        <button type="submit" className="sign-submit">Log in</button>

                        <p className="check-line">New to Grow More <Link to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </login>
        </>
    )
}

export default Login