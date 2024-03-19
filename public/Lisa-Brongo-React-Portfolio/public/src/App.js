import logo from './logo.svg';
import './App.css';
import About from './assets/components/About';
import Portfolio from './assets/components/Portfolio';
import Resume from './assets/components/Resume';
import Contact from './assets/components/Contact';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header />

    <Routes>
     <Route path="/" element={<About/> }/>
     <Route path="/portfolio" element={<Portfolio/>}/>
     <Route path="/contact" element={<Contact />}/>
     <Route path="/resume" element={<Resume />}/>
    </Routes>

     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
