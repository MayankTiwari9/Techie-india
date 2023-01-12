import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../Styles/navBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
    <Link className='navbarlink' to='/mobile' >Mobile</Link>
    <Link className='navbarlink' to='/laptop' >Laptop</Link>
    <Link className='navbarlink' to='/tv' >TV</Link>
    <Link className='navbarlink' to='/tablet' >Tablet</Link>
    <Link className='navbarlink' to='/accessories' >Accessories</Link>
    <Link className='navbarlink' to='/top-offers' >TopOffers</Link>
    <Outlet/>
    </div>
  )
}

export default NavBar;