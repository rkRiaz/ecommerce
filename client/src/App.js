import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './pages/Home'
import ProductExplorer from './pages/ProductExplorer'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import Customers from './pages/admin/Customers'
import AllOrders from './pages/admin/AllOrders'


import SignupLogin from './pages/SignupLogin'
import Cart from './pages/Cart'


import CustomerDashboard from './pages/customer/CustomerDashboard'
import Ordered from './pages/customer/Ordered'
import OrderedDetails from './pages/customer/OrderedDetails'
import UpdateCustomer from './pages/customer/UpdateCustomer'
import ChangePassword from './pages/customer/ChangePassword'


import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import TermsAndCondition from './pages/TermsAndCondition'

import ProductsDepartment from './pages/ProductsDepartment'
import ProductsTag from './pages/ProductsTag'
import ProductsType from './pages/ProductsType'

import ErrorPage from './ErrorPage'
import ScrollToTop from './utils/ScrollToTop';

import Confirmation from './pages/customer/Confirmation'



 class App extends Component {
  render() {
    return (
        <BrowserRouter basename='/'>
        <ScrollToTop />
            <Switch>
              {/* remove exact from path="/" for build purpose */}
              <Route exact path="/" component={Home}/>

              <Route exact path="/products/:productId" component={ProductExplorer}/>
              <Route exact path="/products/department/:department" component={ProductsDepartment}/>
              <Route exact path="/products/tag/:tag" component={ProductsTag}/>
              <Route exact path="/products/type/:type" component={ProductsType}/>

              <Route exact path="/customer/signup-login" component={SignupLogin} />
              <Route exact path="/customer/cart" component={Cart}/>

              <Route exact path="/terms-and-condition" component={TermsAndCondition}/>

              <Route exact path="/admin/login"  component={AdminLogin} />

        
              <Route exact path="/customer/dashboard" component={CustomerDashboard}/>
              <Route exact path="/customer/ordered" component={Ordered} />
              <Route exact path="/customer/ordered/:orderId" component={OrderedDetails} />
              <Route exact path="/customer/update" component={UpdateCustomer} />
              <Route exact path="/customer/change-password" component={ChangePassword} />
              <Route exact path="/customer/confirmation" component={Confirmation} /> 

        

              
              <Route exact path="/admin/dashboard"  component={AdminDashboard} />
              <Route exact path="/admin/customers"  component={Customers} /> 
              <Route exact path="/admin/all-orders"  component={AllOrders} /> 
              <Route exact path="/admin/add-product" component={AddProduct} /> 
              <Route exact path="/admin/edit-product/:productId" component={EditProduct} /> 


          
              

              <Route component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
      
    )
    }
  }


const mapStateToProps = state => ({
  customer: state.customer,
  admin: state.admin
})

export default connect(mapStateToProps, {})(App)
