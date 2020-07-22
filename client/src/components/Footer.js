import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'
import {FaMapMarker, FaEnvelope, FaPhone} from 'react-icons/fa'

const Footer = () => {
    return (
            <div className="footer mt-5">

                <div className="footer__top">
                    <div className="container grid">
                        <div className="getInTouch">
                            <div className="shopName h2">
                                Ecommerce
                            </div>
                            <div className="d-flex">
                                <FaMapMarker/>&nbsp;&nbsp;
                                <p>299/273 kaptanbazar, Cumilla</p>
                            </div>
                            <div className="d-flex">
                                <FaEnvelope/>&nbsp;&nbsp;
                                <p>contact@shop.com</p>
                            </div>
                            <div className="d-flex">
                                <FaPhone/>&nbsp;&nbsp;
                                <p>+99999922222</p>
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
                            <p>Subscribe to our newsletter and <br/>get 10% off your first purchase</p>
                            <input type="email" placeholder="enter your email"/>
                            <input value="Subscribe" type="button" className="btn btn-outline-dark"/>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">

                </div>

            </div>
    );
}

export default Footer;
