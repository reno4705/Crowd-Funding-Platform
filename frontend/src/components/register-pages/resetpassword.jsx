import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Resetpassword = () => {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { id, token } = useParams();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/reset-password/${id}/${token}`, { password })
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Your Password is Successfully Updated");
          navigate("/login");
        }
      })
      .catch((err) => {
        alert("Error Occured Please Try Again Later!");
        console.log(err)
      });
  };

  return (
      <div className="">
        <h4>Reset Password</h4>
          <div className="">
            <label htmlFor="email"><strong>New Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="">Update</button>
      </div>
  );
};

export default Resetpassword;
