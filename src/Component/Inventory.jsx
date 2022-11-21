import React from "react";
import BounceExample from "./Reveal";
import { Footer } from "./Footer";


export const Inventory=()=>{
    return(
        <div className="inventory">
            <div className="inven-bounce">
            <BounceExample/>
            </div>
            <Footer/>
        </div>
    )
}