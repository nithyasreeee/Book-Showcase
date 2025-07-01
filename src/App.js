import logo from './assets/img/logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ImageGridSection from './components/ImageGridSection';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
     
      <NavBar />
      <HeroSection />
      < ImageGridSection />
    </div>
  );
}

export default App;
