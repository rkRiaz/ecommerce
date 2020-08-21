import React, { Component } from 'react';
import './Banner.css'
import { Link } from 'react-router-dom'
import banner1 from '../imgs/banner1.jpg'
// import banner2 from '../imgs/banner2.jpg'
// import banner3 from '../imgs/banner3.jpg'
import subBanner1 from '../imgs/subBanner1.jpg'
import subBanner2 from '../imgs/subBanner2.jpg'
import subBanner3 from '../imgs/subBanner3.jpg'





class Banner extends Component {


    currentSlide = (n) => {
        if (n === 1) {
            document.getElementById('slide3').style.display = "none"
            document.getElementById('slide2').style.display = "none"
            document.getElementById('slide1').style.display = "block"
        }
        if (n === 2) {
            document.getElementById('slide3').style.display = "none"
            document.getElementById('slide1').style.display = "none"
            document.getElementById('slide2').style.display = "block"

        }
        if (n === 3) {
            document.getElementById('slide1').style.display = "none"
            document.getElementById('slide2').style.display = "none"
            document.getElementById('slide3').style.display = "block"

        }
    }

    //  plusSlides = (n) => {
    //     showSlides(slideIndex += n)
    // }


    render() {
        return (
            <div className="banner">
                <div className="slideshow-container">
                    <div id="slide1" className="mySlides">
                        <img src={banner1} alt="banner" style={{ objectFit: "cover", height: "60vh", width: "100%" }} />
                        <div className="text">
                            <h4>SUMMER 2020</h4>
                            <div className="heading font-weight-bolder display-4">New Arrival Collection</div>
                            <Link to="/products/tag/new-arrival"><button className="btn btn-dark" >Explore now </button></Link>
                        </div>
                    </div>
                    <div id="slide2" className="mySlides">
                        <img src={banner1} alt="banner" style={{ objectFit: "cover", height: "60vh", width: "100%" }} />
                        <div className="text text-mid">
                            <h4>SUMMER 2020</h4>
                            <div className="heading font-weight-bolder display-4">New Arrival Collection</div>
                            <Link to=""><button className="btn btn-dark" >Explore now </button></Link>
                        </div>
                    </div>
                    <div id="slide3" className="mySlides">
                        <img src={banner1} alt="banner" style={{ objectFit: "cover", height: "60vh", width: "100%" }} />
                        <div className="text">
                            <h4>SUMMER 2020</h4>
                            <div className="heading font-weight-bolder display-4">New Arrival Collection</div>
                            <Link to=""><button className="btn btn-dark" >Explore now </button></Link>
                        </div>
                    </div>

                    <div className="dots">
                        <span id="dot1" onClick={() => this.currentSlide(1)} className="dot active" ></span>
                        <span id="dot2" onClick={() => this.currentSlide(2)} className="dot mx-3" ></span>
                        <span id="dot3" onClick={() => this.currentSlide(3)} className="dot" ></span>
                    </div>

                    {/* <Link to="" className="prev" onClick={() =>plusSlides(-1)}>&#10094;</Link>
                    <Link to="" className="next" onClick={() =>plusSlides(1)}>&#10095;</Link> */}


                </div>

                <div className="subBanner row mt-3">
                    <div className="col-12 col-md-6 leftColumn">
                        <Link to="">
                            <div style={{ position: "relative", height: "87%" }}>
                                <img src={subBanner1} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                <div to="" className="women-btn">Women</div>
                            </div>
                        </Link>
                    </div>


                    {/* problem starting from here */}
                    <div className="col-12 col-md-6 rightColumn">
                        <div className="row">
                            <div className="col-6 col-md-6 rightColumn__left">
                                <div>
                                    <Link to="">
                                        <div className="box" style={{ position: "relative" }}>
                                            <img src={subBanner2} alt="" style={{ objectFit: "cover", width: "100%" }} />
                                            <div to="" className="mid-btn">Accessories</div>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="box2" style={{ marginTop: 30, position: "relative" }}>
                                            <img src={subBanner2} alt="" style={{ objectFit: "cover", width: "100%" }} />
                                            <div className="mid-btn">Footwear</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 rightColumn__right">
                                <Link to="">
                                    <div style={{ height: "100%", position: "relative" }}>
                                        <img src={subBanner3} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                        <div to="" className="watch-btn">Watch</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

export default Banner;




























