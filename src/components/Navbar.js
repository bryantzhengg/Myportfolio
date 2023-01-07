import "./NavbarStyles.css"
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import email from "../assets/2email.png"
import linkdin from "../assets/2linkdin.png"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to={"/"}>
            <h1>Portfolio</h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="email">
                <a href="mailto:bryant.zhg@gmail.com">
                    <img className="email" src={email} alt="email"/>
                </a>
            </div>

            <div className="linkdin">
                <a href="linkedin.com/in/bryant-zheng">
                    <img className="linkdin" src={linkdin} alt="linkdin"/>
                </a>
            </div>
        </ul>

        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "white" }
            } />) : (<FaBars size={20} style={{ color: "white" }
            } />)}
            
        </div>
    </div>
  );
};

export default Navbar