import React from 'react'
import MegaMenu from './MegaMenu'
import Footer from './Footer'
import CartSideBar from './CartSideBar'
import LoginSideBar from './LoginSideBar'
import MenuSideBar from './MenuSideBar'


 const Layout = ({children}) => {
    return (
        <div>
            <MegaMenu/>
            <MenuSideBar/>
            <CartSideBar/>
            <LoginSideBar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout