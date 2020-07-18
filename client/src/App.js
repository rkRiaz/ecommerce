import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import AddProductPage from './pages/admin pages/AddProductPage'
import EditProduct from './pages/admin pages/EditProduct'

import SignupLogin from './pages/SignupLogin'
import Cart from './pages/Cart'
import AdminLoginPage from './pages/admin pages/AdminLoginPage'
import AdminDashboard from './pages/admin pages/AdminDashboard'







 class App extends Component {
  render() {
  
    return (
      <>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/products/:productId" exact component={ProductDetailsPage}/>
           
              <Route path="/customers/signup-login" exact component={SignupLogin}/>
              <Route path="/customers/cart" exact component={Cart}/>
              <Route path="/admin/login" exact component={AdminLoginPage}/>

              <Route exact path="/admin/dashboard" render={() =>(
                this.props.admin.adminLoggedIn ? ( <Route  component={AdminDashboard} /> )
                : (<Route component={AdminLoginPage} />)
              )}/>

              <Route exact path="/admin/add-product" render={() =>(
                this.props.admin.adminLoggedIn ? ( <Route  component={AddProductPage} /> )
                : (<Route component={Home} />)
              )}/>
              <Route exact path="/admin/edit-product/:productId" render={() =>(
                this.props.admin.adminLoggedIn ? ( <Route  component={EditProduct} /> )
                : (<Route component={Home} />)
              )}/>


            </Switch>
        </BrowserRouter>
      </>
    )
  }
}

const mapStateToProps = state => ({
  customer: state.customer,
  admin: state.admin
})

export default connect(mapStateToProps, {})(App)
