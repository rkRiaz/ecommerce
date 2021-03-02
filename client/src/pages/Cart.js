
import React, {useState} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { productQuantity, orderedProducts } from '../store/actions/busketActions'
import { FaTrash } from 'react-icons/fa'
import {cartSideBar__off} from '../store/actions/sideBarAction'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import './Cart.css'


const Cart = (props) => {
    const [checked, setChecked] = useState(false)
    const [warning, setWarning] = useState(null)


    let { cart_products } = props.busket
    let customerId = props.customer.customer._id
    let customer = props.customer.customer
    let total = cart_products.map(p => { return p.price * p.quantity })
    let subTotal = total.reduce((a, b) => a + b, 0)
    
    let orderedProducts = props.busket.ordered_products

    orderedProducts.subTotal = subTotal
    orderedProducts.customer= customer ? customer : ''
    orderedProducts.customerId = customerId ? customerId : ''
    // console.log(orderedProducts)

    let checkOut = (e) => {
        e.preventDefault()
        checked === false ? setWarning("You must agree with the terms and conditions of sales to check out.") : 
        props.orderedProducts(customerId, orderedProducts, props.history)
    }
    let termsHandler = e => {
        e.preventDefault()
        props.cartSideBar__off()
        props.history.push("/terms-and-condition")
    }


    // useEffect(() => {
    //     // if(!props.customer.customerLoggedIn) {
    //         fetchData()
    //     // }
    //     props.orderAction(
    //             {
    //                 customerId: props.customer.customerLoggedIn ? props.customer.customerInfo._id : '',
    //                 cart_products, 
    //                 subTotal
    //             }
    //         )

    // }, [props.busket.busketNumbers, subTotal])



    // const fetchData = async () => {
    //     let cartProducts = []
    //     for(let i = 0; i < props.busket.cart_products.length; i++ ) {
    //         let {data} = await axios.get(`/api/product/get-single-product-by-id/${props.busket.cart_products[i]._id}`)
    //         cartProducts.push({
    //             _id: data.product._id,
    //             productName: data.product.productName,
    //             salePrice: data.product.salePrice,
    //             quantity: props.busket.cart_products[i].quantity,
    //             productImage: data.product.productImages[0],
    //         })
    //     }
    //     setCart_products(cartProducts)
    //     if(cartProducts.length > 0) {
    //         let total = cartProducts.map(p => { return p.salePrice * p.quantity })
    //         setSubTotal(total.reduce((a, b) => a + b, 0))
    //     }
    // }

        // fetch cart from customer database
        // useEffect(() => {
        //     if(props.customer.customerLoggedIn) {
        //         let cartProducts = []

        //         axios.get(`http://localhost:8080/api/customer/loginCustomerInfo`, {
        //             headers: {
        //                 Authorization: `Bearer ${props.customer.customerToken}`
        //             }
        //         }) 
        //         .then(res => {
        //             if(res.data.customerInfo.cart.length !== 0) {
        //                 // return console.log(res.data.customerInfo)
        //                 // setCart_products (res.data.customerInfo.cart)
        //                 let quantity = res.data.customerInfo.cart.map(p => {return p.quantity})   
        //                 let busketNumbers = quantity.reduce((a, b) => a + b, 0)
        //                 props.setBusketFromDB(res.data.customerInfo.cart, busketNumbers)
        //             }
        //         })
        //         .catch(e => console.log(e))


        //         const fetchData = async() => {
        //             for(let i = 0; i < props.busket.cart_products.length; i++ ) {
        //                 let {data} = await axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${props.busket.cart_products[i]._id}`)
        //                 cartProducts.push({
        //                     _id: data.product._id,
        //                     productName: data.product.productName,
        //                     salePrice: data.product.salePrice,
        //                     quantity: props.busket.cart_products[i].quantity,
        //                     productImage: data.product.productImages[0],
        //                 })
        //             }
        //             setCart_products(cartProducts)
        //             if(cartProducts.length > 0) {
        //                 let total = cartProducts.map(p => { return p.salePrice * p.quantity })
        //                 setSubTotal(total.reduce((a, b) => a + b, 0))
        //             }
        //         }
        //         fetchData()

        //         axios.put(`http://localhost:8080/api/customer/editInfo`, props.busket.cart_products, {
        //             headers: {
        //                 'Authorization': `Bearer ${props.customer.customerToken}` 
        //             }
        //         })


        //     }
        // },[props.busket.busketNumbers])




    // let fetchData = async() => {
    //     props.busket.cart_products.map(async busket_product => {  
    //         let {data} =  await axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${busket_product._id}`)
    //         busket_product.productName = data.product.productName
    //         busket_product.salePrice = data.product.salePrice
    //         busket_product.productImage = data.product.productImages[0]
    //    })
      
    // }

    // fetchData()

    // useEffect(() => {
        
    //     // console.log(props.busket.cart_products) 
    //     let fetchProducts = []

    //      for(let i=0; i<props.busket.cart_products.length; i++) {
    //          axios.get(`http://localhost:8080/api/product/get-single-product-by-id/${props.busket.cart_products[i]._id}`)
    //          .then(res => {
    //             let product = res.data
    //             product.quantity = props.busket.cart_products[i].quantity ? props.busket.cart_products[i].quantity : 1 
    //             product.size  = props.busket.cart_products[i].size ? props.busket.cart_products[i].size : ''
    //             product.color = props.busket.cart_products[i].color ? props.busket.cart_products[i].color: ''
    //             product.weight = props.busket.cart_products[i].weight ? props.busket.cart_products[i].weight: 1
    //             fetchProducts.push(product)
    //             setLoading(false)
    //          })
    //      }

    //     setCart_products(fetchProducts)
        
         
    //     //  console.log(fetchProducts)
       
    // }, [props.busket.busketNumbers])


    // let { cart_products } = props.busket
    // let customerId = props.customer.customerInfo._id
    // let customer = props.customer.customer

    // let total = cart_products.length !== 0 && cart_products !== '' ? cart_products.map(p => { return p.salePrice * p.quantity }) : ''
    // let subTotal = total.reduce((a, b) => a + b, 0)
    
    // let orderedProducts = props.busket.ordered_products

    // orderedProducts.subTotal = subTotal
    // orderedProducts.customer= customer ? customer : ''
    // orderedProducts.customerId = customerId ? customerId : ''
    // console.log(orderedProducts)

    

    return (
        <div>
            
            <Layout>
                {cart_products.length !== 0 ?
                    <div className="cart">                    
                        <div className="text-center text-dark" style={{padding: "2% 0", background: '#eaeaea'}}>
                            <div className="h2">My Cart</div>
                            <Link to="/"><div className="badge badge-secondary text-center">&#8594; Go To Shop</div></Link> 
                        </div>
                        <div className="cart__content">
                                <div className="cart__details mt-5 px-3">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart_products.map((p, index) => (
                                                <tr className="tableRow" key={index}>
                                                    <td><Link to={`/products/${p._id}`}><img style={{ width: 70, height: 50 }} className="img-thumbnail mr-3" src={`https://res.cloudinary.com/riazcloud/image/upload/v1614437427/${p.productImgs[0]}`} alt="" />{p.name}</Link></td>
                                                    <td>{p.price}</td>
                                                    <td>
                                                        <div className="productQuantityController d-flex justify-content-center font-weight-bolder">
                                                            <div onClick={() => props.productQuantity('decrease', p._id)} className="" style={{ cursor: 'pointer' }}>{p.quantity === 1 ? <FaTrash style={{fontSize: 15, marginBottom: 7}}/> : "-" }</div>
                                                            <div className="mx-3">{p.quantity}</div>
                                                            <div onClick={() => props.productQuantity('increase', p._id)} className="" style={{ cursor: 'pointer' }}>+</div>
                                                        </div>
                                                    </td>
                                                    <td>{p.price * p.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <hr/>
                                <div className="checkOut text-right mt-4 px-3">
                                    <div className="h3 font-weight-bold">SubTotal Amount: &#2547;<strong>{subTotal}</strong></div>
                                    <p>Taxes, shipping and discounts codes calculated at checkout</p>
                                    <div className="d-flex justify-content-end my-2">
                                        <input onChange={e => setChecked(!checked)} className="mt-1" type="checkbox" /> &nbsp;&nbsp;
                                        <div className="text-danger" style={{textDecorationLine: "underline"}} onClick={termsHandler}>I agree with the terms and conditions.</div>    
                                    </div>
                                    <button onClick={checkOut} className="btn btn-primary font-weight-bold mt-2" style={{width: 300, borderRadius: 50}}>CHECK OUT</button>
                                </div>
                                {
                                warning === null ? "" : 
                                <div style={{position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 1}} className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <ReportProblemOutlinedIcon className="mb-1"/><strong>&nbsp;&nbsp;&nbsp;{warning}</strong>
                                    <button onClick={e => setWarning(null)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                }
                            </div>
                        </div>

                    :
                    <div className="display-4 text-center">Your Cart is Empty<br /> <Link className="text-success" to="/">Go to shop</Link></div>
                }
            </Layout>
        
        </div>
    );
}
const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket
})
export default connect(mapStateToProps, { productQuantity, orderedProducts, cartSideBar__off })(Cart);

