import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Layout.css'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../store/actions/customerAction'

// import Layout from '../../../components/Layout'

import profilePic from '../../imgs/profilePic.png'
import {ExitToApp, ShoppingCart, AttachMoney, Create, VpnKey, Menu, Home, Person} from '@material-ui/icons';


const Layout = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    const [customer, setCustomer] = useState({})

    let toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        
        // let leftBarId = document.getElementById("leftBarId")
        // let sticky = leftBarId.offsetTop
        // window.onscroll = function() {
        //     if (window.pageYOffset >= sticky) {
        //         document.getElementById("leftBarId").style.top = "0px";
        //     } else {
        //         document.getElementById("leftBarId").style.top = "70px";
        //     }
        // }
        
        async function fetchData() {
            axios.get(`${process.env.REACT_APP_APIENDPOINT}/customers/dashboard`)
            .then(res => {
                setCustomer(res.data.customer)
                return res
            })
            .catch(e => console.log(e))
        }
        fetchData()

        }, [])



    return (
       
                <div className="layout">
                <div className="topbar p-2">
                    <div className="top d-flex justify-content-between" style={{width: 300}}>
                        <div className="h2"> <Link to="/">Ecommerce</Link></div>
                        <div onClick={toggle} className="toggleIcon mt-1"><Menu fontSize="large"/></div>
                    </div>
                </div>

                <div className={isOpen ? "leftBar showLeftBar" : "leftBar"} id="leftBarId">
                    <div className="p-4 text-center">
                        <Link to="/customer/dashboard">
                            <div className="profilePic"><img src={profilePic} style={{width: 80, height: 80, borderRadius: "50%", background: "blue"}} alt=""/></div>
                            <div className="profileName h5 mt-2">{customer.name}</div>
                        </Link>
    
                    </div>
                    <div className="d-flex flex-column p-4">
                        <Link to="/customer/dashboard" className="h5"><Person/>&nbsp;&nbsp;&nbsp;Dashboard</Link> 
                        <Link to="/customer/ordered" className="h5 mt-4"><ShoppingCart/>&nbsp;&nbsp;&nbsp;Orders</Link> 
                        <Link to="" className="h5 mt-4"><AttachMoney/>&nbsp;&nbsp;&nbsp;Transaction History</Link> 
                        <Link to="/customer/update" className="h5 mt-4"><Create/>&nbsp;&nbsp;&nbsp;Edit Personal Info</Link> 
                        <Link to="/customer/change-password" className="h5 mt-4"><VpnKey/>&nbsp;&nbsp;&nbsp;Change Password</Link> 

                        <Link to="" onClick={() => props.logout(props.history)} className="h5 mt-4"><ExitToApp/>&nbsp;&nbsp;&nbsp;LogOut</Link>
                        <ul className="h5 mt-4">
                            <Home className="mb-1"/>&nbsp;&nbsp;&nbsp;Address
                            <li className="h6 ml-4 ml-5 mt-2">&nbsp;{customer.address}</li>
                        </ul> 

                    </div>
                </div>

                <div className={isOpen ? "content" : "content contentMargin"}>
                    {props.children}
                </div>
                
            </div>
        
      
    );
}



export default connect(null, {logout})(withRouter(Layout));
