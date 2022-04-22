import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar';
  
const Navbar = () => {
  return (
    <>
      <Nav>
            <NavLink to='/'>
                <h1>logo</h1>
            </NavLink>
        <Bars />
        <NavMenu>
            
            <NavLink to= '/Listings' activeStyle>
                Listings
            </NavLink>
            <NavLink to= '/Post' activeStyle>
                Post
            </NavLink>
            <NavLink to= '/contact' activeStyle>
                Contact
            </NavLink>
            <NavBtnLink to='/Login' activeStyle>
                Log In / Register
            </NavBtnLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;