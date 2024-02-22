import React from "react";
import SocialMediaButtons from 'react-social-media-buttons'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-data">
                <p className="footer-head">HOW IT WORKS</p>
                <div className="footer-list">
                    <p>Campaign</p>
                    <p>InDemand</p>
                    <p>How It Works</p>
                    <p>Enterprise</p>
                    <p>Fees</p>
                </div>
            </div>

            <div className="footer-data">
                <p className="footer-head">RESOURCES</p>
                <div className="footer-list">
                    <p>Education Center</p>
                    <p>Experts Directory</p>
                    <p>Help & Support</p>
                    <p>Trust & Safety</p>
                </div>
            </div>

            <div className="footer-data">
                <p className="footer-head">ABOUT US</p>
                <div className="footer-list">
                    <p>What We Do</p>
                    <p>Press</p>
                    <p>About us</p>
                </div>
            </div>

            <div>
                <p className="footer-head">FOLLOW US</p>
                <hr/><br/>
                <SocialMediaButtons
                links={['https://www.facebook.com/facebook','https://twitter.com/Twitter','https://www.instagram.com/instagram/','https://www.linkedin.com/company/linkedin/']}
                buttonStyle={{width: '43px', height: '43px', margin: '0px 7px', backgroundColor: '#ffffff', borderRadius: '50%', border: '1px solid #000000'}}
                iconStyle={{color: '#000000'}}
                openNewTab={true}
                />
            </div>
        </div>
    )
}

export default Footer