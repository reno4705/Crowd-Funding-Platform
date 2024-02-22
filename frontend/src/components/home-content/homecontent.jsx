import React from "react";
import './homecontent.css';
import leftcol from '../Assets/homeleft.png'
import rightcol from '../Assets/homeright.png'
import { Link } from 'react-router-dom'

const Homecontent = () => {
    return (
        <homecontent>
            <h2 className="home-head">Dream it. Fund it. Make it. Ship it.<br></br> 
            We help at every step from concept to market.</h2>

            <div className="home-row">
                <div className="home-column">
                    <img src={leftcol} alt="crown-funding" className="col-img"/>
                    <p className="col-head">Invest in early stage StartUps and Companies</p>
                    <p className="col-link"><Link to='#'>Startup Investing</Link></p>
                </div>

                <div className="home-column">
                    <img src={rightcol} alt="crown-funding" className="col-img"/>
                    <p className="col-head">Raise funds for your Startup with a Crowd funding campaign</p>
                    <p className="col-link"><Link to='#'>Raise Capital</Link></p>
                </div>
            </div>
        </homecontent>
    )
}

export default Homecontent