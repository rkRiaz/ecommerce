import React from 'react';
import './ErrorPage.css'
import {Link} from 'react-router-dom'
import ErrorImg from "./imgs/404page.png"

const ErrorPage = () => {
    return (
        <div className="errorPage">
            <div className="errorPage__img">
                <img style={{contain: "contain", width: "100%"}} src={ErrorImg} alt="Error"/>
            </div>
            <div className="mt-5">
                <Link className="btn btn-primary " to="/">Go Back Shop</Link><br/>
                <a className="mt-1 btn btn-danger" href="https://stories.freepik.com/web">Illustration by Freepik Stories</a>
            </div>
            
        </div>
    );
}

export default ErrorPage;
