import React from "react";
import Responsive from "./Slider";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import happy from "./images/happy-familyjpeg.jpeg";
import auto from "./images/auto-repair-shop.jpeg"
import Fade from "./CusSlider";
import { Footer } from "./Footer";



const Square = {
    visible: {opacity:1, scale:1, type: "spring",damping: 5,
    stiffness: 100,
    restDelta: 0.001, transition:{duration: 0.8, ease: [0, 0.71, 0.2, 1.01]}},
    hidden: {opacity:0, scale:0}
  }


export const Home=(props)=>{
    const animation=useAnimation()
  const {ref,inView}=useInView({threshold:0.2})
  useEffect(()=>{
    if(inView){
      animation.start("visible")
    }
    if(!inView){
      animation.start("hidden")
    }
    console.log("use effect hook, inView =", inView)
  },[inView,animation]);
  const {
    dream,
    affordable,
    service
  }=props
    return(
        <div className="home">
            <motion.div className="responsive"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={Square}>
            <Responsive/>
            </motion.div>
            <div className="home-banner">
              <div className="home-bx1">
              <p>
                {dream}
              </p>
              </div>
              <div className="home-bx2">
                <img src={happy} alt="" />
                <p>
                {affordable}
                </p>
              </div>
              <div className="home-bx3">
                <p>
                {service}
                </p>
                <img src={auto} alt="" />
              </div>
            </div>
            <div className="fade">
            <Fade/>
            </div>
            <Footer/>
        </div>
    )
}