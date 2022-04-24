import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../firebase';

const Navbar = () => { 
  const isAuthenticated = () =>{
    return localStorage.getItem('user') ? true : false;
  }
  const loginStatus = isAuthenticated();
  
  function handleClick(){
    signOut()
  }

  if (loginStatus){
    return(
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
              <NavBtnLink to='/' activeStyle onClick={handleClick()}>
                  Log Out
              </NavBtnLink>
          </NavMenu>
          
        </Nav>
      </>
  )} else{
    return(
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
    )
  }

};


export default Navbar;