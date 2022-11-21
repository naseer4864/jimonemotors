import React from "react";
import {useForm} from "react-hook-form"
import { Footer } from "./Footer";



export const Contact=()=>{
    const {register, formState:{errors}}=useForm()
    return(
        <div>
           <div className="contact-form">
            <div className="contact-header">
                <h2>CONTACT JIMONE GLOBAL MOTORS</h2>
                <div className="line"></div>
            </div>
            <div className="form">
                <form action="">
                    <h3>General Enquiries</h3>
                    <div className="input">
                <input type="text" name="name" placeholder="ENTER YOUR FULL NAME"
                {...register("name",{required:true})}/>
                <div className="error">
                    {errors.name?.type === "required" && "Full name is required"}
                </div>
            </div>
            <div className="input">
                <input type="email" name="email" placeholder="ENTER YOUR EMAIL" 
                {...register("email", {required:true, pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}/>
                <div className="error">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" && "Enter valid email"}
                </div>
            </div>
            <div className="input">
                <input type="number" name="number" placeholder="ENTER YOUR MOBILE NUMBER" 
                {...register("number", {
                    minLength:6,
                    maxLength:12,
                })}/>
                 <div className="error">
                 {errors.number?.type === "minLength" && "Entered number is less than 6 digits"}
                {errors.number?.type === "maxLength" && "Entered number is more thna 12 digits"}
                 </div>
            </div>
            <div>
                <textarea type="text" name="message" cols="65" rows="20" placeholder="MESSAGE"
                {...register("message",{required:true})}></textarea>
                <div className="error">
                {errors.message?.type === "required" && "Enter your messages"}
                </div>
            </div>
            <button type="submit" className="btn">SUBMIT</button>
                </form>
            <div className="dealer-info">
                <div className="dealer1">
                    <h2>DEALERSHIP INFORMATION</h2>
                    <div className="line"></div>
                </div>
                <div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <p> No 1, Wole Ola Estate, Old Gov's, Office Gbangan, Ibadan Road, Osogbo,Osun State</p>
                </div>
                <div className="bussiness-hours">
                    <div className="buss">
                        <h3>BUSINESS HOURS</h3>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="hours">
                    <div className="mon">
                        <h5>MONDAY</h5>
                        <p>8:00 AM - 6:00 PM</p>
                    </div>
                    <div className="tues">
                        <h5>TUESDAY</h5>
                        <p>8:00 AM - 6:00 PM</p>
                    </div>
                    <div className="wed">
                        <h5>WEDNESDAY</h5>
                        <p>8:00 AM - 6:00 PM</p>
                    </div>
                    <div className="thurs">
                        <h5>THURSDAY</h5>
                        <p>8:00 AM - 6:00 PM</p>
                    </div>
                    <div className="fri">
                        <h5>FRIDAY</h5>
                        <p>8:00 AM - 6:00 PM</p>
                    </div>
                    <div className="satur">
                        <h5>SATURDAY</h5>
                        <p>8:00 AM - 6:00 PM</p>
                    </div>
                    <div className="sun">
                        <h5>SUNDAY</h5>
                        <p>8:00 AM - 10:00 AM</p>
                    </div>
                </div>
            </div>
            </div>
           </div>
           <div className="map">
            <iframe title="google map." src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3953.2328886507657!2d4.531168728535984!3d7.765109491752823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103787896a061a23%3A0x20706a3b9d0a579c!2ss%2C%201%20Wole%20Ola%20St%2C%20opposite%20premier%20lotto%20main%20office%207up%20Ogo-oluwa%20area%2C%20230232%2C%20Osogbo!3m2!1d7.7651042!2d4.5356534!5e0!3m2!1sen!2sng!4v1669036435686!5m2!1sen!2sng" width="1550" height="450" border="display none"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
           <div className="contact-footer">
           <Footer/>
           </div>
        </div>
    )
}