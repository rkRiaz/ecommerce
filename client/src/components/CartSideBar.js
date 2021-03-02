
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { productQuantity, orderedProducts } from '../store/actions/busketActions'
import { FaTrash } from 'react-icons/fa'
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import './CartSideBar.css'
import {cartSideBar__off} from "../store/actions/sideBarAction"


const CartSideBar = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    // const [checked, setChecked] = useState(false)
    // const [warning, setWarning] = useState(null)

    
    
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

    // let checkOut = (e) => {
    //     e.preventDefault()
    //     if(checked === false) {
    //         setWarning("You must agree with the terms and conditions of sales to check out.")
    //     } else {
    //         // let history = {location: {pathname: "/customer/cart"}}
    //         props.cartSideBar__off()
    //         props.orderedProducts(customerId, orderedProducts, props.history)
    //     }

    // }

    let toggle = (e) => {
        e.preventDefault()
        // setIsOpen(!isOpen)
        props.cartSideBar__off()
    }
    let closeBar = e => {
        e.preventDefault()
        props.cartSideBar__off()
        props.history.push("/customer/cart")
    }
    // let termsHandler = e => {
    //     e.preventDefault()
    //     props.cartSideBar__off()
    //     props.history.push("/terms-and-condition")
    // }
    useEffect(() => {
        setIsOpen(props.sideBar.cartSideBar)
    }, [props.sideBar.cartSideBar])
    // console.log(props.sideBar.cartSideBar)
    return (
        <div>
            <div className="cart__sidebar">

                <div className={isOpen ? "cart__sidebar__content d-flex justify-content-between" : "cart__sidebar__content bar__off d-flex justify-content-between"}>

               
                                <div onClick={toggle} className="cart__content__closeBtn"></div>
              
                                <div className={isOpen ? "cart__sidebar__cart__details" : "cart__sidebar__cart__details bar__off"}>
                                    
                                    
                                        <div className="h4 ml-2 mb-4">Shopping Cart</div>
                                        <div onClick={toggle} className={!isOpen ? "" : "cart__content__closeBtn__icon  mt-1"}><CloseSharpIcon/></div>
                                    
                                    
                                    <div className="cart__sidebar__cart__table">
                            
                                                {cart_products.map((p, index) => (
                                                    <div className="tableRow " key={index}>
                                                       <hr/>
                                                        <div className="d-flex">
                                                        <div className="mr-1" style={{ width: "170px"}}><img style={{ width: "100%", height: "150px" }} className="img-thumbnail" src={`https://res.cloudinary.com/riazcloud/image/upload/v1614437427/${p.productImgs[0]}`} alt="" /></div>
                                                        <div className="ml-4 " style={{ width: "130px"}}>
                                                            <p className="font-weight-bold" style={{lineHeight: "17px"}}>{p.name}</p>
                                                            <p className="text-danger font-weight-bold">&#2547; {p.price}</p> 
                                                            <div className="cart__side__bar__productQuantityController d-flex justify-content-center font-weight-bolder">
                                                                <div onClick={() => props.productQuantity('decrease', p._id)} className="" style={{ cursor: 'pointer' }}>{p.quantity === 1 ? <FaTrash style={{fontSize: 15, marginBottom: 7}}/> : "-" }</div>
                                                                <div className="mx-3">{p.quantity}</div>
                                                                <div onClick={() => props.productQuantity('increase', p._id)} className="" style={{ cursor: 'pointer' }}>+</div>
                                                            </div>                                                          
                                                           
                                                        </div>
                                                        </div>
                                                        
                                                    </div>
                                                ))}
                                  
                                    </div>

                                    <hr/>
                                    <div className="checkOut text-center mt-4 px-3">
                                        {/* <div className="h3 font-weight-bold">SubTotal Amount: &#2547;<strong>{subTotal}</strong></div>
                                        <p>Taxes, shipping and discounts codes calculated at checkout</p>
                                        <div className="d-flex justify-content-end my-2">
                                            <input onChange={e => setChecked(!checked)} className="mt-1" type="checkbox" />
                                            <div className="text-danger" style={{textDecorationLine: "underline"}} onClick={termsHandler}>I agree with the terms and conditions.</div>    
                                        </div> */}
                                        <div className="h3 font-weight-bold">SubTotal Amount: &#2547;<strong>{subTotal}</strong></div>
                                        <button onClick={closeBar} className="btn btn-warning font-weight-bold" style={{width: 200, borderRadius: 40}}>View Cart</button>
                                        {/* <button onClick={checkOut} className="btn btn-primary font-weight-bold mt-2" style={{width: 200, borderRadius: 40}}>CHECK OUT</button> */}
                                    </div>
                                    {/* {
                                    warning === null ? "" : 
                                    <div style={{position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 1}} className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <ReportProblemOutlinedIcon className="mb-1"/><strong>&nbsp;&nbsp;&nbsp;{warning}</strong>
                                        <button onClick={e => setWarning(null)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    } */}
                                </div>

                            </div>
            </div>        
        </div>
    );

}
const mapStateToProps = state => ({
    customer: state.customer,
    busket: state.busket,
    sideBar: state.sideBars
})
export default connect(mapStateToProps, { productQuantity, orderedProducts, cartSideBar__off })(withRouter(CartSideBar));

