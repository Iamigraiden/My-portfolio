
import './App.css';

import React from 'react'
import Contact from './Component/Contact';


 import Home from './Component/Home';
 import About from './Component/About';
import Projects from './Component/Projects';
import { Route, Routes } from 'react-router-dom';

export default function App() {
 
  return (
    <>
   <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
    
  </>
  )
}

