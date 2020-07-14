import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom'
import {FaStarOfLife} from 'react-icons/fa'
import { signup, login } from '../store/actions/customerAction'
import MegaMenu from '../components/MegaMenu'


class SignupLogin extends Component {

    state = {
        name: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: '',


        loginPhone: '',
        loginPassword: ''
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginSubmitHandler = event => {
        event.preventDefault()
        let {loginPhone, loginPassword} = this.state
        this.props.login({loginPhone, loginPassword}, this.props.history)
    }
    
    signupSubmitHandler = event => {
        event.preventDefault()
        let {name, phone, email, address, password, confirmPassword} = this.state
        this.props.signup({name, phone, email, address, password, confirmPassword}, this.props.history)
    }



    render() {
        let{error} = this.props.customer
        return (
            <div>
                <MegaMenu/>
                <div className="h2 text-center text-dark" style={{padding: "4% 0", background: '#eaeaea'}}> My Account </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="h4 my-3 text-dark">LOGIN</div>
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
                            <button type="submit" className="btn btn-outline-dark">Login</button>
                            </form>
                        </div>

                        <div className="col-md-6">
                        <div className="h4 my-3 text-dark">SIGNUP</div>
                            <form onSubmit={this.signupSubmitHandler}>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="name">Enter your name </label>
                                <input name="name" type="text" onChange={this.changeHandler} className={error.name ? "is-invalid form-control" : "form-control"} placeholder="John Doe" />
                                <div className="invalid-feedback">{error.name}</div>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="email">Enter your email </label>
                                <input name="email" type="email" onChange={this.changeHandler} className="form-control" placeholder="johndoe@yahoo.com"/>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="phone">Enter phone number <sup><FaStarOfLife style={{color: 'red', fontSize:'6px'}}/></sup> </label>
                                <input name="phone" type="number" onChange={this.changeHandler} className={error.phone ? "is-invalid form-control" : "form-control"} placeholder="0168-XXXXXXX" />
                                <div className="invalid-feedback">{error.phone}</div>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="address">Please enter your address <sup><FaStarOfLife style={{color: 'red', fontSize:'6px'}}/></sup></label>
                                <input name="address" type="text" onChange={this.changeHandler} className={error.address ? "is-invalid form-control" : "form-control"} placeholder="299/272, Kandirpar, Cumilla-3500" />
                                <div className="invalid-feedback">{error.address}</div>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="password">Please enter your password <sup><FaStarOfLife style={{color: 'red', fontSize:'6px'}}/></sup></label>
                                <input name="password" type="password" onChange={this.changeHandler} className={error.password ? "is-invalid form-control" : "form-control"} placeholder="" />
                                <div className="invalid-feedback">{error.password}</div>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="confirmPassword">Confirm your password <sup><FaStarOfLife style={{color: 'red', fontSize:'6px'}}/></sup></label>
                                <input name="confirmPassword" type="password" onChange={this.changeHandler} className={error.confirmPassword ? "is-invalid form-control" : "form-control"} placeholder="" />
                                <div className="invalid-feedback">{error.confirmPassword}</div>
                            </div>
                            <button type="submit" className="btn btn-outline-dark">SignUp</button>
                            </form>
                        </div>

                    </div>
                    <hr className="my-5"/>
                    <div className="text-center my-5">
                        <div className="h4">CONTINUE AS A GUEST</div>
                        <button className="btn btn-outline-dark my-2">continue</button>
                    </div>

                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customer: state.customer
})

export default connect(mapStateToProps, { login, signup })(SignupLogin);
