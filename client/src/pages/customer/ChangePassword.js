import React, {useState} from 'react'
import './ChangePassword.css'
import Layout from './Layout'
import axios from 'axios'
import {FaStarOfLife} from 'react-icons/fa'



const ChangePassword = (props) => {
    const[oldPassword, setOldPassword] = useState('')
    const[newPassword, setNewPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

     let submit = () => {
        axios.put(`${process.env.REACT_APP_APIENDPOINT}/customers/change-password`, {oldPassword, newPassword, confirmPassword})
            .then(res => {
                console.log(res.data)
                alert(res.data)
              
            })
            .catch(e => alert(e))
    }


    return (
        <Layout>
            <div className="changePassword">
                <div className="changePassword__content">
                    <div className="h4 my-3 text-dark">Change Your Password</div>
                    <div className="form-group">
                        <label className="text-dark" htmlFor="password">Please enter your current password <sup><FaStarOfLife style={{ color: 'red', fontSize: '6px' }} /></sup></label>
                        <input required name="password" type="password" onChange={e => setOldPassword(e.target.value)} className="form-control" placeholder="" />
                        
                    </div>
                    <div className="form-group">
                        <label className="text-dark" htmlFor="password"> Enter your new password <sup><FaStarOfLife style={{ color: 'red', fontSize: '6px' }} /></sup></label>
                        <input name="password" type="password" onChange={e => setNewPassword(e.target.value)} className="form-control" placeholder="" />
                        
                    </div>
                    <div className="form-group">
                        <label className="text-dark" htmlFor="confirmPassword">Confirm your new password <sup><FaStarOfLife style={{ color: 'red', fontSize: '6px' }} /></sup></label>
                        <input name="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} className="form-control" placeholder="" />
                    </div>
                    <button onClick={submit} className="btn btn-outline-dark">Update</button>
                </div>
            </div>
        </Layout>
    )
}
export default ChangePassword
