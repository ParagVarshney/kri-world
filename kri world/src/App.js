// src/App.js
import React from "react";
//import Homepage from "./components/HomePage";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import AboutKriworld from "./components/AboutkriWorld";
import Services from "./components/Services";
import Plans from "./components/Plans";
import Why from "./components/Why";




function App() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Header/>
      <HeroSection/>
      <WhoWeAre/>
      <AboutKriworld/>
      <Services/>
      <Plans/>
      <Why/>
    </div>

  );
}

export default App;
