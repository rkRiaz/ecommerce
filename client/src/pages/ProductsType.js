import React, {useState, useEffect} from 'react';
import Products from '../components/Products'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'
// import CircularProgress from '@material-ui/core/CircularProgress';


const ProductsType = (props) => {
    
    const [productsType, setProductsType] = useState(null)
    const [type, setType] = useState(null)



    useEffect(() => {
        const { match: { params } } = props;
        setType(params.type)
        
        axios.get(`${process.env.REACT_APP_APIENDPOINT}/products/type/${type}`)
        .then(res => {
            setProductsType(res.data)
        })
        .catch(e => alert(e))
    }, [props, type])
    
    return (
        <Layout>
            <div className="text-center">
                <Link to="/" className="badge badge-secondary text-center">&#8594; Go To Shop</Link> 
            </div>
            {
                // productsType === null || productsType.length === 0 ? 
                // <div className="h5 ml-auto mr-auto">
                // <CircularProgress />
                // </div> 
                // :
                <Products products = {productsType} heading={type} title=""/>
            }
        </Layout>
    );
}

export default ProductsType;
