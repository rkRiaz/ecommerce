import React, {Component} from 'react'
import{ Link } from 'react-router-dom'
import {FaStarOfLife} from 'react-icons/fa'
import axios from 'axios'

class EditProduct extends Component {

    state = {
        productId: '',
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
        updatedProduct:''
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        // this.props.aProduct(params.productId)
        axios.get(`/products/${params.productId}`)
        
            .then(res => {
                let {name, price, details, department, soldOut, type, tag, productImgs, productImgsName} = res.data
                this.setState({
                    productId: params.productId,
                    name,
                    details,
                    size: 'M',
                    department,
                    soldOut,
                    quantity: 1,
                    price: price,
                    type: type,
                    tag: tag,
                    productImgs: productImgs,
                    productImgsName
                })
            })


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

        let {name, price, details, department, soldOut, type, tag, productImgsName} = this.state 
        let product = {name, price, department, soldOut, details, type, tag, productImgsName}
    
        axios.put(`/products/edit-product/${this.state.productId}`, product)
            .then(res => {
                
                this.setState({
                    updatedProduct: res.data.updatedProduct
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

            this.props.history.push('/')

    }



    render() {
        console.log(this.state.updatedProduct)
        let {name, price, details, department, soldOut, type, tag, error } = this.state
   
        return (
            <div className="container">
              
               <div className="text-center my-5 h1">Product Editing Page</div>
               <div className="row">
                   <div className="col-md-6">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="name">Product Name <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="name" type="text" onChange={this.changeHandler} className={error.name ? "is-invalid form-control" : "form-control"} value={name} />
                                <div className="invalid-feedback">{error.name}</div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="price">Product Price <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="price" type="number" onChange={this.changeHandler} className={error.price ? "is-invalid form-control" : "form-control"} value={price} />
                                <div className="invalid-feedback">{error.price}</div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="details">Product Details</label>
                                <textarea name="details" style={{height: '200px'}}type="text" onChange={this.changeHandler} className="form-control" value={details}/>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="department">Department<sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="department" type="text" onChange={this.changeHandler} className={error.department ? "is-invalid form-control" : "form-control"} value={department} />
                                <div className="invalid-feedback">{error.department}</div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="type">Product Type <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="type" type="text" onChange={this.changeHandler} className={error.type ? "is-invalid form-control" : "form-control"} value={type} />
                                <div className="invalid-feedback">{error.type}</div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="tag">Product Tag <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="tag" type="text" onChange={this.changeHandler} className={error.tag ? "is-invalid form-control" : "form-control"} value={tag}/>
                                <div className="invalid-feedback">{error.tag}</div>
                            </div>

                            <label className="font-weight-bold" htmlFor="soldOut">SoldOut? <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                            <div className="soldOut d-flex">
                                <input type="radio" id="true" name="soldOut" value="true" onChange={this.changeHandler}/>
                                <label htmlFor="true">Yes</label>
                                <input type="radio" id="false" name="soldOut" value="false" onChange={this.changeHandler}/>
                                <label htmlFor="female">No</label>      
                            </div> 
                        

                            <div className="custom">
                                <label className="font-weight-bold" htmlFor="productImgs">Please select min one image of your product (required) <sup><FaStarOfLife style={{color: 'red', fontSize:'8px'}}/></sup></label>
                                <input name="productImgs" type="file" className={` ${error.productImgsName ? 'is-invalid': ''}`} accept="image/*" onChange={this.fileSelectHandler} multiple />
                                <div className="invalid-feedback">{error.productImgsName}</div>
                            </div>


                            <button type="submit" className="my-3 btn btn-primary">update Product</button>
                            <Link to="/"><button className="btn btn-danger ml-2">Home</button></Link>
                        </form>






                   </div>

                    
               </div>
            
                
            </div>
        )
    }
}




export default EditProduct
