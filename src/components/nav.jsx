import React from "react";
import { Link } from 'react-router-dom'

const Nav = () =>{
    return(
        <div>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to="/collectionCezanne">
                <div> Cezanne Exhibit </div>
            </Link>
            <Link to="/collectionDali">
                <div>Dali Exhibit </div>
            </Link>
            <Link to="/collectionPicasso">
                <div>Picasso Exhibit </div>
            </Link>
            <Link to="/browse">
                <div>Browse</div>
            </Link>
        </div>
    )
}

export default Nav