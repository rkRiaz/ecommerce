import React, {useEffect} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'

function Search() {
    useEffect(() => {
        axios.get('/search')
    }, [])
    let submit = e => {
        e.preventDefault()
        console.log("riaz")
    }
    return (
        <div>
            <form onSubmit={submit}className="search_box">
                <input className="search_text" name="term" type="search" placeholder="Search"></input>
                <a onClick={submit} type="submit" className="search_icon" href="#">

                    <SearchIcon/>
                
                </a>
            </form>
        </div>
    )
}

export default Search
