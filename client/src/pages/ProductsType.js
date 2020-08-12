import React, {useState, useEffect} from 'react';
import Products from '../components/Products'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'

const ProductsType = (props) => {
    
    const [productsType, setProductsType] = useState([])
    const [type, setType] = useState('')



    useEffect(() => {
        const { match: { params } } = props;
        setType(params.type)
        
        axios.get('/products')
        .then(res => {
            let productsType = res.data.filter(p => p.type === type)
            setProductsType(productsType)
        })
        .catch(e => alert(e))
    }, [props, type])
    
    return (
        <Layout>
            <div className="text-center">
                <Link to="/" className="badge badge-secondary text-center">&#8594; Go To Shop</Link> 
            </div>
            <Products products = {productsType} heading={type} title=""/>
        </Layout>
    );
}

export default ProductsType;
