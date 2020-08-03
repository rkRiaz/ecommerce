import React, { Component } from 'react'
import Products from '../components/Products'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
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


            
          
            <Layout>
                <Banner />
                <Products products = {this.state.trendingProducts} heading = "Trending" title="Top view in this week"/>
                <Products products = {this.state.bestSellerProducts} heading = "Best Seller" title="Best selling in this week"/>
            </Layout>
            
            

                         
            
              
            
        


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
