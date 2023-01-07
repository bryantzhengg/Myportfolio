import "./HeroImageStyles.css";
import pinklandscape from "../assets/pinklandscape.jpg"

import React from 'react'

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={pinklandscape} alt="pinklandscape"/>
        </div>

        <div className="content">
            <h1>Bryant Zheng</h1>
        </div>


    </div>
  )
}

export default HeroImage;