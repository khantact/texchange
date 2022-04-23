import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages"
import Listings from "./pages/Listings"
import Post from "./pages/Post"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { signUp } from "./firebase"

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home/>}/>
          <Route path='/Listings' exact element = {<Listings/>}/>
          <Route path='/Post' exact element = {<Post/>}/>
          <Route path='/Contact' exact element = {<Contact/>}/>
          <Route path='/Login' exact element = {<Login/>}/>
          <Route path='/Register' exact element = {<Register/>}/>
        </Routes>
      </Router>
      
  </div>
  );
}

export default App;
