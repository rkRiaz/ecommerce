import React from 'react';
import {connect} from 'react-redux'
import {adminLogout} from '../../store/actions/adminAction'
import {Link} from 'react-router-dom'

const AdminDashboard = (props) => {

    let {adminLoggedIn} = props.admin
    return (
        <div className="container">
            <h1>welcome admin dashboard</h1>
            
            {
                adminLoggedIn ? 
                    <div>
                        <Link onClick={() => props.adminLogout(props.history)} className="btn btn-warning">LogOut</Link>            
                        <Link to="/admin/add-product" className="btn btn-primary mx-2">add product</Link>  
                    </div> : ''
            }
            
                
        </div>

    );
}

const mapStateToProps = state => ({
    admin: state.admin
})

export default connect(mapStateToProps, {adminLogout})(AdminDashboard);
