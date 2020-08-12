import React from 'react'
import MegaMenu from './MegaMenu'
import Footer from './Footer'
import CartSideBar from './CartSideBar'
import LoginSideBar from './LoginSideBar'




 const Layout = ({children}) => {
    return (
        <div>
            <MegaMenu/>
            <CartSideBar/>
            <LoginSideBar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout