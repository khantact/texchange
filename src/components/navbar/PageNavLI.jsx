import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar';

const PageNavLI = () => {
  return (
    <>  
      <Nav>
            <NavLink to='/'>
                <h1>logo</h1>
            </NavLink>
        <Bars />
        <NavMenu>
            <NavBtnLink to='/Login' activeStyle>
                Log In / Register
            </NavBtnLink>
        </NavMenu>
        
      </Nav>
    </>
  );
}

export default PageNavLI