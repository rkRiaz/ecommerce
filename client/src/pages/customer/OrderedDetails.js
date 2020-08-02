import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./OrderedDetails.css"
import axios from 'axios'
import Layout from './Layout'
import Moment from 'react-moment'

 const OrderedDetails = (props) => {
    const[orderedProduct, setOrderedProduct]=  useState({
        paid: {
            message: "false",
            createAt: ""
        },
        picked:  {
            message: "false",
            createAt: ""
        },
        shipped:  {
            message: "false",
            createAt: ""
        },
        delivered:  {
            message: "false",
            createAt: ""
        },
        cart_products: []
        
    })
    const { match: { params } } = props;

    useEffect(() =>{
        axios.get("/customers/dashboard")
            .then(res => {
                setOrderedProduct(res.data.orderedProducts.find(o =>  o._id === params.orderId))
            })
            .catch(e => console.log(e))
    }, [params.orderId])

    return (
        <Layout>
            <div className="orderedDetails">
                <div className="timeline">
                    <div className="heading h3 my-3 text-white">Order Timeline</div>

                    {
                        orderedProduct.delivered.message === "false" ? "" :
                        <div className="box left bg-success">
                            <div className="box-content">
                                <div className="h5">Delivered</div>
                                <div><Moment format="D MMMM, h:mm A" date={orderedProduct.delivered.createdAt}/></div>
                                <div className="">{orderedProduct.delivered.message ? orderedProduct.delivered.message : "Product is delivered"}. If any issues conatct 017141xxxxx</div>
                            </div>
                        </div>
                        
                    }
                    {   orderedProduct.shipped.message === "false" ? "" :
                        <div className="box left">
                            <div className="box-content">
                                <div className="h5">Shipped</div>
                                <div><Moment format="D MMMM, h:mm A" date={orderedProduct.shipped.createdAt}/></div>
                                <div className="">{orderedProduct.shipped.message ? orderedProduct.shipped.message : "Your product is being shipped soon"}</div>
                            </div>
                        </div> 
                    }
                    {
                        orderedProduct.picked.message === "false" ? "" :
                        <div className="box left">
                            <div className="box-content">
                                <div className="h5">Picked</div>
                                <div><Moment format="D MMMM, h:mm A" date={orderedProduct.picked.createdAt}/></div>
                                <div className="">{orderedProduct.picked.message ? orderedProduct.picked.message : "Your Product is picked by Admin"}</div>
                            </div>
                        </div> 
                    }
                    {
                        orderedProduct.paid.message === "false"  ? "" :
                        <div className="box left">
                            <div className="box-content">
                                <div className="h5">Processing</div>
                                <div className="">Your Order is Selected for Processing</div>
                            </div>
                        </div> 
                    }
                    {
                        orderedProduct.paid.message === "false"  ? "" :
                        <div className="box left">
                            <div className="box-content">
                                <div className="h5">Paid</div>
                                <div><Moment format="D MMMM, h:mm A" date={orderedProduct.paid.createdAt}/></div>
                                <div className="">Payment Confirmed. Thank you for your order</div>
                            </div>
                        </div> 
                    }
                    {
                        orderedProduct.paid.message === "false"  ? 
                        <div className="box left">
                            <div className="box-content">
                                <div className="h5">Pending</div>
                                <div className="">Purchansing Policy and Terms & Condition accepted. Penidng For Payment</div>
                            </div>
                        </div> : "" 
                        
                    }
            
        
                </div>
                <div className="details mt-4">
                    <div className="h3 my-1 text-white">Order Details</div>
                    <table className="table text-white">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {orderedProduct.cart_products.map((p, index) => (
                                <tr className="tableRow" key={index}>                                   
                                    <td><Link to={`/products/${p._id}`}><img style={{ width: 70, height: 50 }} className="img-thumbnail mr-3" src={`/images/${p.productImgs[0]}`} alt="" />{p.name}</Link></td>                                       
                                    <td>{p.price}</td>
                                    <td>
                                        <div className="mx-3">{p.quantity}</div>      
                                    </td>
                                    <td>{p.price * p.quantity}</td>                                 
                                </tr>                  
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="h3 text-right mt-3">SubTotal Amount: <strong className="">&#2547; {orderedProduct.subTotal}</strong></div>
                <div className="payment text-right">
                    {orderedProduct.paid.message === "false" ?
                        <div className="btn btn-danger my-2">Make Payment</div>
                        :<div className="btn btn-success my-2">Paid</div>
                    }
                </div>
            </div>
        </Layout>
    )
}
export default OrderedDetails