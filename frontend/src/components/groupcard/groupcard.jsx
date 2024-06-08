import React from "react"
import Card from "../card/card"
import './groupcard.css'
import r1c1 from '../Assets/r1c1.webp'
import r1c2 from '../Assets/r1c2.webp'
import r1c3 from '../Assets/r1c3.webp'
import r2c1 from '../Assets/r2c1.webp'
import r2c2 from '../Assets/r2c2.webp'
import r2c3 from '../Assets/r2c3.webp'
import {Link} from 'react-router-dom'

const Groupcard = () => {
    return (
        <groupcard>
            <h2 className="gc-head">Current Funding Rounds</h2>
            <div className="card-row">
                <Card 
                img={r1c1}
                name="Cytonics"
                capital="₹1.50M"
                count="651"
                minamount="₹499"
                />

                <Card 
                img={r1c2}
                name="The BuildClub"
                capital="₹1.13M"
                count="628"
                minamount="₹492"
                />

                <Card 
                img={r1c3}
                name="R3 Printing"
                capital="₹2.52M"
                count="2481"
                minamount="₹250"
                />
            
                <Card 
                img={r2c1}
                name="WiGL"
                capital="₹7.05M"
                count="4569"
                minamount="₹501"
                />

                <Card 
                img={r2c2}
                name="ACME AtronOmatic"
                capital="₹4.13M"
                count="3284"
                minamount="₹399"
                />

                <Card 
                img={r2c3}
                name="Legion M Entertainment"
                capital="₹3.52M"
                count="12481"
                minamount="₹50"
                />
            </div>
            <div className="show-but-cont">
                <button className="show-button"><Link to='/investor'>Show All Startups</Link></button>
            </div>
        </groupcard>    
    )
}

export default Groupcard