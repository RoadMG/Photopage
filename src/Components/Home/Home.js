import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div
      className="main"
      style={{ backgroundImage: `url(${"./image/Main.jpg"})` }}
    >
      <Navbar />
    </div>
  );
}

export default Home;
