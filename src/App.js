import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/TopNav/Nav";
import Section from "./components/Sections/Section";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
