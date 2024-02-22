import React from 'react'
import { useState, useEffect } from 'react';
import Nav from '../navbar/navbar';
import axios from 'axios';

function Investor() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/uploadcompany')
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err, "it has an error"))
    })

    return (
        <div>
            <div className='text-end'>
                <Nav />
            </div>

            <div className=''>
                {
                    data.map((singleData)=>{
                        const base64String = btoa(
                            String.fromCharCode(...new Uint8Array(singleData.img.data.data))
                        );
                        return <img src={`data:image/png,base64,${base64String}`} alt='cardimage'/>
                    })
                }
            </div>
        </div>
    )
}

export default Investor