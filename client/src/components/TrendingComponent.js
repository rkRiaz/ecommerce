import React from 'react'

import {Link} from 'react-router-dom'




function TrendingComponent(props) {

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
        <div className="trendingContainer container-fluid">
            
            
            <div className="font-weight-bolder text-center"><h3> --- Trending --- </h3></div>
            <div className="text-center"><h6> top view in this week </h6></div>

            <div className="row mt-5">
                {/* <div className="display-4">No Products Available</div>  */}
                
                {props.products.reverse().map(product => (
                    <div key={product._id} className="col-6 col-sm-4 col-md-3 p-2">
                        <div className="productCard">
                            <Link to={`products/${product._id}`} style={{textDecoration: 'none'}}>
                                <img className="" 
                                        src={`/images/${product.productImgs[0]}`} alt="" 
                                        style={{background: '#eaeaea', maxWidth: '100%'}}/>
                                
                                <div className="px-3 mt-3 font-weight-bold text-dark">{product.name}</div>
                                <div className="px-3 pb-3 text-dark font-weight-bold">Price: TK-{product.price}</div>
                            </Link>
                        </div>
                    </div>
                ))}

                
            </div>
        </div>
    )
}

export default TrendingComponent



