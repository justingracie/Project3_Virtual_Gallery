import React from "react";
import { Link } from 'react-router-dom'

const Nav = () =>{
    return(
        <div>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to="/collection">
                <div> Cezanne Collection </div>
            </Link>
            <Link to="/browse">
                <div>Browse</div>
            </Link>
        </div>
    )
}

export default Nav