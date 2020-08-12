import React, {useState} from 'react';
import './AdminDashboard.css'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {adminLogout} from '../../store/actions/adminAction'
import profilePic from '../../imgs/profilePic.png'
import {ExitToApp, ShoppingCart, SupervisorAccount, Create, Menu, Person} from '@material-ui/icons';

const AdminDashboard = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    
    let toggle = () => {
        setIsOpen(!isOpen)
    }

    // useEffect(() => {
    //     let leftBarId = document.getElementById("leftBarId")
    //     let sticky = leftBarId.offsetTop
    //     window.onscroll = function() {
    //         if (window.pageYOffset >= sticky) {
    //             document.getElementById("leftBarId").style.top = "0px";
    //         } else {
    //             document.getElementById("leftBarId").style.top = "70px";
    //         }
    //     }

    // }, [])

    return (
        <div className="layout">
            <div className="topbar p-2">
                <div className="top d-flex justify-content-between" style={{width: 300}}>
                    <div className="h2"> <Link to="/">Ecommerce</Link></div>
                    <div onClick={toggle} className="toggleIcon mt-1"><Menu fontSize="large"/></div>
                </div>
            </div>

            <div className={isOpen ? "leftBar showLeftBar" : "leftBar"} id="leftBarId">
                <Link to="/admin/dashboard">
                <div className="p-4 text-center">
                    <div className="profilePic"><img src={profilePic} style={{width: 80, height: 80, borderRadius: "50%", background: "blue"}} alt=""/></div>
                    <div className="profileName h5 mt-2">Admin</div>
                </div>
                </Link>
                <div className="d-flex flex-column p-4">
                    <Link to="/admin/dashboard" className="h5"><Person/>&nbsp;&nbsp;&nbsp;Dashboard</Link> 
                    <Link to="/admin/all-orders" className="h5 mt-4"><ShoppingCart/>&nbsp;&nbsp;&nbsp;Orders</Link> 
                    <Link to="/admin/customers" className="h5 mt-4"><SupervisorAccount/>&nbsp;&nbsp;&nbsp;Customers</Link> 
                    <Link to="/admin/add-product" className="h5 mt-4"><Create/>&nbsp;&nbsp;&nbsp;Add Product</Link> 
                    <Link to="" onClick={() => props.adminLogout(props.history)} className="h5 mt-4"><ExitToApp/>&nbsp;&nbsp;&nbsp;LogOut</Link>
                </div>
            </div>

            <div className={isOpen ? "content" : "content contentMargin"}>
                {props.children}
            </div>
        </div>
        
      
    );
}



export default connect(null, {adminLogout})(withRouter(AdminDashboard));
