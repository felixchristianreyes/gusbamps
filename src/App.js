import './App.css';
import Navbar from "./pages/Home/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from './pages/Home/Hero/Hero';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import Services from './pages/Home/Services/Services';
import Newsletter from './pages/Home/Newsletter/Newsletter';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Newsletter />
    </div>
  );
}

export default App;
