import React from 'react';
import "./styles/App.css"
import FirstQuery from './components/FirstQuery';
import SecondQuery from './components/SecondQuery';
import ThirdQuery from './components/ThirdQuery';
import FourthQuery from './components/FourthQuery';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import OpeningPage from './components/OpeningPage';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <div className='info'>
          <Routes>
            <Route path='/' element={<OpeningPage/>}/>
            <Route path="/first" element={<FirstQuery/>}
            />
            <Route path="/second" element={<SecondQuery/>} />
            <Route path="/third" element={<ThirdQuery/>} />
            <Route path="/fourth" element={<FourthQuery/>} />
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
