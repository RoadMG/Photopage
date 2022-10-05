import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Contents from "./Components/Contents/Contents";
import Project from "./Components/Project/Project";
import About from "./Components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portraitdata } from "./Data/Portraitdata";
import { Citydata } from "./Data/Citydata";
import { Palacedata } from "./Data/Palacdata";
import { Architecturedata } from "./Data/Architecturedata";
import { Seadata } from "./Data/Seadata";

const App = () => {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/portrait"
          element={<Contents datas={Portraitdata} link={"/"} />}
        />
        <Route path="/project" element={<Project />} />
        <Route
          path="coldtree"
          element={<Contents datas={Citydata} link={"/project"} />}
        />
        <Route
          path="palace"
          element={<Contents datas={Palacedata} link={"/project"} />}
        />
        <Route
          path="archtr"
          element={<Contents datas={Architecturedata} link={"/project"} />}
        />
        <Route
          path="sea"
          element={<Contents datas={Seadata} link={"/project"} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
