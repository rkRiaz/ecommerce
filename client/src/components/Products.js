import React from 'react'
import './Products.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToBusket } from '../store/actions/busketActions'
import CircularProgress from '@material-ui/core/CircularProgress';


function Products(props) {
    // const [products, setProducts] = useState(null)

    // useEffect(() => {
    //     setProducts(props.products)
    // }, [props])
    

    return (
        <div className="products py-3 mt-5">
            <div className="font-weight-bolder text-center text-uppercase h5">{props.heading}</div>
            <div className="text-center"><h6> {props.title} </h6></div>

            <div className="row mt-4">
                {
                props.products == null ? 
                <div className="h5 ml-auto mr-auto">
                    <CircularProgress />
                </div> 
                :
                props.products.length !== 0 ?
                 props.products.reverse().map(product => (              
                    <div key={product._id} className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 m-0 p-0">
                        <div className="productCard">
                            {product.soldOut !== "true" ? <div onClick={() => props.addToBusket(product._id)} className="addToCart"> + </div> : ''}
                            <Link to={`/products/${product._id}`} style={{textDecoration: 'none'}}>
                                <div className="products__image">
                                    <img className="trending__image" 
                                        src={`https://res.cloudinary.com/riazcloud/image/upload/v1614437427/${product.productImgs[0]}`} alt="" 
                                        style={{objectFit: "fill", width: '100%', height: "100%"}}
                                    />
                                </div>
                                <div className="products__info">
                                    {product.soldOut === "true" ? <div className="soldOutProduct">Unavailable</div> : ''}
                                        <div className="px-2 mt-1 font-weight-bold text-dark">{product.name.slice(0 ,35)}</div>
                                        <div className="px-2 mt-2 text-danger font-weight-bold">&#2547;{product.price}</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
                :
                <div className="h5 ml-auto mr-auto">
                    products comming soon
                </div> 
                }


            </div>
            {props.type === "tag" ? <div className="text-center ml-auto"><Link to={`/products/tag/${props.link}`} className="loadMoreBtn my-5 btn btn-outline-dark">View All</Link></div> :
             props.type === "department" ? <div className="text-center ml-auto"><Link to={`/products/department/${props.link}`} className="loadMoreBtn my-5 btn btn-outline-dark">View All</Link></div> :
             props.type === "type" ? <div className="text-center ml-auto"><Link to={`/products/type/${props.link}`} className="loadMoreBtn my-5 btn btn-outline-dark">View All</Link></div> :
             ''
             }
        </div>
    )
}

export default connect(null, {addToBusket})(Products)



