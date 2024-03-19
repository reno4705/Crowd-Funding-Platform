import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

const Forgotpassword = () => {
  const [email, setEmail] = useState()
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/forgot-password', {email})
      .then(res => {
          if(res.data.Status === "Success") {
              navigate('/login')
             
          }
      }).catch(err => console.log(err))
  }

  return (
        <div className="">
        <h4>Forgot Password</h4>
          <div className="">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="" onClick={handleSubmit}>Send</button>
      </div>
  )
}

export default Forgotpassword