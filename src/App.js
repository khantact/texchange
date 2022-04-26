import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages"
import Listings from "./pages/Listings"
import Post from "./pages/Post"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AuthProvider from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  
  return(
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home/>}/>
          <Route exact path = '/Listings' element = {<PrivateRoute/>}>
            <Route path='/Listings' exact element = {<Listings/>}/>
          </Route>
          <Route exact path = '/Post' element = {<PrivateRoute/>}>
            <Route path='/Post' exact element = {<Post/>}/>
          </Route>
          <Route exact path= '/Contact' element = {<PrivateRoute/>}>
            <Route path='/Contact' exact element = {<Contact/>}/>
          </Route>
          <Route exact path= '/profile' element = {<PrivateRoute/>}>
            <Route path='/Profile' exact element = {<Profile/>}/>
          </Route>
          <Route path='/Login' exact element = {<Login/>}/>
          <Route path='/Register' exact element = {<Register/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
  
}

export default App;
