import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
} from './Navbar';
import { auth, fdb } from '../../firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => { 
  const Navigate = useNavigate();
  const {user} = useContext(AuthContext);
  
  const handleSignout = async() => {
    await updateDoc(doc(fdb,'users', auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
  };
  return(

    <Nav>
      <NavLink to='/'>
        <h1>logo</h1>
      </NavLink>
          {user ? (
            <>
          
          <Bars />
          <NavMenu>
            <NavLink to= '/Listings'>
                Listings
            </NavLink>
            <NavLink to= '/Post'>
                Post
            </NavLink>
            <NavLink to= '/contact'>
                Contact
            </NavLink>
            <NavLink to= '/profile'>
                Profile
            </NavLink>
            <NavBtnLink to='/Login' onClick={handleSignout}>
                Log Out
            </NavBtnLink>
          </NavMenu>
          </>
          ) : (
          <>  
              <NavMenu>
              <NavBtnLink to='/Login'>
                  Log In / Register
              </NavBtnLink>
          </NavMenu>

          </>
          )}
          
        </Nav>
  )
};


export default Navbar;