import React, {useState, useEffect} from 'react'
import {Link, useHistory, Redirect } from 'react-router-dom'
import "./OrderedDetails.css"
import axios from 'axios'
import Layout from './Layout'
import Moment from 'react-moment'



 const OrderedDetails = (props) => {

  
    const history = useHistory()

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
        axios.get(`${process.env.REACT_APP_APIENDPOINT}/customers/dashboard`)
            .then(res => {
                setOrderedProduct(res.data.orderedProducts.find(o =>  o._id === params.orderId))
            })
            .catch(e => console.log(e))
    }, [params.orderId])
 
    const paymentHandler = e => {
        axios.get(`${process.env.REACT_APP_APIENDPOINT}/ssl-commerce`)
        .then(res => {
            console.log(res )
            // return <Redirect to = {res.data} />
            // history.push(res.data)
            window.location.href = res.data.gatewayURL
           
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <Layout>
            <div className="orderDetails">
               <div className="orderDetails__content">
                <div className="timeline">
                        {/* <div className="heading h3 my-3 text-white">Order Timeline</div> */}
                    <div className="timeline__aglance">
                        <ul className="timeline__aglance__bar">
                            <li className={orderedProduct.paid.message === "false" ? "li" : "li complete"}>
                                <div className="status">
                                <h4> Paid </h4>
                                </div>
                            </li>
                            <li className={orderedProduct.paid.message === "false" ? "li" : "li complete"}>
                                <div className="status ">
                                <h4> Processing </h4>
                                </div>
                            </li>
                            <li className={orderedProduct.picked.message === "false" ? "li" : "li complete"}>
                                <div className="status">
                                <h4> Picked </h4>
                                </div>
                            </li>
                            <li className={orderedProduct.shipped.message === "false" ? "li" : "li complete"}>
                                <div className="status">
                                <h4> Shipped </h4>
                                </div>
                            </li>
                            <li className={orderedProduct.delivered.message === "false" ? "li" : "li complete"}>
                                <div className="status">
                                <h4> Delivered </h4>
                                </div>
                            </li>
                        </ul>   
                    </div>

                    <div className="timeline__details">
                        <h4 className="text-dark text-right">Order Timeline Details</h4>
                        {
                            orderedProduct.delivered.message === "false" ? "" :
                            <div className="box">
                                <div className="box-content">
                                    <div className="title">Delivered</div>
                                    <div><Moment format="D MMMM, h:mm A" date={orderedProduct.delivered.createdAt}/></div>
                                   
                                    <div className="message">{orderedProduct.delivered.message ? orderedProduct.delivered.message : "Product is delivered"}. If any issues conatct 017141xxxxx</div>
                                </div>
                            </div>
                            
                        }
                        {   orderedProduct.shipped.message === "false" ? "" :
                            <div className="box">
                                
                                <div className="box-content">
                                    <div className="title">Shipped</div>
                                    <div><Moment format="D MMMM, h:mm A" date={orderedProduct.shipped.createdAt}/></div>
                                    <div className="message">{orderedProduct.shipped.message ? orderedProduct.shipped.message : "Your product is being shipped soon"}</div>
                                </div>
                            </div> 
                        }
                        {
                            orderedProduct.picked.message === "false" ? "" :
                            <div className="box">
                                   
                                <div className="box-content">
                                    <div className="title">Picked</div>
                                    <div><Moment format="D MMMM, h:mm A" date={orderedProduct.picked.createdAt}/></div>

                                    <div className="message">{orderedProduct.picked.message ? orderedProduct.picked.message : "Your Product is picked by Admin"}</div>
                                </div>
                            </div> 
                        }
                        {
                            orderedProduct.paid.message === "false"  ? "" :
                            <div className="box">
                                <div className="box-content">
                                    <div className="title">Processing</div>
                                    <div className="message">Your Order is Selected for Processing</div>
                                </div>
                            </div> 
                        }
                        {
                            orderedProduct.paid.message === "false"  ? "" :
                            <div className="box">
                                <div className="box-content">
                                    <div className="title">Paid</div>
                                    <div><Moment format="D MMMM, h:mm A" date={orderedProduct.paid.createdAt}/></div>
            
                                    <div className="message">Payment Confirmed. Thank you for your order</div>
                                </div>
                            </div> 
                        }
                        {
                            orderedProduct.paid.message === "false"  ? 
                            <div className="box">
                                <div className="box-content">
                                    <div className="title">Pending</div>
                                    <div className="message">Purchansing Policy and Terms & Condition accepted. Penidng For Payment</div>
                                </div>
                            </div> : "" 
                            
                        }
                    </div>
                
            
                    </div>
                    <div className="details mt-3">
                        <div className="h3 my-1 ">Order Details</div>
                        <table className="table ">
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
                                        <td><Link to={`/products/${p._id}`}><img style={{ width: 70, height: 50 }} className="img-thumbnail mr-3" src={`https://res.cloudinary.com/riazcloud/image/upload/v1614437427/${p.productImgs[0]}`} alt="" />{p.name}</Link></td>                                       
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
        
                            <button onClick={paymentHandler} className="btn btn-danger my-2"
                            >Make Payment</button>
                            :<div className="btn btn-success my-2">Paid</div>
                        }
                    </div>
               </div>
            </div>
        </Layout>
    )
}
export default OrderedDetails