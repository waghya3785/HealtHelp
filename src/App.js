import Navbar from './component/Navbar';
import './App.css';
// import LoadingBar from 'react-top-loading-bar'
import React from 'react';
import  { useState } from 'react'

import Donate from './component/Donate';

import Team from './component/Team';
import Gallery from './component/Gallery';


import {
  BrowserRouter as Router,
 
  Route,
  Routes,
 
} from "react-router-dom";
import Home from './component/Home';
import Footer from './component/Footer';
import How_it_works from './component/How_it_works';
import PropTypes from 'prop-types'









function App() {
  // const [progress, setProgress] = useState(0)
  // state ={
  //   progress:0
  // }
  // setProgress =(progress) =>{
  //   this.setState({progress:progress})
  // } 


  return (
    <Router>
    <div>
      <Navbar/>
      {/* <LoadingBar
        height={1.5}
        color='#f11946'
        progress={progress} 
      /> */}
   
      <Routes>
      <Route path='/' element={<Home/>}/> 

      <Route path='/Team' element={<Team/>}/> 

      <Route path='/How_it_works' element={<How_it_works/>}/>
      <Route path='/Gallery' element={<Gallery/>}/> 
      <Route path='/Donate' element={<Donate/>}/> 



      
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
