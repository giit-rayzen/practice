 import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className='app'>
      
   <Routes/>
   
   </div>
  );
}

export default App;