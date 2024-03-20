import './App.css';
import Feature from './Componet/Feature/Feature';
import Home from './Componet/Home/Home';
import Navbar from './Componet/Navbar/navbar';
import About from './Componet/About/about';
import Services from './Componet/Services/services';
import Gallery from './Componet/Gallery/Gallery';
import Testimonials from './Componet/Testimonials/Testimonials';
import Team from './Componet/Team/Team';
import Contact from './Componet/Contact/Contact';
import Footer from './Componet/Footer/Footer';
function App() {
  return (
    <div className="App">
       <Navbar />
       <Home />
       <Feature />
       <About />
       <Services />
       <Gallery />
       <Testimonials />
       <Team />
       <Contact />
       <Footer />
    </div>
    
  );
  
}


export default App;
