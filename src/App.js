import React from 'react'
import { Routes, Route } from 'react-router-dom';

import NavBar from './styles/layouts/navBar/NavBar'
import Footer from './styles/layouts/footer/Footer'


import Home from './pages/Home'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
