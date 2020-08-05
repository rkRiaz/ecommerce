
import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { productQuantity, orderedProducts } from '../store/actions/busketActions'
import { FaTrash } from 'react-icons/fa'
import './Cart.css'


const Cart = (props) => {
    let { cart_products } = props.busket
    let customerId = props.customer.customer._id
    let customer = props.customer.customer
    let total = cart_products.map(p => { return p.price * p.quantity })
    let subTotal = total.reduce((a, b) => a + b, 0)
    
    let orderedProducts = props.busket.ordered_products

    orderedProducts.subTotal = subTotal
    orderedProducts.customer= customer ? customer : ''
    orderedProducts.customerId = customerId ? customerId : ''
    console.log(orderedProducts)


    let checkOut = () => {

        props.orderedProducts(customerId, orderedProducts, props.history)

    }


    return (
        <div>
            
            <Layout>
                {cart_products.length !== 0 ?
                    <div className="cart">                    
                        <div className="text-center text-dark" style={{padding: "2% 0", background: '#eaeaea'}}>
                            <div className="h2">My Account </div>
                            <Link to="/"><div className="badge badge-secondary text-center">Go To Shop &#8594;</div></Link> 
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
                                                    <td><img style={{ width: 70, height: 50 }} className="img-thumbnail mr-3" src={`/images/${p.productImgs[0]}`} alt="" />{p.name}</td>
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
                                    <div className="h3 font-weight-bold">SubTotal Amount: <strong>{subTotal}</strong> <small>TK-Only</small></div>
                                    <p>Taxes, shipping and discounts codes calculated at checkout</p>
                                    <p>
                                        <input type="checkbox"  value=""/> &nbsp;
                                        <Link to="/terms-and-condition">I agree with the terms and conditions.</Link>    
                                    </p>
                                    <button onClick={checkOut} className="btn btn-primary font-weight-bold" style={{width: 300, borderRadius: 50}}>CHECK OUT</button>
                                </div>
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
export default connect(mapStateToProps, { productQuantity, orderedProducts })(Cart);

