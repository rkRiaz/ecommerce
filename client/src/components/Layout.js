import React from 'react'
import MegaMenu from './MegaMenu'
import Footer from './Footer'


 const Layout = ({children}) => {
    return (
        <div>
            <MegaMenu/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout