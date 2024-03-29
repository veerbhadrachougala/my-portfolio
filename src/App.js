import React from 'react';
import './index.css'
import { Route,Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Projects from './Routes/Projects';
import AfterSubmit from './Components/AfterSubmit';

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/About' element={<About />} />
        <Route path = '/Projects' element={<Projects />} />
        <Route path = '/Contact' element={<Contact />} />
        <Route path='/submited' element={<AfterSubmit />} />
      </Routes>
    </>
  );
}

export default App;
