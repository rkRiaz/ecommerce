import React from 'react'
import './MenuDetailsLayout.css'



const MenuDetailsLayout = (props) => {
  
    return (
        <div className= "menuProducts"> 
            {props.children}
        </div>
    )
}


export default MenuDetailsLayout
