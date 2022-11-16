import React, { Component } from 'react';
import './ProductExplorer.css'
// import {FaBars, FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import axios from 'axios'

import Layout from '../components/Layout'

import {connect} from 'react-redux'
import {addToBusket} from '../store/actions/busketActions'
import {Link} from 'react-router-dom'





class ProductExplorer extends Component {
    state={
        productId: '',
        productName: '',
        productDetails: '',
        size: 'Please Select Your Size',
        quantity: 1,
        color: '',
        weight: '',
        type:'',
        tag:'',
        price: '',
        soldOut: '',
        department: '',
        productImgs: [],
        largeImg: '',
        // busketChange: false,
    }

    // static getDerivedStateFromProps = (nextProps, prevState) => {
        
    //         return {
    //             busketChange: nextProps.busket.busketNumbers,

    //             // productName: nextProps.product.aProduct.name,
    //             // productDetails: nextProps.product.aProduct.details,
    //             // price: nextProps.product.aProduct.price,
    //             // productImgs: nextProps.product.aProduct.productImgs,
    //             // largeImg: nextProps.product.aProduct.productImgs[0]
    //         }
     
    // }

    componentDidMount() {
        const { match: { params } } = this.props;
        // this.props.aProduct(params.productId)
        axios.get(`${process.env.REACT_APP_APIENDPOINT}/products/${params.productId}`)
            .then(res => {
                let {name, price, details, department, soldOut, type, tag, productImgs} = res.data
                this.setState({
                    productId: params.productId,
                    productName: name,
                    productDetails: details,
                    size: 'M',
                    quantity: 1,
                    price: price,
                    soldOut: soldOut,
                    department,
                    type: type,
                    tag: tag,
                    productImgs: productImgs,
                    largeImg: productImgs[0]
                })

            })

    }


    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    subtractHandler = event => {
        let quantity = this.state.quantity
        if(quantity > 1) {
            this.setState({
                quantity: quantity - 1
            })
        }
    }

    addHandler = event => {
        let quantity = this.state.quantity
        this.setState({
            quantity: quantity + 1
        })
        return true
    }
    removeHandler = event => {
        event.preventDefault()
        axios.delete(`/products/delete/${this.state.productId}`)
        // this.props.history.push("/")
    }

    imgClickHandler = event => {
        // let imgBoxes = document.getElementsByClassName('imgBox')
        // ;[...imgBoxes].map(imgBox => {
            let target = event.target.parentElement
            let imgSrc = target.dataset.img
            this.setState({
                largeImg: imgSrc
            })
        // })
        return true
    }




    render() {
        let {productImgs, productId, soldOut, quantity, size, color, weight} = this.state

        return (
            <Layout>
                        {/* {busketChange ?  
                        <div style={{position: "fixed", width: "100vw", top: 0, left: 0, zIndex: 1000}} className="alert alert-success text-center" role="alert">
                            Added To Cart!
                        </div> : '' 
                        }
                        {console.log(this.props.busket.busketNumbers)} */}
                 <div className="top-menu">
                    <div className="container d-flex justify-content-between font-weight-bold">
                        <div> <Link to="/">Home</Link> &#8594; <Link to={`/products/type/${this.state.type}`} >{this.state.type}</Link> &#8594; {this.state.productName}</div>
                        <div className=""><Link to="/customer/cart">&#8594; Cart </Link> </div>
                    </div>
                </div>


                <div className="productDetails container mt-4">
                    <div className=" row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="flex-container row">
                                <div className="col-xl-3 col-lg-3 col-12 ">
                                    <div className="productImgs">
                                    { productImgs.map(img => (
                                        <div key={img} onClick={this.imgClickHandler} className="imgBox my-2" data-img={img} style={{cursor: 'pointer'}}>
                                            <img style={{maxWidth: "100%", maxHeight: '90px', background: '#eaeaea'}} src={`https://res.cloudinary.com/riazcloud/image/upload/v1614437427/${img}`} alt="img"/>
                                        </div> 
                                    ))}
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-12 px-2">
                                    <div className="largeImg mt-1" style={{background: '#eaeaea'}}>
                                        <img className="" style={{ width: '100%', maxHeight: '480px'}} src={`https://res.cloudinary.com/riazcloud/image/upload/v1614437427/${this.state.largeImg}`} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 right col-lg-6 col-md-6 col-sm-12">
                            <div className="font-weight-bold h3">{this.state.productName}</div>
                            <div>
                                <div className="price text-dark my-2" style={{fontSize: "20px"}}><small>TK-</small><strong>{this.state.price}</strong></div>
                                <div className="product__rating">
                                    {Array(5)
                                    .fill()
                                    .map((_, index) => (
                                        <span key={index}>&#11088;</span>
                                    ))}
                                </div>
                                <p className="productInfo">{this.state.productDetails}</p>
                                
                                
                                
                                {
                                this.state.department === "Fashion And Fashion Accessories" ?
                                <div>
                                    <div className="font-weight-bold">Size: {this.state.size}</div> 
                                    <div className="sizing d-flex mt-2">
                                        <input type="radio" id="xs" name="size" value="XS" onChange={this.changeHandler}/>
                                        <label htmlFor="male">XS</label>
                                        <input type="radio" id="s" name="size" value="S" onChange={this.changeHandler}/>
                                        <label htmlFor="female">S</label>
                                        <input type="radio" id="m" name="size" value="M" onChange={this.changeHandler}/>
                                        <label htmlFor="other">M</label>
                                        <input type="radio" id="l" name="size" value="L" onChange={this.changeHandler}/>
                                        <label htmlFor="other">L</label>
                                        <input type="radio" id="xl" name="size" value="XL" onChange={this.changeHandler}/>
                                        <label htmlFor="other">XL</label>
                                    </div>
                                </div>
                                :
                                ''
                                }
                          

                                        <div className="productQuantityController d-flex justify-content-center font-weight-bolder my-3">
                                            <div onClick={this.subtractHandler} className="" style={{cursor: 'pointer'}}>-</div>
                                            <div className="mx-3">{this.state.quantity}</div>
                                            <div onClick={this.addHandler} className="" style={{cursor: 'pointer'}}>+</div>
                                        </div>

                                        <label htmlFor="other" className="font-weight-bold">Product Quantity</label><br/>



                                      {soldOut === "true" ? <button type="button" className="btn btn-primary" disabled>Sold Out</button>
                                       :
                                       <button onClick={() => this.props.addToBusket(productId, quantity, size, color, weight, this.props.history)} className="btn btn-primary"> Add to Cart </button>
                                       }
                                    {
                                        this.props.admin.adminLoggedIn ? 
                                        <div className="">
                                            <Link to={`/admin/edit-product/${productId}`} className="btn btn-warning mr-2 mt-2"> Edit this product </Link>
                                            <Link to="#" onClick={this.removeHandler} className="btn btn-danger mt-2"> Remove this product </Link> 
                                        </div> : ''
                                    }
                                
    
                            </div>

                                
                            <div className="d-flex mt-3 font-weight-bold" style={{lineHeight: "15px"}}>
                                <div className="">Size guide</div>
                                <div className="mx-3">Delevary and return</div>
                                <div className="">Ask a question</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    customer: state.customer,
    busket : state.busket,
    admin: state.admin
})

export default connect(mapStateToProps, {addToBusket})(ProductExplorer)
