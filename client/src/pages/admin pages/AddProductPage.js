import React, {Component} from 'react'
import{ Link } from 'react-router-dom'
import {FaStarOfLife} from 'react-icons/fa'
import axios from 'axios'

class AddProductPage extends Component {

    state = {
        name: '',
        price: '',
        details: '',
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


        let {name, price, details, type, tag, productImgsName} = this.state 
        let product = {name, price, details, type, tag, productImgsName}
      
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
            <div className="container">
               { newProduct.name ? <div className ="alert alert-success" role="alert"> Product added as {tag} successfully </div> : null }
               <div className="text-center my-5 h1">Product Adding Page</div>
               <div className="row">
                   <div className="col-md-6">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="name">Product Name <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="name" type="text" onChange={this.changeHandler} className={error.name ? "is-invalid form-control" : "form-control"} placeholder="Casio fx, Realme ..." />
                                <div className="invalid-feedback">{error.name}</div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="price">Product Price <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="price" type="number" onChange={this.changeHandler} className={error.price ? "is-invalid form-control" : "form-control"} placeholder="100, 4099 ..." />
                                <div className="invalid-feedback">{error.price}</div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="details">Product Details</label>
                                <textarea name="details" style={{height: '200px'}}type="text" onChange={this.changeHandler} className="form-control" placeholder="Type product information..."/>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="type">Product Type <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="type" type="text" onChange={this.changeHandler} className={error.type ? "is-invalid form-control" : "form-control"} placeholder="mobile, watch, cloth ..." />
                                <div className="invalid-feedback">{error.type}</div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="tag">Product Tag <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="tag" type="text" onChange={this.changeHandler} className={error.tag ? "is-invalid form-control" : "form-control"} placeholder="trending, best-seller..." />
                                <div className="invalid-feedback">{error.tag}</div>
                            </div> 
                        

                            <div className="custom">
                                <label className="font-weight-bold" htmlFor="productImgs">Please select min one image of your product (required) <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="productImgs" type="file" className={` ${error.productImgsName ? 'is-invalid': ''}`} accept="image/*" onChange={this.fileSelectHandler} multiple />
                                <div className="invalid-feedback">{error.productImgsName}</div>
                            </div>


                            <button type="submit" className="my-3 btn btn-primary">Add Product</button>
                            <Link to="/"><button className="btn btn-danger ml-2">Home</button></Link>
                        </form>



                   </div>

                    
               </div>
            
                
            </div>
        )
    }
}




export default AddProductPage
