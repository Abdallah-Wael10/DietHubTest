import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Pages

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "react-international-phone/style.css";
import LandingForm from "./components/LandingFrom";

export default function App() {
  return (
    <Router>
      <div className="max-w-screen w-full min-h-screen flex flex-col overflow-x-hidden max-w-[2560px] place-self-center">


        <Routes>
          {/* Homepage route */}
          <Route 
            path="/" 
            element={
              <div className="relative min-h-screen flex flex-col items-center justify-center w-full h-full">
                <Hero />
                <div className="mt-16 w-full">
                  <Services />
                </div>
                <div className="mt-16 w-full">
                  <Benefits />
                </div>
                <div className="mt-16 w-full">
                  <ContactForm />
                </div>
                <Footer />
              </div>
            } 
          />

          {/* Life-Changing Tales route */}
          <Route 
            path="/Landing" 
            element={
              <div className="relative min-h-screen flex flex-col items-center justify-center w-full h-full">
                <LandingForm />

                <Footer />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}
