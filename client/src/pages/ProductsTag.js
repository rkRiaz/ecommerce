import React, {useState, useEffect} from 'react';
import Products from '../components/Products'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'
// import CircularProgress from '@material-ui/core/CircularProgress';


const ProductsTag = (props) => {
    
    const [productsTag, setProductsTag] = useState(null)
    const [tag, setTag] = useState(null)



    useEffect(() => {
        const { match: { params } } = props;
        setTag(params.tag)
        
        axios.get(`${process.env.REACT_APP_APIENDPOINT}/products/tag/${tag}`)
        .then(res => {
            // console.log(res.data)
            setProductsTag(res.data)
        })
        .catch(e => console.log(e))
    }, [props, tag]) 

    
    
    return (
        <Layout>
            <div className="text-center">
                <Link to="/" className="badge badge-secondary text-center">&#8594; Go To Shop</Link> 
            </div>
            {
                // productsTag === null ? 
                // <div className="h5 ml-auto mr-auto">
                // <CircularProgress />
                // </div> 
                // :
                <Products products = {productsTag} heading={tag} title=""/>
            }
            
        </Layout>
    );
}

export default ProductsTag;
