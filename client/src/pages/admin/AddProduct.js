import React, {Component} from 'react'
import "./AddProduct.css"
import{ Link } from 'react-router-dom'
import {FaStarOfLife} from 'react-icons/fa'
import Layout from './Layout'

import axios from 'axios'

class AddProductPage extends Component {

    state = {
        name: '',
        price: '',
        details: '',
        department:'',
        quantity: '',
        soldOut: false,
        type: '',
        tag: '',
        productImgs: [],
        error: {},
        newProduct: {},
        formData: new FormData()
    }
    
    // fileSelectHandler = event => {
    //     let productImgsName = []
    //     for(const key of Object.keys(event.target.files)) {
    //         let files = event.target.files
    //         productImgsName.push(`productImgs-${files[key].name}`)
    //     }
    //     this.setState({
    //         productImgs: event.target.files,
    //         productImgsName: productImgsName
    //     })  
    // }

    changeHandler = event => {
        if(event.target.name == 'productImgs') {
            for(const key of Object.keys(event.target.files)) {
                this.state.formData.append('productImgs', event.target.files[key])
            }
    //   clearImmediate

        } else {
            this.state.formData.set(event.target.name, event.target.value)
            // this.setState({
            //     ...this.state,
            //     [event.target.name]: event.target.value
            // })
        }
          
       
 



        // if(event.target.name == 'productImgs') {
        //     this.setState({
        //         ...this.state,
        //         [event.target.name]: event.target.value
        //     })
        //     this.state.formData.set('productImgs', event.target.files[0])
        // } else {
        //     this.setState({
        //         ...this.state,
        //         [event.target.name]: event.target.value
        //     })
        //     this.state.formData.set(event.target.name, event.target.value)
        // }
        console.log(this.state.formData)
    }


    submitHandler = event => {
        event.preventDefault()
        let {name, price, details, department, quantity, type, tag, productImgs, formData} = this.state 
        let product = { name, price, details, quantity, department, type, tag, productImgs, formData }
        
     

        // console.log(product)
      
        axios.post(`${process.env.REACT_APP_APIENDPOINT}/products/add-product`, formData)
        // .then(res => {
        //     this.setState({
        //         newProduct: res.data
        //     })
        // })
        // .catch(err => {
        //     this.setState({
        //         error: err.response.data
        //     })
        // })
            


        // let formData = new FormData()
        // for(const key of Object.keys(this.state.productImgs)) {
        //     formData.append('productImgs', this.state.productImgs[key])
        // }
        // axios.post('/uploads/product-imgs', formData)

    }



    render() {
        
        let { tag, error, newProduct } = this.state
        return (
           <Layout>
                <div className="addProduct">
                    <div className="addProduct__content">
                    { Object.keys(newProduct).length !== 0 ? <div className ="alert alert-success text-center" style={{position: "fixed", top: 0, left:0, width: "100%", zIndex: 2000}} role="alert"> Product Added As {tag} Successfully! </div> : null }
                        <div className="text-center my-2 h1">Product Adding Page</div>
                        <div className="row">
                            <div className="col-md-6">
                                    <form onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="name">Product Name <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                            <input required name="name" type="text" onChange={this.changeHandler} className={error.name ? "is-invalid form-control" : "form-control"} placeholder="Casio fx, Realme ..." />
                                            <div className="invalid-feedback">{error.name}</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="price">Product Price <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                            <input required name="price" type="number" onChange={this.changeHandler} className={error.price ? "is-invalid form-control" : "form-control"} placeholder="100, 4099 ..." />
                                            <div className="invalid-feedback">{error.price}</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="quantity">Product Quantity <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label><br/>
                                            <input required type="number" id="quantity" name="quantity" onChange={this.changeHandler} min="1" max="500"/>
                                            <div className="invalid-feedback">{error.quantity}</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="tag">Product Tag <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label><br/>
                                            <select required name="tag" id="tag" onChange={this.changeHandler}>
                                                    <option value="">Please select product tag</option>
                                                    <option value="best-seller">Best Seller</option>
                                                    <option value="trending">Trending</option>
                                                    <option value="featured-products">Featured Products</option>
                                                    <option value="new-arrival">New Arrival</option>
                                                    <option value="other">other</option>
                                            </select>
                                            {/* <div className="invalid-feedback">{error.tag}</div> */}
                                        </div> 
                                        <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="department">Department<sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                            <div className="">
                                                <select required name="department" id="department" onChange={this.changeHandler}>
                                                    <option value="">Please select department</option>
                                                    <option value="electronics">Electronics</option>
                                                    <option value="fashion-and-fashion-accessories">Fashion And Fashion Accessories</option>
                                                    <option value="grocery-household-food-pets">Grocery, Household, Food & Pets</option>
                                                    <option value="baby">Baby</option>
                                                    <option value="vehicles-tires-industrial">Vehicles, Tires & Industria</option>
                                                    <option value="property-construction-improvements">Property, Construction & Improvements</option>
                                                    <option value="home-furniture-appliances">Home, Furniture & Appliances</option>
                                                    <option value="pharmacy-health-beauty">Pharmacy, Health & Beauty</option>
                                                    <option value="movies-music-books-stationaries">Movies, Music, Books & Stationaries</option>
                                                    <option value="sports-fitness-outdoor">Sports, Fitness & Outdoor</option>
                                                    <option value="service">Service</option>
                                                    <option value="corporate">Corporate</option>
                                                    <option value="art-craft-personalizedshops">Art, Craft, Personalized shops</option>
                                                    <option value="agricultural">Agricultural</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            {/* <div className="invalid-feedback">{error.department}</div> */}
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="type">Product Type <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label><br/>
                                                <select required name="type" id="type" onChange={this.changeHandler}>
                                                    <option value="">Please select product type</option>
                                                    <option value="electric-parts">Electric & Parts</option>
                                                    <option value="watch-clock">Watch & Clock</option>
                                                    <option value="pant">Pant</option>
                                                    <option value="shirt">Shirt</option>
                                                    <option value="women-dress">Women's Dress</option>
                                                    <option value="grocery">Grocery</option>
                                                    <option value="mobile">Mobile</option>
                                                    <option value="mobile-accessories">Mobile Accessories</option>
                                                    <option value="headphone">Headphone</option>
                                                    <option value="laptop">Laptop</option>
                                                    <option value="computer-accessories">Computer Accessories</option>
                                                    <option value="cosmetics">Cosmetics</option>
                                                    <option value="medicine">Medicine</option>
                                                    <option value="goggles">Goggles</option>
                                                    <option value="other">other</option>

                                                </select>
                                            {/* <div className="invalid-feedback">{error.type}</div> */}
                                        </div>

                                        <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="details">Product Details</label>
                                            <textarea name="details" style={{height: '200px'}}type="text" onChange={this.changeHandler} className="form-control" placeholder="Type product information..."/>
                                        </div>
                                    

                                        <div className="custom">
                                            <label className="font-weight-bold" htmlFor="productImgs">Please select min one image of your product (required) <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                            <input name="productImgs" type="file" className={` ${error.productImgsName ? 'is-invalid': ''}`} accept="image/*" onChange={this.changeHandler} multiple />
                                            <div className="invalid-feedback">{error.productImgsName}</div>
                                        </div>


                                        <button type="submit" className="my-3 btn btn-primary">Add Product</button>
                                        <Link to="/"><button className="btn btn-danger ml-2">Shop</button></Link>
                                    </form>

                            </div>    
                        </div> 
                    </div>
                </div>
           </Layout>
        )
    }
}




export default AddProductPage
