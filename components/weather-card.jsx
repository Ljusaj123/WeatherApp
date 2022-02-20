import Image from "next/image";
import React, {useEffect, useState} from "react";
import {MdOutlineClose} from 'react-icons/md';

const Card =(props)=>{


    const [cold,setCold]= useState(true);


    useEffect(()=>{
        if(props.props.temp>=16){
            setCold(false);
        }else{
            setCold(true);
        }
    })
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={cold ? "/cold-bg.jpg" : "/warm-bg.jpg" } alt="aaa" />
            </div>
        
            <div className="text-container">
                <div className="close-container">
                    <MdOutlineClose/>
                    
                </div>
                <div className="city-info">
                    <h2>Lorem ipsum</h2>
                    <h4>10.10.2020</h4>
                </div>
                <div className="weather-container">
                <div className="weather-info-container">
                <p>something:</p>
                    <p>aaaa</p>
                </div>
                <div className="weather-info-container">
                <p>something:</p>
                    <p>aaaa</p>
                </div>
                <div className="weather-info-container">
                    <p>something:</p>
                    <p>aaaa</p>
                </div>
                <div className="weather-info-container">
                    <p>something:</p>
                    <p>aaaa</p>
                </div>
                <div className="weather-info-container">
                    <p>something:</p>
                    <p>aaaa</p>
                </div>

                </div>
                

            </div>
            
        </div>
    )

}

export default Card;
