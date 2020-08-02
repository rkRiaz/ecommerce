import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

// import * as Types from './store/actions/types'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App';

import jwtDecode from 'jwt-decode'
import * as Types from './store/actions/types'
import setAuthToken from './utils/setAuthToken'
// import { createBrowserHistory } from 'history'
// export const browserHistory = createBrowserHistory()


let token = localStorage.getItem('customer_auth_token')
if(token) {
  let decodeToken = jwtDecode(token)
  setAuthToken(token)
  store.dispatch({
      type: Types.SET_CUSTOMER,
      payload: {
          customer: decodeToken
      },
  })
}

// let busket_products = JSON.parse(localStorage.getItem('busket_products'))
// if(busket_products) {
//   store.dispatch({
//       type: Types.ADD_TO_BUSKET,
//       payload: {
//           products: busket_products
//       },
//   })
// }

let admin_auth = localStorage.getItem('admin_auth')
  if(admin_auth) {
    store.dispatch({
      type: Types.ADMIN_AUTH,
      payload: {
          admin: admin_auth
      },
     
  })
  }



ReactDOM.render(
  // <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>,
  //  </React.StrictMode>, 
document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
