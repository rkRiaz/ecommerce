import React, {useState, useEffect} from 'react';
import Products from '../components/Products'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'
// import CircularProgress from '@material-ui/core/CircularProgress';


const ProductsDepartment = (props) => {
    
    const [productsDepartment, setProductsDepartment] = useState(null)
    const [department, setDepartment] = useState(null)



    useEffect(() => {
        const { match: { params } } = props;
        setDepartment(params.department)
        axios.get(`${process.env.REACT_APP_APIENDPOINT}/products/department/${department}`)
        .then(res => {
            setProductsDepartment(res.data)
        })
        .catch(e => alert(e))
    }, [props, department])
    
    return (
        <Layout>
            <div className="text-center">
                <Link to="/" className="badge badge-secondary text-center">&#8594; Go To Shop</Link> 
            </div>
            {
                // productsDepartment === null || productsDepartment.length === 0? 
                // <div className="h5 ml-auto mr-auto">
                // <CircularProgress />
                // </div> 
                // :
                <Products products = {productsDepartment} heading={department} title=""/>
            }
         
        </Layout>
    );
}

export default ProductsDepartment;
