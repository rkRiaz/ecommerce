import React, {useState, useEffect} from 'react';
import Products from '../components/Products'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'
// import CircularProgress from '@material-ui/core/CircularProgress';


const ProductsDepartment = (props) => {
    
    const [productsDepartment, setProductsDepartment] = useState([])
    const [department, setDepartment] = useState(null)



    useEffect(() => {
        const { match: { params } } = props;
        setDepartment(params.department)
        
        axios.get('/products')
        .then(res => {
            let productsDepartment = res.data.filter(p => p.department === department)
            setProductsDepartment(productsDepartment)
        })
        .catch(e => alert(e))
    }, [department, props])
    
    return (
        <Layout>
            <div className="text-center">
                <Link to="/" className="badge badge-secondary text-center">&#8594; Go To Shop</Link> 
            </div>
            
            <Products products = {productsDepartment} heading={department} title=""/>
        </Layout>
    );
}

export default ProductsDepartment;
