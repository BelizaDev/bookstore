import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/hero'
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import { useState } from 'react';
import data from '../src/data.js';
import { HorizonProvider } from './components/context.js';

function App() {
//  const [service, setService] = useState(data)
// const handleService = () => {
//   setService([...service], data)
// }
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Nav />
        <HorizonProvider>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/service' element={<Service />}/>
        </Routes>
        </HorizonProvider>
        </BrowserRouter>
        {/* <Hero /> */}
      </header>
    </div>
  );
}

export default App;
