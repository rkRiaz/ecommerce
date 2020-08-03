import React from 'react'
import './Products.css'

import {Link} from 'react-router-dom'




function Products(props) {

    // const [singleProduct, setsingleProduct] = useState('')
    // const [productPrice, setProductPrice] = useState('rr')


    // const exploreProduct = event => {
     
    //         let target = event.target.parentElement
    //         let productId = target.dataset.product
            
    //         let product = props.products.find((value, index, array) => {
    //             return value._id == productId
    //         })
    //         // console.log(product)
    //         // setProductId(productId)
    //         //redux action will go on here
    //         setsingleProduct(product)

    // }

    return (
        <div className="products py-3">

            <div className="font-weight-bolder text-center"><h3> --- {props.heading} --- </h3></div>
            <div className="text-center"><h6> {props.title} </h6></div>

            <div className="row mt-4">
                {/* <div className="display-4">No Products Available</div>  */}
                
                {props.products.reverse().map(product => (
                    <div key={product._id} className="col-6 col-sm-4 col-md-2 p-2">
                        <div className="productCard">
                            <Link to={`products/${product._id}`} style={{textDecoration: 'none'}}>
                                <img className="trending__image" 
                                    src={`/images/${product.productImgs[0]}`} alt="" 
                                    style={{background: '#eaeaea', maxWidth: '100%'}}
                                />
                                {product.soldOut === "true" ? <div className="soldOutProduct">Unavailable</div> : ''}
                                <div className="px-2 mt-3 font-weight-bold text-dark">{product.name}</div>
                                <div className="px-2 pb-2 text-dark font-weight-bold">Price: TK-{product.price}</div>
                            </Link>
                        </div>
                    </div>
                ))}

                
            </div>
        </div>
    )
}

export default Products



