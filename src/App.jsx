import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { NavbarProvider } from './Context/NavbarContext';
import { SignProvider } from './Context/SignContext';
import { Login, Register } from './Components/Headers/Header';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Menu from './Pages/Menu/Menu';
import Profilee from './Pages/Profile/Profilee';
import CartPage from './Pages/CartPage/CartPage';
import { CartProvider } from './Context/CartContext';

function App() {
  
  return(
    <>
      <SignProvider>
        <NavbarProvider>
          <CartProvider>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/profile' element={<Profilee/>}/>
              <Route path='/cart' element={<CartPage/>}/>
            </Routes>
          </CartProvider>
        </NavbarProvider>
      </SignProvider>
    </>
  )
}

export default App
