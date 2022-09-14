import React from "react";
// import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Card from "./components/Card";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// FEMI

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <FirstSection />
          <SecondSection />
          <Card />
          <CardTwo />
          <ThirdSection />
          <CardThree />
          <Footer />
        </div>

        <Routes>
          <Route exact path="/"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;