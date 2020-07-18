import React, { Component } from 'react';
import {FaBars, FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import axios from 'axios'
import MegaMenu from '../components/MegaMenu'
import {connect} from 'react-redux'
import {addToBusket} from '../store/actions/busketActions'
import {Link} from 'react-router-dom'





class ProductDetailsPage extends Component {
    state={
        productId: '',
        productName: '',
        productDetails: '',
        size: 'Please Select Your Size',
        quantity: 1,
        type:'',
        tag:'',
        price: '',
        productImgs: [],
        largeImg: ''
    }

    // static getDerivedStateFromProps = (nextProps, prevState) => {
        
    //         return {
    //             productName: nextProps.product.aProduct.name,
    //             productDetails: nextProps.product.aProduct.details,
    //             price: nextProps.product.aProduct.price,
    //             // productImgs: nextProps.product.aProduct.productImgs,
    //             // largeImg: nextProps.product.aProduct.productImgs[0]
    //         }
     
    // }

    componentDidMount() {
        const { match: { params } } = this.props;
        // this.props.aProduct(params.productId)
        axios.get(`/products/${params.productId}`)
            .then(res => {
                let {name, price, details, type, tag, productImgs} = res.data
                this.setState({
                    productId: params.productId,
                    productName: name,
                    productDetails: details,
                    size: 'M',
                    quantity: 1,
                    price: price,
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
        this.props.history.push("/")
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
        let {productImgs, productId, quantity, size} = this.state
        
        return (
            <div>
            <MegaMenu/>

            <div className="top-menu">
                    <div className="container d-flex justify-content-between">
                        <div> Home > watch > {this.state.productName} </div>
                        <div><a href="http://fb.com"> <FaArrowCircleLeft/> </a>   <a href="http://fb.com"><FaBars /></a>    <a href="http://fb.com"> <FaArrowCircleRight/> </a></div>
                    </div>
                </div>




                <div className="productDetails container mt-5">
                    <div className=" row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">


                            <div className="flex-container row">
                                <div className="col-xl-3 col-lg-3 col-md-12  " >
                                    <div className="productImgs">

                                    { productImgs.map(img => (
                                            <div key={img} onClick={this.imgClickHandler} className="imgBox my-2" data-img={img} style={{cursor: 'pointer'}}>
                                                 <img style={{ width: '100%', height: '100px', background: '#eaeaea'}} src={`/images/${img}`} alt="img"/>
                                            </div> 
                                    ))}
                                
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12 ">
                                    <div className="largeImg mt-1" style={{background: '#eaeaea'}}>
                                        <img className="" style={{width: '100%', height: '480px'}} src={`/images/${this.state.largeImg}`} alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6 right col-lg-6 col-md-6 col-sm-12 ">
                            <div className="font-weight-bold">{this.state.productName}</div>
                            <div>
                                <div className="price text-dark my-2" style={{fontSize: "20px"}}>TK-{this.state.price}</div>
                                <div className="review"></div>
                                <p className="productInfo">{this.state.productDetails}</p>
                                <p className="font-weight-bold">Please Select Your Size</p>
                                <div className="font-weight-bold my-3">Size: {this.state.size}</div>
                                <div className="sizeRadio">
                                   
                                        
                                        <div className="sizing d-flex">
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

                                        <div className="productQuantityController d-flex justify-content-center font-weight-bolder my-3">
                                            <div onClick={this.subtractHandler} className="" style={{cursor: 'pointer'}}>-</div>
                                            <div className="mx-3">{this.state.quantity}</div>
                                            <div onClick={this.addHandler} className="" style={{cursor: 'pointer'}}>+</div>
                                        </div>

                                        <label htmlFor="other">Product Quantity</label><br/>



                                      <Link to="" onClick={() => this.props.addToBusket(productId, quantity, size, this.props.history)} className="btn btn-primary"> Add to Cart </Link>
                                    {
                                        this.props.admin.adminLoggedIn ? 
                                        <div className="mt-2">
                                            <Link to={`/admin/edit-product/${productId}`} className="btn btn-warning"> Edit this product </Link>
                                            <Link to="" onClick={this.removeHandler} className="ml-2 btn btn-danger"> Remove this product </Link> 
                                        </div> : ''
                                    }
                                  
                                </div>
                            </div>
                            <div className="advertise" style={{height: '60px'}}></div>
                            <div className="d-flex">
                                <div className="">Size guide</div>
                                <div className="mx-3" style={{}}>Delevary and return</div>
                                <div className="">Ask a question</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    busket : state.busket,
    admin: state.admin
})

export default connect(mapStateToProps, {addToBusket})(ProductDetailsPage)
