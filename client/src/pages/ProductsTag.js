import React, {useState, useEffect} from 'react';
import Products from '../components/Products'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'

const ProductsTag = (props) => {
    
    const [productsTag, setProductsTag] = useState([])
    const [tag, setTag] = useState('')



    useEffect(() => {
        const { match: { params } } = props;
        setTag(params.tag)
        
        axios.get('/products')
        .then(res => {
            let productsTag = res.data.filter(p => p.tag === tag)
            setProductsTag(productsTag)
        })
        .catch(e => alert(e))
    }, [props, tag]) 
    
    return (
        <Layout>
            <div className="text-center">
                <Link to="/" className="badge badge-secondary text-center">&#8594; Go To Shop</Link> 
            </div>
            <Products products = {productsTag} heading={tag} title=""/>
        </Layout>
    );
}

export default ProductsTag;
