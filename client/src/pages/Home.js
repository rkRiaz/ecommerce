import React, { Component } from 'react'
import Products from '../components/Products'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import axios from 'axios'

class Home extends Component {
    state = {
        // Tag Wise Products
        products: null,
        trendingProducts: null,
        bestSellerProducts: null,
        featuredProducts: null,
        newArrival: null,
        // Department Wise Products
        electronics: null,
        fashionAndFashionAccessories: null,
        groceryHouseholdFoodPets: null,
        baby: null,
        vehiclesTiresIndustria: null,
        propertyConstructionImprovements: null,
        homeFurnitureAppliances: null,
        pharmacyHealthBeauty: null,
        moviesMusicBooksStationaries: null,
        sportsFitnessOutdoor: null,
        service: null,
        corporate: null,
        artCraftPersonalizedshops: null,
        agricultural: null,
        other: null,

        // Type Wise Products
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_APIENDPOINT}/products`)
            .then(res => {
                //tag wise products
                let products = res.data
                let trendingProducts = res.data.filter(p => p.tag === "trending")
                let bestSellerProducts = res.data.filter(p => p.tag === "best-seller")
                let featuredProducts = res.data.filter(p => p.tag === "featured-products")
                let newArrival = res.data.filter(p => p.tag === "new-arrival")
                // department wise products
                let electronics = res.data.filter(p => p.department === "electronics")
                let fashionAndFashionAccessories = res.data.filter(p => p.department === "fashion-and-fashion-accessories")
                let groceryHouseholdFoodPets = res.data.filter(p => p.department === "grocery-household-food-pets")
                let baby = res.data.filter(p => p.department === "baby")
                let vehiclesTiresIndustria = res.data.filter(p => p.department === "vehicles-tires-industrial")
                let propertyConstructionImprovements = res.data.filter(p => p.department === "property-construction-improvements")
                let homeFurnitureAppliances = res.data.filter(p => p.department === "home-furniture-appliances")
                let pharmacyHealthBeauty = res.data.filter(p => p.department === "pharmacy-health-beauty")
                let moviesMusicBooksStationaries = res.data.filter(p => p.department === "movies-music-books-stationaries")
                let sportsFitnessOutdoor = res.data.filter(p => p.department === "sports-fitness-outdoor")
                let service = res.data.filter(p => p.department === "service")
                let corporate = res.data.filter(p => p.department === "corporate")
                let artCraftPersonalizedshops = res.data.filter(p => p.department === "art-craft-personalizedshops")
                let agricultural = res.data.filter(p => p.department === "agricultural")
                let other = res.data.filter(p => p.department === "other")

                this.setState({
                    products,
                    trendingProducts,
                    bestSellerProducts,
                    featuredProducts,
                    newArrival,
                    electronics,
                    fashionAndFashionAccessories,
                    groceryHouseholdFoodPets,
                    baby,
                    vehiclesTiresIndustria,
                    propertyConstructionImprovements,
                    homeFurnitureAppliances,
                    pharmacyHealthBeauty,
                    moviesMusicBooksStationaries,
                    sportsFitnessOutdoor,
                    service,
                    corporate,
                    artCraftPersonalizedshops,
                    agricultural,
                    other
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <div>
                <Layout>
                    <Banner />
                    <Products products={this.state.newArrival?.splice(0, 12)} type="tag" link="new-arrival" heading="New Arrival" title="" />
                    <Products products={this.state.trendingProducts?.splice(0, 12)} type="tag" link="trending" heading="Trending" title="Top view in this week" />
                    <Products products={this.state.bestSellerProducts?.splice(0, 12)} type="tag" link="best-seller" heading="Best Seller" title="Best selling in this week" />
                    <Products products={this.state.electronics?.splice(0, 12)} type="department" link="electronics" heading="Electronics" title="" />
                    <Products products={this.state.fashionAndFashionAccessories?.splice(0, 12)} type="department" link="fashion-and-fashion-accessories" heading="Fashion And Fashion Accessories" title="" />
                    <Products products={this.state.groceryHouseholdFoodPets?.splice(0, 12)} type="department" link="grocery-household-food-pets" heading="Grocery Household Food & Pets" title="" />
                    <Products products={this.state.baby?.splice(0, 12)} type="department" link="baby" heading="baby" title="" />
                    <Products products={this.state.vehiclesTiresIndustria?.splice(0, 12)} type="department" link="vehicles-tires-industrial" heading="vehicles-tires-industrial" title="" />
                    <Products products={this.state.propertyConstructionImprovements?.splice(0, 12)} type="department" link="property-construction-improvements" heading="property-construction-improvements" title="" />
                    <Products products={this.state.homeFurnitureAppliances?.splice(0, 12)} type="department" link="home-furniture-appliances" heading="home-furniture-appliances" title="" />
                    <Products products={this.state.pharmacyHealthBeauty?.splice(0, 12)} type="department" link="pharmacy-health-beauty" heading="pharmacy-health-beauty" title="" />
                    <Products products={this.state.moviesMusicBooksStationaries?.splice(0, 12)} type="department" link="movies-music-books-stationaries" heading="movies-music-books-stationaries" title="" />
                    <Products products={this.state.sportsFitnessOutdoor?.splice(0, 12)} type="department" link="sports-fitness-outdoor" heading="sports-fitness-outdoor" title="" />
                    <Products products={this.state.service?.splice(0, 12)} type="department" link="service" heading="service" title="" />
                    <Products products={this.state.corporate?.splice(0, 12)} type="department" link="corporate" heading="corporate" title="" />
                    <Products products={this.state.artCraftPersonalizedshops?.splice(0, 12)} type="department" link="art-craft-personalizedshops" heading="art-craft-personalizedshops" title="" />
                    <Products products={this.state.agricultural?.splice(0, 12)} type="department" link="agricultural" heading="agricultural" title="" />
                    <Products products={this.state.other?.splice(0, 12)} type="department" link="other" heading="other" title="" />
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
