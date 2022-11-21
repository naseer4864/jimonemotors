import React from "react";
import { Link } from "react-router-dom";
import  "./style.css"
import logo from "./images/logo.png"





export const Navabr=(props)=>{
    const [isMoblie, setIsmobile]=React.useState(false)
    const{
        ho,
        inv,
        ab,
        con
    }=props
    return(
        <div className="navbar">
            <Link to="/">
            <img src={logo} alt="" className="nav-logo"/>
            </Link>
            <ul className={isMoblie ? "nav-link-mobile" : "nav-links"} onClick={()=> setIsmobile(false)}>
                <Link to="/" className="nav-home">
                <li>{ho}</li>
                </Link>
                <Link to="/inventory" className="inventory">
                <li>{inv}</li>
                </Link>
                <Link to="/about" className="about">
                <li>{ab}</li>
                </Link>
                <Link to="/contact" className="contact">
                <li>{con}</li>
                </Link>
            </ul>
            <div className="nav-menu" onClick={() => setIsmobile(! isMoblie) }>
                {isMoblie ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars-staggered"></i>}
            </div>
        </div>
    )
}