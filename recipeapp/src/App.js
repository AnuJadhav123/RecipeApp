import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer";
import { navigate } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import HeroSection from "./Component/HeroSection";
import ViewRecipes from "./Component/ViewRecipes";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path=" /Recipes" element={<Recipes/>} />
          <Route path=" /ViewRecipes" element={<ViewRecipes/>} />

          
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App;
