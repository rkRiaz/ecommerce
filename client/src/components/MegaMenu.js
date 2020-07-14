import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {FaSearch, FaUser, FaHeart, FaBars, FaShoppingCart,FaShoppingBag, FaTimes, FaPhone, FaEnvelope, FaStarOfLife} from 'react-icons/fa'
import {login} from '../store/actions/customerAction'
import {connect} from 'react-redux'


class MegaMenu extends Component {

    state = {
        loginPhone: '',
        loginPassword: '',
        cart: 0
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        return{
            cart: nextProps.busket.busketNumbers
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    openNav = e => {
        e.preventDefault()
        document.getElementById('megamenu__mid-menu_menu__id').style.width = "250px"
    }
    closeNav = e => {
        e.preventDefault()
        document.getElementById('megamenu__mid-menu_menu__id').style.width = "0"
        
    }
    login__openNav = e => {
        e.preventDefault()
        document.getElementById('login__sidebar-id').style.width = "350px"
    }
    login__closeNav = e => {
        e.preventDefault()
        document.getElementById('login__sidebar-id').style.width = "0"
    }

    loginSubmitHandler = event => {
        event.preventDefault()
        let {loginPhone, loginPassword} = this.state
        this.props.login({loginPhone, loginPassword}, this.props.history)
    }

    render() {
        let{error} = this.props.customer
        return (
            <div>
                <div className="megamenu__top-menu row text-center text-dark">
                    <div className="col-lg-4">
                        <p className="float-left"><FaPhone  style={{fontSize: 10}}/> +99011-XXXXX &nbsp;&nbsp; <FaEnvelope style={{fontSize: 10}}/> johnDoe@yahho.com</p>
                    </div>
                    <div className="col-lg-4">
                        <p>Summer sale discount off 50%!<Link to="">Shop Now</Link></p>   
                    </div>
                    <div className="col-lg-4">
                        <p className="float-right"> Language</p> 
                    </div>
                </div>
                <div className="megamenu__mid-menu pt-3 pb-5">
                    <div onClick={this.openNav} className="megamenu___mid__menu_bar-icon d-none">
                        <FaBars className="text-left" style={{fontSize: 25}}/>
                    </div>
                    <div className="megamenu__mid-menu_logo h2 font-weight-bolder"><Link className="text-left"to="/">Ecommerce</Link> </div>
                    <div id="megamenu__mid-menu_menu__id" className="megamenu__mid-menu_menu mt-2">
                        <div className="child">
                            <Link to="" onClick={this.closeNav} className="sidenav-closebtn d-none"><FaTimes/></Link><br/>
                            <Link to="" className="menu__demo">Demo</Link><br/>
                            <Link to="/">Shop</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                            <Link to="">Product</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                            <Link to="">Sale</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                            <Link to="">Portfolio</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                            <Link to="">LookBook</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                            <Link to="">Blog</Link>     
                        </div>                     
                    </div>
                    <div className="megamenu___mid-menu_menu-icons text-right" style={{fontSize: 20}}>
                        <Link to="" className="pr-3 search-icon" ><FaSearch/></Link>
                        <Link to="/customers/cart" className="pr-3 shopping-icon" ><FaShoppingCart/> <sup className="cartAmount">{this.state.cart}</sup> </Link>
                        <Link to="" className="remove-icon pr-3" ><FaHeart/></Link>
                        <Link to="" className="remove-icon pr-3" onClick={this.login__openNav}><FaUser/></Link>
                    </div>
                </div>
                <div className="megamenu__bottom-menu text-center" style={{fontSize: 12}}>
                    <Link to ="/"><FaShoppingBag style={{fontSize: 20}}/><br/>Shop</Link> 
                    <Link to ="/customers/signup-login"><FaUser style={{fontSize: 20}} /><br/>Account</Link>
                    <Link to =""><FaHeart style={{fontSize: 20}}/><br/>WishList</Link>
                    <Link to ="/customers/cart" className="shopping-icon"><FaShoppingCart style={{fontSize: 20}}/><sup className="cartAmount">{this.state.cart}</sup><br/>Cart</Link>
                    <Link to =""><FaSearch style={{fontSize: 20}}/><br/>Search</Link>
                </div>

                <div id="login__sidebar-id" className="login__sidebar">
                    <div className="p-4 mt-5">
                        <h3>Login<span id="login__closebtn-id" className="login__closebtn" onClick={this.login__closeNav}><FaTimes/></span></h3> 
                        <form onSubmit={this.loginSubmitHandler}>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="name">Enter phone number <sup><FaStarOfLife style={{color: 'red', fontSize:'6px'}}/></sup></label>
                                <input name="loginPhone" type="number" onChange={this.changeHandler} className={error.loginPhone ? "is-invalid form-control" : "form-control"} placeholder="0168-XXXXXXX" />
                                <div className="invalid-feedback">{error.loginPhone}</div>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="type">Enter password</label>
                                <input name="loginPassword" type="password" onChange={this.changeHandler} className={error.loginPassword ? "is-invalid form-control" : "form-control"} placeholder="" />
                                <div className="invalid-feedback">{error.loginPassword}</div>
                            </div>
                            <Link to="customer/dashboard"><button type="submit" className="my-3 btn btn-outline-dark">Login</button></Link>
                            <Link to="customers/signup-login"><p>Not have an account? <span className="text-primary">Click here to register</span></p></Link>
                        </form>
                    </div>
                </div>



        </div>
    
            
        )
    }
}

const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket
})

export default connect(mapStateToProps, {login})(MegaMenu);

