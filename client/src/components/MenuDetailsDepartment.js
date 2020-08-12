import React from 'react'
import {Link} from 'react-router-dom'
import MenuDetailsLayout from './MenuDetailsLayout'


const MenuDetailsDepartment = () => {
    return (
        <MenuDetailsLayout>
            <div className="d-flex ">
                <div className="d-flex flex-column p-4" style={{lineHeight: "30px"}}>
                    <h6>Tag Wise Products</h6><hr/>
                    <Link to="/products/tag/new-arrival">New Arrival</Link>
                    <Link to="/products/tag/best-seller">Best Seller</Link>
                    <Link to="/products/tag/trending">Trendng</Link>      
                    <Link to="/products/tag/featured-products">Featured Products</Link>
                </div>
                <div className="d-flex flex-column p-4" style={{lineHeight: "30px"}}>
                    <h6>Department Wise Products</h6><hr/>
                    <Link to="/products/department/electronics">electronics</Link>
                    <Link to="/products/department/fashion-and-fashion-accessories">fashion-and-fashion-accessories</Link>
                    <Link to="/products/department/grocery-household-food-pets">grocery-household-food-pets</Link>       
                    <Link to="/products/department/baby">baby</Link>
                    <Link to="/products/department/vehicles-tires-industrial">vehicles-tires-industrial</Link>
                    <Link to="/products/department/property-construction-improvements">property-construction-improvements</Link>
                    <Link to="/products/department/home-furniture-appliances">home-furniture-appliances"</Link>
                    <Link to="/products/department/pharmacy-health-beauty">pharmacy-health-beauty</Link>
                    <Link to="/products/department/movies-music-books-stationaries">movies-music-books-stationaries</Link>     
                    <Link to="/products/department/sports-fitness-outdoor">sports-fitness-outdoor</Link>
                    <Link to="/products/department/service">service</Link>
                    <Link to="/products/department/corporate">corporate</Link>
                    <Link to="/products/department/art-craft-personalizedshops">art-craft-personalizedshops</Link>
                    <Link to="/products/department/agricultural">agricultural</Link>
                    <Link to="/products/department/other">Others</Link>
                </div>       
                <div className="d-flex flex-column p-4" style={{lineHeight: "30px"}}>
                    <h6>Department Wise Products</h6><hr/>
                    <Link to="/products/tag/new-arrival">Grocery</Link>
                    <Link to="/products/tag/best-seller">Best Seller</Link>
                    <Link to="/products/tag/trending">Trendng</Link>       
                    <Link to="/products/tag/new-arrival">New Arrival</Link>
                    <Link to="/products/tag/best-seller">Best Seller</Link>
                    <Link to="/products/tag/trending">sports-fitness-outdoor</Link>
                    <Link to="/products/tag/new-arrival">Grocery</Link>
                    <Link to="/products/tag/best-seller">Best Seller</Link>
                    <Link to="/products/tag/trending">movies-music-books-stationaries</Link>       
                    <Link to="/products/tag/new-arrival">New Arrival</Link>
                    <Link to="/products/tag/best-seller">Best Seller</Link>
                    <Link to="/products/tag/trending">Trendng</Link>
                    <Link to="/products/tag/new-arrival">Grocery</Link>
                    <Link to="/products/tag/best-seller">Best Seller</Link>
                </div>                
            </div>

        </MenuDetailsLayout>
    )
}

export default MenuDetailsDepartment