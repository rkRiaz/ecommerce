import React, { useState } from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'
import {FaMapMarker, FaEnvelope, FaPhone, FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'


const Footer = () => {
    const [email, setEmail] = useState('')
    return (
            <div className="footer mt-5">

                <div className="footer__top">
                    <div className="footer__top_container">
                        
                            <div className="getInTouch">
                                <div className="shopName h2">
                                    Ecommerce
                                </div>
                                <div className="">
                                    <p><FaMapMarker/> 299/273 kaptanbazar, Cumilla</p>
                                    <p><FaEnvelope/> contact@shop.com</p>
                                    <p><FaPhone/> +99999922222</p>
                                    <div className="socialsIcons">
                                        <Link to=""><FaFacebook/></Link>&nbsp;&nbsp;&nbsp;
                                        <Link to=""><FaTwitter/></Link>&nbsp;&nbsp;&nbsp;
                                        <Link to=""><FaGithub/></Link>&nbsp;&nbsp;&nbsp;
                                        <Link to=""><FaInstagram/></Link>&nbsp;&nbsp;&nbsp;
                                        <Link to=""><FaMapMarker/></Link>&nbsp;&nbsp;&nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="category d-flex flex-column">
                                <h5>Category</h5>
                                <Link to="">Men</Link>
                                <Link to="">Women</Link>
                                <Link to="">Dress</Link>
                                <Link to="">Books</Link>
                                <Link to="">Accessories</Link>
                                <Link to="">Mobile</Link>
                            </div>
                            <div className="info d-flex flex-column">
                                <h5>Information</h5>
                                <Link to="">About Us</Link>
                                <Link to="">Contact Us</Link>
                                <Link to="">Term & Condition</Link>
                                <Link to="">Return & Exchange</Link>
                                <Link to="">Shipping & Delivery</Link>
                                <Link to="">Privacy & Policy</Link>
                            </div>
                            <div className="links d-flex flex-column">
                                <h5>Useful Links</h5>
                                <Link to="">Shop Location</Link>
                                <Link to="">My Accounts</Link>
                                <Link to="">Latest News</Link>
                                <Link to="">Portfolio</Link>
                                <Link to="">Size Guide</Link>
                                <Link to="">FAQs</Link>
                            </div>
                            <div className="newsLetter d-flex flex-column">
                                <h5>Newsletter Signup</h5>
                                <p style={{lineHeight: "20px"}}>Subscribe to our newsletter and <br/>get 10% off your first purchase</p>
                                <div className="footer__subscribe__box">
                                    <input onChange={e => setEmail(e.target.value)} className="footer__input" type="email" placeholder="Your Email"/>
                                    <input onClick={e => {console.log(email)}}className="footer__subscribe" value="Subscribe" type="button"/>
                                </div>
                            </div>
                        
                    </div>
                </div>

                <div className="footer__bottom p-3 text-white">
                    <p className="">Copyright 2020. All Rights Reserved. <a href="https://www.facebook.com/bd.riaz1">About Developer</a> </p>
                </div>

            </div>
    );
}

export default Footer;
