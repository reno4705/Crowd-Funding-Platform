import React from "react";
import { useState, useEffect } from "react";
import Nav from "../navbar/navbar";
import axios from "axios";
import "./investor.css";

const Investor = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const result = await axios.get("http://localhost:3001/uploadcompany");
    console.log(result.data.data);
    setImage(result.data.data);
  };

  return (
    <div>
      <div className="text-end">
        <Nav />
      </div>

      <div>
        <h2 className="investor-head">Recently Launched</h2>
      </div>

      <div className="investor-page-card">
        {image == null
          ? ""
          : image.map((data) => {
              return (
                <div>
                  <div className="investor-gallery-col">
                    <img
                      src={`http://localhost:3001/images/${data.img}`}
                      alt="company1"
                      className="investor-gallery-img"
                    />
                    <h2 className="investor-gallery-head">{data.companyName}</h2>
                  </div>
              </div>
              );
            })}
      </div>
    </div>
  );
};

export default Investor;
