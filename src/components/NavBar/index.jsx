import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='../icons8-mona-lisa-48.png' alt='MonaLisa'></img>
            </NavLink>
              <Bars/>
                <NavMenu>
                  <NavLink to="/collectionCezanne">
                    Cezanne Exhibit
                  </NavLink>
                  <NavLink to="/collectionDali">
                    Dali Exhibit
                  </NavLink>
                  <NavLink to="/collectionPicasso">
                    Picasso Exhibit
                  </NavLink>
                  <NavLink to="/browse">
                    Browse
                  </NavLink>
            </NavMenu>

      </Nav>
    </>
  )
}

export default Navbar