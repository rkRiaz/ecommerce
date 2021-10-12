import React, { useState, useEffect } from 'react';
import './MegaMenu.css'
import { Link, withRouter } from 'react-router-dom'
import { FaSearch, FaUser, FaHeart, FaBars, FaShoppingCart, FaShoppingBag, FaPhone, FaEnvelope } from 'react-icons/fa'
import { connect } from 'react-redux'
import { loginSideBar__on, menuSideBar__on } from '../store/actions/sideBarAction'
import MenuDetailsDepartment from './MenuDetailsDepartment'
import MenuDetailsProducts from './MenuDetailsProducts'
import Search from './Search'



const MegaMenu = (props) => {

    const [cart, setCart] = useState(0)

    let { customerLoggedIn } = props.customer
    let { adminLoggedIn } = props.admin

    useEffect(() => {
        setCart(props.busket.busketNumbers)
    }, [props.busket.busketNumbers])



    return (
        <div className="megamenu ">
            <div className="megamenu__top-menu row text-center text-white ">
                <div className="col-lg-4">
                    <p className="float-left"><FaPhone style={{ fontSize: 10 }} /> +99011-XXXXX &nbsp;&nbsp; <FaEnvelope style={{ fontSize: 10 }} /> johnDoe@yahho.com</p>
                </div>
                <div className="col-lg-4">
                    <p>Summer sale discount off 50%! <Link to="">Shop Now</Link></p>
                </div>
                <div className="col-lg-4">
                    <p className="float-right"> Language {adminLoggedIn ? <Link to="/admin/dashboard">Admin</Link> : <Link to="/admin/login">Admin</Link>}</p>

                </div>
            </div>
            <div className="megamenu__mid-menu">
                <div onClick={() => props.menuSideBar__on()} className="megamenu___mid__menu_bar-icon d-none">
                    <FaBars className="text-left" style={{ fontSize: 25 }} />

                </div>

                <div className="megamenu__mid-menu_logo h2 font-weight-bolder"><Link className="text-left" to="/">Ecommerce</Link> </div>
                <div className="megamenu__mid-menu_menu">
                    <div className="child">
                        <div className="py-4 px-3 megamenu__mid_menu__menu__department" style={{ cursor: "pointer" }}> <div className="department__details"><MenuDetailsDepartment /></div> Departments</div>
                        <div className="py-4 px-3 megamenu__mid_menu__menu__products" style={{ cursor: "pointer" }}><div className="products__details"><MenuDetailsProducts /></div>Products</div>
                        <div className="py-4 px-3 " style={{ cursor: "pointer" }}>Sale</div>
                        <div className="py-4 px-3" style={{ cursor: "pointer" }}>Portfolio</div>
                        <div className="py-4 px-3" style={{ cursor: "pointer" }}>LookBook</div>
                        <div className="py-4 px-3" style={{ cursor: "pointer" }}>Blog</div>


                    </div>

                </div>
                <div className="megamenu___mid-menu_menu-icons text-right" style={{ fontSize: 20 }}>
                    <Link to="#" className="pr-3 search-icon" ><FaSearch /></Link>
                    <Link to="/customer/cart" className="pr-3 shopping-icon" ><FaShoppingCart /> <sup className="cartAmount">{cart}</sup> </Link>
                    <Link to="#" className="remove-icon pr-3" ><FaHeart /></Link>
                    {customerLoggedIn ? <Link to="/customer/dashboard" className="remove-icon pr-3"><FaUser /></Link> :
                        <Link to="#" className="remove-icon pr-3" onClick={() => props.loginSideBar__on()}><FaUser /></Link>
                    }
                </div>
            </div>


            <div className="megamenu__bottom-menu text-center" style={{ fontSize: 12 }}>
                <Link to="/"><FaShoppingBag style={{ fontSize: 20 }} /><br />Shop</Link>
                {customerLoggedIn ? <Link to="/customer/dashboard"><FaUser style={{ fontSize: 20 }} /><br />Account</Link> :
                    <Link to="#" onClick={() => props.loginSideBar__on()}><FaUser style={{ fontSize: 20 }} /><br />Account</Link>}
                <Link to="#"><FaHeart style={{ fontSize: 20 }} /><br />WishList</Link>
                <Link to="/customer/cart" className="shopping-icon"><FaShoppingCart style={{ fontSize: 20 }} /><sup className="cartAmount">{cart}</sup><br />Cart</Link>
                <Link to="#"><FaSearch style={{ fontSize: 20 }} /><br />Search</Link>
            </div>



            <div className="megamenu__search">
                <Search />
            </div>
        </div>


    )
}


const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket,
    admin: state.admin,
})

export default connect(mapStateToProps, { loginSideBar__on, menuSideBar__on })(withRouter(MegaMenu));

