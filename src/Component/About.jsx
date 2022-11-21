import React from "react";
import FlipExample from "./AboutInfo";
import { Footer } from "./Footer";


export const About=()=>{
    return(
        <div className="about-flip">
            <div className="flip-example">
             <FlipExample/>
            </div>
            <div className="footer-about">
            <Footer/>
            </div>
        </div>
    )
}