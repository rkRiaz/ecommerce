
import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MegaMenu from '../components/MegaMenu'
import { productQuantity } from '../store/actions/busketActions'
import { FaTrash } from 'react-icons/fa'


const Cart = (props) => {


    let { cart_products } = props.busket
    let total = cart_products.map(p => { return p.price * p.quantity })
    let subTotal = total.reduce((a, b) => a + b, 0)

    return (
        <div>
            <MegaMenu />

            {cart_products.length !== 0 ?
                <div className="container">
                    <h1 className="text-center">Shopping Cart</h1>
                    <table className="table mt-5">
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

                                <tr key={index}>
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
                    <div className="text-center font-weight-bold" style={{ marginRight: 200 }}>SubTotal Amount: {subTotal}</div>
                </div>


                :
                <div className="display-4 text-center">Your Cart is Empty<br /> <Link className="text-success" to="/">Go to shop</Link></div>
            }

        </div>
    );
}

const mapStateToProps = state => ({
    busket: state.busket
})

export default connect(mapStateToProps, { productQuantity })(Cart);

