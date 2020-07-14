import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import AddProductPage from './pages/admin pages/AddProductPage'
import SignupLogin from './pages/SignupLogin'
import Cart from './pages/Cart'




 class App extends Component {
  render() {
  
    return (
      <>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/products/:productId" exact component={ProductDetailsPage}/>
              <Route path="/add-product" exact component={AddProductPage}/>
              <Route path="/customers/signup-login" exact component={SignupLogin}/>
              <Route path="/customers/cart" exact component={Cart}/>


              {/* <Route exact path="/add-product" render={() =>(
                  this.props.customer.customerLoggedIn ? ( <Route  component={AddProductPage} /> )
                : (<Route component={Home} />)
          )} /> */}
            </Switch>
        </BrowserRouter>
      </>
    )
  }
}

const mapStateToProps = state => ({
  customer: state.customer
})

export default connect(mapStateToProps, {})(App)
