import React from "react";
import "./styles/default.css";
import Navbar from "./components/navbar/index";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Footer />
    </div>
  );
}

export default App;
