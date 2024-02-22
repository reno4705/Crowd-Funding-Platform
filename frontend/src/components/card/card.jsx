import React from "react";
import './card.css'

const Card = (props) => {
    return (
        <div className="gallery-col">
            <img src={props.img} alt="company1" className="gallery-img"/>
            <h2 className="gallery-head">{props.name}</h2>
            <div className="details-row">
                <div className="details-col">
                    <h6 className="details-val">{props.capital}</h6>
                    <p className="details-name">Raised</p>
                </div>
                <div className="details-col">
                    <h6 className="details-val">{props.count}</h6>
                    <p className="details-name">Investors</p>
                </div>
                <div className="details-col">
                    <h6 className="details-val">{props.minamount}</h6>
                    <p className="details-name">Min.Investment</p>
                </div>
            </div>
        </div>
    )
}

export default Card