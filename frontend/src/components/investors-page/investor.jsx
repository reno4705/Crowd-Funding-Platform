import React from "react";
import { useState, useEffect } from "react";
import Nav from "../navbar/navbar";
import axios from "axios";

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

      <div className="investor-page-card">
        {image == null
          ? ""
          : image.map((data) => {
              return (
                <div>
                  <div className="gallery-col">
                    <img
                      src={`http://localhost:3001/images/${data.img}`}
                      alt="company1"
                      className="gallery-img"
                    />
                    <h2 className="gallery-head">{data.companyName}</h2>
                    <div className="details-row">
                      <div className="details-col">
                        <h6 className="details-val">32</h6>
                        <p className="details-name">Raised</p>
                      </div>
                      <div className="details-col">
                        <h6 className="details-val">324</h6>
                        <p className="details-name">Investors</p>
                      </div>
                      <div className="details-col">
                        <h6 className="details-val">4563</h6>
                        <p className="details-name">Min.Investment</p>
                      </div>
                    </div>
                  </div>
              </div>
              );
            })}
      </div>
    </div>
  );
};

export default Investor;
