import React, { Component, useEffect } from 'react';
import './Banner.css'
import { Link } from 'react-router-dom'
import banner1 from '../imgs/banner-1.png'
import banner2 from '../imgs/banner-2.jpg'
import banner3 from '../imgs/banner-3.png'
import subBanner1 from '../imgs/subbanner_1.jpg'
import subBanner2 from '../imgs/subbanner_2.jpg'
import subBanner3 from '../imgs/subbanner_3.jpg'
import subBanner4 from '../imgs/subbanner_4.jpg'



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
        var x = document.getElementsByClassName("dot");
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("active")
        }
        // x[n-1].className += " active"
        x[n-1].classList.add("active")
    }

    //  plusSlides = (n) => {
    //     showSlides(slideIndex += n)
    // }

  


    render() {
        return (
            <div className="banner">
                <div className="slideshow-container">
                    <div id="slide1" className="mySlides">
                        <img src={banner2} alt="banner" style={{ objectFit: "cover", height: "60vh", width: "100%" }} />
                        <div className="text">
                            <h4>SUMMER 2020</h4>
                            <div className="heading font-weight-bolder display-4">New Arrival Collection</div>
                            <Link to="/products/tag/new-arrival"><button className="btn btn-dark" >Explore now </button></Link>
                        </div>
                    </div>
                    <div id="slide2" className="mySlides">
                        <img src={banner3} alt="banner" style={{ objectFit: "cover", height: "60vh", width: "100%" }} />
                        <div className="text text-mid">
                            <h4>SUMMER 2020</h4>
                            <div className="heading font-weight-bolder display-4">New Arrival Collection</div>
                            <Link to="/products/tag/new-arrival"><button className="btn btn-dark" >Explore now </button></Link>
                        </div>
                    </div>
                    <div id="slide3" className="mySlides">
                        <img src={banner1} alt="banner" style={{ objectFit: "cover", height: "60vh", width: "100%" }} />
                        <div className="text text-mid">
                            <h4>SUMMER 2020</h4>
                            <div className="heading font-weight-bolder display-4">New Arrival Collection</div>
                            <Link to="/products/tag/new-arrival"><button className="btn btn-dark" >Explore now </button></Link>
                        </div>
                    </div>

                    <div className="dots">
                        <span onClick={(e) => this.currentSlide(1)} className="dot active" ></span>
                        <span onClick={(e) => this.currentSlide(2)} className="dot mx-3" ></span>
                        <span onClick={(e) => this.currentSlide(3)} className="dot" ></span>
                    </div>

                    {/* <Link to="" className="prev" onClick={() => this.currentSlide('prev')}>&#10094;</Link>
                    <Link to="" className="next" onClick={() => this.currentSlide('next')}>&#10095;</Link> */}
                </div>


                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6 box position-relative" style={{height: "600px"}}>
                            <Link to="/products/department/woman-dress">
                                <div className="women-btn">Women</div>
                                <img src={subBanner1} alt="" width="100%" height="100%" style={{ objectFit: "fill"}} />
                            </Link>
                        </div>
                        <div className="col-md-3 d-flex d-md-block my-3 my-md-0 px-md-0" style={{maxHeight: "600px"}}>
                            <div className="w-100 mr-3 mr-md-0 position-relative" style={{height: "290px"}}>
                            <Link to="/products/department/electric-parts">
                                <img src={subBanner3} alt="" width="100%" height="100%" style={{ objectFit: "fill"}} />
                                <div className="mid-btn">Accessories</div>
                            </Link>
                            </div>
                            <div className="w-100 mt-md-3 position-relative" style={{height: "290px"}}>
                                <Link to="/products/department/pant">
                                    <img src={subBanner2} alt="" width="100%" height="100%" style={{ objectFit: "fill"}} />
                                    <div className="mid-btn">Footwear</div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3 box position-relative" style={{height: "600px"}}>
                            <Link to="/products/department/watch-clock">
                                <img src={subBanner4} alt="" width="100%" height="100%" style={{ objectFit: "fill"}} />
                                <div className="watch-btn">Watch</div>
                            </Link>
                        </div>
                    </div>
                </div>
                

                {/* <div className="d-md-flex flex-row container">
                    <div className="w-50" style={{backgroundColor: "red", height: "425px"}}></div>
                    <div className="w-25 mx-md-4" style={{backgroundColor: "black", height: "425px"}}>
                        <div className="" style={{backgroundColor: "blue", height: "200px"}}></div>
                        <div className="mt-md-4" style={{backgroundColor: "gray", height: "200px"}}></div>
                    </div>
                    <div className="w-25" style={{backgroundColor: "green", height: "425px"}}></div>
                </div> */}



            </div>

        );
    }
}

export default Banner;




























