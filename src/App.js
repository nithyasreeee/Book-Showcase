import logo from './assets/img/logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import BookSlider from "./components/BookSlider";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <div className="App">
     
      <NavBar />
      <HeroSection />
      < BookSlider/>
      
    </div>
  );
}

export default App;
