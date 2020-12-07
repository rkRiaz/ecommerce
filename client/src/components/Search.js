import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Search() {
    const [searchProducts, setSearchProducts] = useState([])
    const [term, setTerm] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    console.log(term)


    let toggle = e => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    let submit = e => {
        e.preventDefault()
        axios.get(`/search/${term}`)
            .then(res => {
                console.log(res)
                setSearchProducts(res.data)
            })
    }

    (function (window, document) {
        var loader = function () {
            var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
            script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
            tag.parentNode.insertBefore(script, tag);
        };

        window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
    })(window, document);

    return (
        <div>
            <form onChange={submit} className="search_box">
                <input onChange={(e) => { setTerm(e.target.value) }} className="search_text" type="search" placeholder="Search"></input>
                <div className="search_icon"><SearchIcon /></div>
            </form>
            <div className={term || isOpen ? "searchList" : "d-none"}>
                <ul className="list-group">
                    {
                        searchProducts.length === 0 ? <div className="d-flex justify-content-center align-item-center">not matching</div> :
                            searchProducts.map(p => (
                                <li onClick={toggle} key={p._id} className="list-group-item">
                                    <Link className="d-flex" to={`/products/${p._id}`}>
                                        <div className="mr-1 img-thumbnail" style={{ width: "50px", height: "50px" }}><img style={{ width: "100%" }} src={`/images/${p.productImgs[0]}`} alt="" /></div>
                                        <div className="">
                                            <div className="name">{p.name}</div>
                                            <div className="price">{p.price}</div>
                                        </div>
                                    </Link>
                                </li>
                            ))


                    }
                </ul>
            </div>
        </div>
    )
}

export default Search

