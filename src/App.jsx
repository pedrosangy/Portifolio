import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <About />

      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
