import Navbar from "./components/navbar";
import PageNavLI from "./components/navbar/PageNavLI";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages"
import Listings from "./pages/Listings"
import Post from "./pages/Post"
import Contact from "./pages/Contact"
import Login from "./pages/Login"


function App() {
  
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='/Listings' exact element = {<Listings/>}/>
        <Route path='/Post' exact element = {<Post/>}/>
        <Route path='/Contact' exact element = {<Contact/>}/>
        <Route path='/Login' exact element = {<Login/>}/>
      </Routes>
    </Router>
  )
  
}

export default App;
