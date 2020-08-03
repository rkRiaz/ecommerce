import React, {useState, useEffect} from 'react'
import './UpdateCustomer.css'
import { connect } from 'react-redux'
import {FaStarOfLife} from 'react-icons/fa'
import Layout from './Layout'
import { update } from '../../store/actions/customerAction'



const UpdateCustomer = (props) => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[address, setAddress] = useState('')
    
    useEffect(() => {
        async function fetchData() {
            let customer = props.customer.customer 
            setName(customer.name)
            setEmail(customer.email)
            setPhone(customer.phone)
            setAddress(customer.address)
        }
        fetchData()
    }, [props])

    let updateError = props.customer.updateError
    
    let updateSubmitHandler = e => {
        e.preventDefault()
        props.update({name, email, phone, address}, props.history)
    }

    return (
        <Layout>
        <div className="update">
            <div className="update__content">
                <div className="h4 my-3 text-dark">UPDATE CUSTOMER INFORMATION</div>
                    <form onSubmit={updateSubmitHandler}>
                        <div className="form-group">
                            <label className="text-dark" htmlFor="name">Enter your name </label>
                            <input value={name} type="text" onChange={e => setName(e.target.value)} className={updateError.name ? "is-invalid form-control" : "form-control"}  />
                            <div className="invalid-feedback">{updateError.name}</div>
                        </div>
                        <div className="form-group">
                            <label className="text-dark" htmlFor="email">Enter your email </label>
                            <input value={email} type="email" onChange={e => setEmail(e.target.value)} className={updateError.email ? "is-invalid form-control" : "form-control"} />
                            <div className="invalid-feedback">{updateError.email}</div>
                        </div>
                        <div className="form-group">
                            <label className="text-dark" htmlFor="phone">Enter phone number <sup><FaStarOfLife style={{ color: 'red', fontSize: '6px' }} /></sup> </label>
                            <input value={phone} type="number" onChange={e => setPhone(e.target.value)} className={updateError.phone ? "is-invalid form-control" : "form-control"}  />
                            <div className="invalid-feedback">{updateError.phone}</div>
                        </div>
                        <div className="form-group">
                            <label className="text-dark" htmlFor="address">Please enter your address <sup><FaStarOfLife style={{ color: 'red', fontSize: '6px' }} /></sup></label>
                            <input value={address} type="text" onChange={e => setAddress(e.target.value)} className={updateError.address ? "is-invalid form-control" : "form-control"} />
                            <div className="invalid-feedback">{updateError.address}</div>
                        </div>

                        <button type="submit" className="btn btn-outline-dark">Update</button>
                    </form>

                </div>
        </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    customer: state.customer
})
export default connect(mapStateToProps, {update})(UpdateCustomer)
