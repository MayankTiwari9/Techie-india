import React from 'react';
import {BrowserRouter,Routes,  Route} from 'react-router-dom';
import SignIn from '../Componets/SignIn';
import SignUp from '../Componets/SignUp';
import PreNavBar from '../Componets/PreNavBar';
import Cart from '../Componets/Cart';
import Home from '../Componets/Home/Home';
import TopOffers from '../Componets/TopOffers';
import Tablet from '../Componets/Tablet';
import Accessories from '../Componets/Accessories';
import TV from '../Componets/TV';
import Laptop from '../Componets/Laptop';
import Mobile from '../Componets/Mobile';
import Support from '../Componets/Support';

const AllRouting = () => {
  return (
    <div>
    <BrowserRouter>
    <PreNavBar/>
    {/* <NavBar/> */}
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route path="/sign-in" element={<SignIn/>}></Route>
    <Route path="/sign-up" element={<SignUp/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/support' element={<Support/>}></Route>
    <Route path='/mobile' element={<Mobile/>}></Route>
    <Route path='/laptop' element={<Laptop/>}></Route>
    <Route path='/tv' element={<TV/>}></Route>
    <Route path='/tablet' element={<Tablet/>}></Route>
    <Route path='/accessories' element={<Accessories/>}></Route>
    <Route path='/top-offers' element={<TopOffers/>}></Route>
    </Routes>
    </BrowserRouter></div>
  )
}

export default AllRouting;