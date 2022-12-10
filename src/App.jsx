import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import MenuPage from './pages/MenuPage/MenuPage';
import ContactPage from './pages/Contact/ContactPage';
import BookingPage from './pages/BookingPage/BookingPage';

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/book' element={<BookingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
