import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {login} from '../store/actions/customerAction'
import {FaStarOfLife} from 'react-icons/fa'
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import {loginSideBar__off} from '../store/actions/sideBarAction'
import './LoginSideBar.css'

const LoginSideBar = (props) => {
    const [loginPhone, setLoginPhone] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [error, setError] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(props.sideBar.loginSideBar)
        setError(props.customer.error)
    },[props.sideBar.loginSideBar, props.customer.error])

    let toggle = e => {
        e.preventDefault()
        props.loginSideBar__off()
    }

    let loginSubmitHandler = event => {
        event.preventDefault()
        props.login({loginPhone, loginPassword}, props.history)
    }

    let signUpHandler = e => {
        e.preventDefault()
        props.loginSideBar__off()
        props.history.push("/customer/signup-login")
    }


    return (
        <div>
            <div className={isOpen ? "login__sidebar" : "login__sidebar login__sidebar__off"}>
                    <div className="p-3">
                        <div className="h3">Login</div> 
                        <div onClick={toggle} className={isOpen ? "login__closebtn" : ''}><CloseSharpIcon/></div>
                        <hr/>
                        <form onSubmit={loginSubmitHandler}>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="name">Enter phone number <sup><FaStarOfLife style={{color: 'red', fontSize:'6px'}}/></sup></label>
                                <input name="loginPhone" type="number" onChange={e => setLoginPhone(e.target.value)} className={error.loginPhone ? "is-invalid form-control" : "form-control"} placeholder="0168-XXXXXXX" />
                                <div className="invalid-feedback">{error.loginPhone}</div>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="type">Enter password</label>
                                <input name="loginPassword" type="password" onChange={e => setLoginPassword(e.target.value)} className={error.loginPassword ? "is-invalid form-control" : "form-control"} placeholder="" />
                                <div className="invalid-feedback">{error.loginPassword}</div>
                            </div>
                            <button type="submit" className="my-3 btn btn-outline-dark">Login</button>
                            <div onClick={signUpHandler}><p>Not have an account? <span className="text-primary">Click here to register</span></p></div>
                        </form>
                    </div>
                </div>
                <div onClick={toggle} className={isOpen ? "loginSideBar__closeBtn" : "loginSideBar__closeBtn login__sidebar__off"}></div>
        </div>
    );
}

const mapStateToProps = state => ({
    admin: state.admin,
    customer: state.customer,
    sideBar: state.sideBars
})

export default connect(mapStateToProps, {login, loginSideBar__off})(withRouter(LoginSideBar));
