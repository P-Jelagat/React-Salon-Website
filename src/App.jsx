import Header from "./components/header/Header"
import Footer from "./components/footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";



function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

          <Header />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
             { /*
             
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/services" element={<Services />} />
             <Route path="/contact" element={<Contact />} /> */}

          </Routes>

          <Footer />

      </div>

    </BrowserRouter>  
  );
}

export default App;
