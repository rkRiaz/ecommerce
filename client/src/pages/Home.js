import React, { Component } from 'react'
// import ProductDetailsPage from '../pages/ProductDetailsPage'
import TrendingComponent from '../components/TrendingComponent'
import MegaMenu from '../components/MegaMenu'
import Banner from '../components/Banner'

import './pages.css'
import axios from 'axios'


class Home extends Component {
    state = {
        products: []
    }

    render() {

       axios.get('/products')
       .then(res => {
            this.setState({
                products: res.data
            })
        })
        .catch(e => {
            console.log(e)
        })

        return (
            <div>


            
            <MegaMenu />
            <Banner />
            <TrendingComponent products = {this.state.products}/>
                         
            
              
            
        


                {/* MenuComponent
                    BannerComponent = SubBanner
                    TrendingProductsComponent
                    OfferComponent
                    BestsellerProductsComponent
                    BlogComponent
                    SocialComponent
                    Footer */}

            </div>
        )
    }
}


export default Home
