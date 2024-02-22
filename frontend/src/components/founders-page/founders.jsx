import React from "react";
import './founders.css';
import graph from "../Assets/graph.png"
import chart from "../Assets/circle chart.png"
import usersgroup from "../Assets/manyusers.png"
import Foundersform from "../founders-form/founders-form"
import Nav from "../navbar/navbar"
import cardimg1 from "../Assets/founders-card-1.png"
import cardimg2 from "../Assets/founders-card-2.png"
import cardimg3 from "../Assets/founders-card-3.png"
import Footer from "../footer/footer";

const Founders = () => {
    return (
        <founders>
            <div className="temp">
                <Nav />
            </div>

            <div className="founders-head-row">
                <div className="founders-head-col-left">
                    <p className="founders-gallery-head">Leadership by the Numbers</p>
                    <button className="founders-gallery-button">Get Started</button>
                </div>

                <div className="founders-head-col-right">
                    <div className="founders-head-col-right-cont">
                        <img src={graph} alt="graph" className="founders-col-img"/>
                        <h1>₹1.5B</h1>
                        <p>Collectively raised for startups <br/> Over 1,000+ rounds..</p>
                    </div>
                    <div className="founders-head-col-right-cont">
                        <img src={usersgroup} alt="usersgroup" className="founders-col-img"/>
                        <h1>1.8M</h1>
                        <p>Community <br/> for your offering..</p>
                    </div>
                    <div className="founders-head-col-right-cont">
                        <img src={chart} alt="chart" className="founders-col-img"/>
                        <h1>90%</h1>
                        <p>Of offerings reach their <br/> minimum funding goal..</p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="founders-mid-head">You'll Be in Good Company</h1><br/>
                <h3 className="founders-mid-sub">All companies on GrowMore are thoroughly vetted and must pass our internal due diligence process before launch. 
                    The results? Well, they speak for themselves…</h3>
            </div>

            <div className="founders-card-row">
                <div className="founders-card-col">
                    <img src={cardimg1} alt="img" className="founders-card-img"/>
                    <div className="founders-card-col-content">
                        <h2 className="founders-card-head">₹35M Raised</h2>
                        <p className="founders-card-content">"After we started [our first] raise, we ended up getting an order... It was for 156 houses, so about nine-and-a-half million dollars"</p>
                        <p className="founndes-card-author">Boxabl CEO Galiona Tiramani</p>
                    </div>
                </div>

                <div className="founders-card-col">
                    <img src={cardimg2} alt="img" className="founders-card-img"/>
                    <div className="founders-card-col-content">
                        <h2 className="founders-card-head">₹9M Riased</h2>
                        <p className="founders-card-content">"I compared the different platforms that were avaliable, and I found that GrowMore was the most entrepreneur friendly."</p>
                        <p className="founndes-card-author">Flower Turbines CEO Dan Farbman</p>
                    </div>
                </div>

                <div className="founders-card-col">
                    <img src={cardimg3} alt="img" className="founders-card-img"/>
                    <div className="founders-card-col-content">
                        <h2 className="founders-card-head">₹2M Raised</h2>
                        <p className="founders-card-content">"The most we had ever done [was] 64 barrels in a year... Now we're on track to do 300 barrels a year... And that's due to crowdfunding"</p>
                        <p className="founndes-card-author">Copperworks Distillinng CEO Jason Parker</p>
                    </div>
                </div>
            </div>

            <div className="temp">
                <Foundersform />
            </div>

            <div className="temp">
                <Footer />
            </div>
        </founders>
    )
}

export default Founders;