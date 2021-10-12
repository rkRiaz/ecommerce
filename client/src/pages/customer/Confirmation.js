import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import success_shop from '../../imgs/success_order.svg'


const Confirmation = () => {
  const history = useHistory()


const changeRoute = type => e => {
  e.preventDefault()

  if(type === "home") {
      history.push('/')
  }
    if(type === "dashboard") {
      history.push('/customer/dashboard')
  }
}
  return (
    <>
 
      
      <div className="text-center mt-4">
          <div className="text-center p-3">
              <img width="50%" height="50%" src={success_shop} alt=""/>
              <div style={{cursor: 'pointer'}} onClick={changeRoute('dashboard')} className="text-success fs-3">
                  Hurray! Your order successfully placed 
                  <br/> 
                  <span className="text-warning">Track your order</span>
              </div>
          </div>
          <div style={{cursor: 'pointer'}} onClick={changeRoute('home')} className="text-danger fs-5">Go back to shop</div>
      </div>
    </>
  );
};
export default Confirmation
