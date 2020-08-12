import React from 'react'
import './CustomerDashboard.css'
import Layout from './Layout'
// import axios from 'axios'
// import {FaStarOfLife} from 'react-icons/fa'



const CustomerDashboard = (props) => {

    return (
        <Layout>
            <div className="customerdashboard d-flex justify-content-center align-items-center">
                <div className="display-4" style={{marginTop: 300}}>Welcome To Your Dashboard</div>
            </div>
        </Layout>
    )
}
export default CustomerDashboard
