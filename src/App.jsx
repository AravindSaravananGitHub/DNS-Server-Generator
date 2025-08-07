import React from "react";
import Header from "./components/Header";
import "./style.css";
import Footer from "./components/Footer";
import Generator from "./components/Generator";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Generator />
      <Footer />
    </div>
  );
};

export default App;
