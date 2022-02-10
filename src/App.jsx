import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Social from "./pages/Social";
import Admin from "./pages/Admin";
import EventsPage from "./pages/EventsPage";
import Event from "./pages/Event";
import TOS from "./pages/TOS"
    
function App() {
  return (
    <Router> 
      <ScrollToTop />
      <Navbar />
      <div className="custom-bg">
        <div className="w-11/12 md:w-5/6 xl:2/3 mx-auto ">
          <Routes>
            <Route exact path="/events/:event" element={<Event />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/social" element={<Social />} />  
            <Route exact path="/admin" element={<Admin />} />   
            <Route exact path="/events" element={<EventsPage />} />
            <Route exact path = "/TOS" element = {<TOS />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router> 
  );
}

export default App;
