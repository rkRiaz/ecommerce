import React, { Component } from 'react'
import Products from '../components/Products'
import MegaMenu from '../components/MegaMenu'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import axios from 'axios'


class Home extends Component {
    state = {
        products: [],
        trendingProducts: [],
        bestSellerProducts: []
    }

    render() {

       axios.get('/products')
       .then(res => {
            let products = res.data
            let trendingProducts = res.data.filter(p => p.tag === "Trending")
            let bestSellerProducts = res.data.filter(p => p.tag === "Best Seller")
            this.setState({
                products,
                trendingProducts,
                bestSellerProducts  
            })
        })
        .catch(e => {
            console.log(e)
        })

        return (
            <div>


            
            <MegaMenu />
            <Banner />
            <Products products = {this.state.trendingProducts} heading = "Trending"/>
            <Products products = {this.state.bestSellerProducts} heading = "Best Seller"/>
            <Footer/>
            

                         
            
              
            
        


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
