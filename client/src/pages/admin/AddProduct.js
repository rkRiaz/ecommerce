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
        soldOut: false,
        type: '',
        tag: '',
        productImgs: [],
        productImgsName: null,
        error: {},
        newProduct: {}
    }
    
    fileSelectHandler = event => {
        let productImgsName = []
        for(const key of Object.keys(event.target.files)) {
            let files = event.target.files
            productImgsName.push(`productImgs-${files[key].name}`)
        }
        this.setState({
            productImgs: event.target.files,
            productImgsName: productImgsName
        })  
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()


        let {name, price, details, department, type, tag, productImgsName} = this.state 
        let product = {name, price, department, details, type, tag, productImgsName}
      
        axios.post('/products/add-product', product)
            .then(res => {
                this.setState({
                    newProduct: res.data
                })
            })
            .catch(err => {
                this.setState({
                    error: err.response.data
                })
                
            })
            
    

                let formData = new FormData()
                for(const key of Object.keys(this.state.productImgs)) {
                    formData.append('productImgs', this.state.productImgs[key])
                }
                
                axios.post('/uploads/product-imgs', formData)

    }



    render() {
        let { tag, error, newProduct } = this.state
        return (
           <Layout>
                <div className="addProduct">
                { Object.keys(newProduct).length !== 0 ? <div className ="alert alert-success" role="alert"> Product added as {tag} successfully </div> : null }
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
                                    <label className="font-weight-bold" htmlFor="department">Department<sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                    <div className="">
                                        <select required name="department" id="department" onChange={this.changeHandler}>
                                            <option value="">Please select department</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Fashion And Fashion Accessories">Fashion And Fashion Accessories</option>
                                            <option value="Grocery, Household, Food & Pets">Grocery, Household, Food & Pets</option>
                                            <option value="Baby">Baby</option>
                                            <option value="Vehicles, Tires & Industria">Vehicles, Tires & Industria</option>
                                            <option value="Property, Construction & Improvements">Property, Construction & Improvements</option>
                                            <option value="Home, Furniture & Appliances">Home, Furniture & Appliances</option>
                                            <option value="Pharmacy, Health & Beauty">Pharmacy, Health & Beauty</option>
                                            <option value="Movies, Music, Books & Stationaries">Movies, Music, Books & Stationaries</option>
                                            <option value="Sports, Fitness & Outdoor">Sports, Fitness & Outdoor</option>
                                            <option value="Service">Service</option>
                                            <option value="Corporate">Corporate</option>
                                            <option value="Art, Craft, Personalized shops">Art, Craft, Personalized shops</option>
                                            <option value="Agricultural">Agricultural</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="invalid-feedback">{error.department}</div>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="type">Product Type <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label><br/>
                                        <select required name="type" id="type" onChange={this.changeHandler}>
                                            <option value="">Please select product type</option>
                                            <option value="Electric & Parts">Electric & Parts</option>
                                            <option value="Electronics and Appliance">Electronics and Appliance</option>
                                            <option value="Watch & Clock">Watch & Clock</option>
                                            <option value="Men">Men</option>
                                            <option value="Women">Women</option>
                                            <option value="other">other</option>
                                        </select>
                                    <div className="invalid-feedback">{error.type}</div>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="tag">Product Tag <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label><br/>
                                    <select required name="tag" id="tag" onChange={this.changeHandler}>
                                            <option value="">Please select product tag</option>
                                            <option value="Best Seller">Best Seller</option>
                                            <option value="Trending">Trending</option>
                                            <option value="Featured Products">Featured Products</option>
                                            <option value="other">other</option>
                                    </select>
                                    <div className="invalid-feedback">{error.tag}</div>
                                </div> 
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="details">Product Details</label>
                                    <textarea name="details" style={{height: '200px'}}type="text" onChange={this.changeHandler} className="form-control" placeholder="Type product information..."/>
                                </div>
                            

                                <div className="custom">
                                    <label className="font-weight-bold" htmlFor="productImgs">Please select min one image of your product (required) <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                    <input name="productImgs" type="file" className={` ${error.productImgsName ? 'is-invalid': ''}`} accept="image/*" onChange={this.fileSelectHandler} multiple />
                                    <div className="invalid-feedback">{error.productImgsName}</div>
                                </div>


                                <button type="submit" className="my-3 btn btn-primary">Add Product</button>
                                <Link to="/"><button className="btn btn-danger ml-2">Shop</button></Link>
                            </form>

                    </div>    
                </div> 
                </div>
           </Layout>
        )
    }
}




export default AddProductPage
