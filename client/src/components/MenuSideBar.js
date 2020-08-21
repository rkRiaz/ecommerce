import React, {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './MenuSideBar.css'
import {connect} from 'react-redux'
import {menuSideBar__off} from '../store/actions/sideBarAction'
import { FaSearch, FaUser, FaHeart, FaTimes} from 'react-icons/fa'


function MenuSideBar(props) {
    const[isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(props.sideBar.menuSideBar)
    }, [props.sideBar.menuSideBar])
  
    let closeSideBar = e => {
        e.preventDefault()
        props.menuSideBar__off()
    }

    return (
        <div className="menuSideBar">
            <div className={isOpen ? "menuSideBar__content" : "menuSideBar__content menuSideBar__off"}>
                <div className="d-flex">
                    <div className="menuSideBar__content__menu">Menu</div>
                    <div className="menuSideBar__content__category">Category</div>
                </div>

                <div className="menuSideBar__content__menu__items">
                    <div className="">Products</div>
                    <div className="">Sale</div>
                    <div className="">Portfolio</div>
                    <div className="">LookBook</div>
                    <div className="">Blog</div>
                    <div onClick={closeSideBar} className="">
                        <Link to="#"><FaHeart/> WishList</Link>
                    </div>
                    <div className="">
                        <Link to="#" className="" ><FaSearch/> Search</Link>
                    </div>
                    <div onClick={closeSideBar} className="">
                        <Link to="/customer/signup-login"><FaUser/> Login/Register</Link>
                    </div>
                    <div onClick={closeSideBar} className=""><FaTimes/> Close</div>
                </div>



                <div className="menuSideBar__content__catagories__items">
                    <div className="">Products</div>
                    <div className="">Sale</div>
                    <div className="">Portfolio</div>
                    <div className="">LookBook</div>
                    <div className="">Blog</div>
    
                </div>


            </div>
            <div onClick={closeSideBar} className={isOpen ? "menuSideBar__closeBtn" :  "menuSideBar__closeBtn menuSideBar__off"}>

            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    sideBar: state.sideBars
})
export default connect(mapStateToProps, {menuSideBar__off})(withRouter(MenuSideBar))
