import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './pages/Home'
import ProductExplorer from './pages/ProductExplorer'
import AddProduct from './pages/admin pages/AddProduct'
import EditProduct from './pages/admin pages/EditProduct'

import SignupLogin from './pages/SignupLogin'
import Cart from './pages/Cart'
import AdminLogin from './pages/admin pages/AdminLogin'
import AdminDashboard from './pages/admin pages/AdminDashboard'
import { adminLogin } from './store/actions/adminAction'







 class App extends Component {
  render() {
  
    return (
      <>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/products/:productId" exact component={ProductExplorer}/>
           
              <Route path="/customer/signup-login" exact component={SignupLogin}/>
              <Route path="/customer/cart" exact component={Cart}/>
              <Route path="/customer/dashboard" exact component={Cart}/>



              <Route exact path="/admin/login" render={() =>(
                this.props.admin.adminLoggedIn ? (<Route component={AdminDashboard} />)
                : ( <Route  component={AdminLogin} />)
              )}/>

              <Route exact path="/admin/dashboard" render={() =>(
                this.props.admin.adminLoggedIn ? ( <Route  component={AdminDashboard} /> )
                : (<Route component={AdminLogin} />)
              )}/>

              <Route exact path="/admin/add-product" render={() =>(
                this.props.admin.adminLoggedIn ? ( <Route  component={AddProduct} /> )
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
