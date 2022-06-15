import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home/Home'
import Contents from './Components/Contents/Contents';
import Project from './Components/Project/Project';
import About from './Components/About/About';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portraitdata } from './Data/Portraitdata';
import {Citydata} from './Data/Citydata'
import {Palacedata} from './Data/Palacdata'
import {Architecturedata} from './Data/Architecturedata'
import {Seadata} from './Data/Seadata'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/portrait" element={<Contents datas={Portraitdata} link={'/'}/>}/>
      <Route path="/project" element={<Project />}/>
      <Route path="coldtree" element={<Contents datas={Citydata} link={'/project'}/>} />
      <Route path="palace" element={<Contents datas = {Palacedata} link={'/project'}/>} />
      <Route path="archtr" element={<Contents datas = {Architecturedata} link={'/project'}/>} />
      <Route path="sea" element={<Contents datas = {Seadata} link={'/project'}/>} />
      <Route path="/about" element={<About />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
