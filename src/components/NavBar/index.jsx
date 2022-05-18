import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Home</h1>
        </NavLink>
          <Bars/>
            <NavMenu>
              <NavLink to="/collectionCezanne" activeStyle>
                Cezanne Exhibit
              </NavLink>
              <NavLink to="/collectionDali" activeStyle>
                Dali Exhibit
              </NavLink>
              <NavLink to="/collectionPicasso" activeStyle>
                Picasso Exhibit
              </NavLink>
              <NavLink to="/browse" activeStyle>
                Browse
              </NavLink>
        </NavMenu>

      </Nav>
    </>
  )
}

export default Navbar