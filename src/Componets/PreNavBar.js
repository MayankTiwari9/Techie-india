import React from 'react';
import '../Styles/preNavBar.css';
import { Link, Outlet } from 'react-router-dom';

const PreNavBar = () => {
    return (
        <div className='preNavBar'>
            <div><Link className='preNavLink' to='/' >TECCHIE</Link></div>
            <div><input type="text" placeholder='Search Products' />
            <span class="material-symbols-outlined">search</span></div>
            <div><Link className='preNavLink' to="/sign-in">SignIn</Link></div>
            <div><Link className='preNavLink' to="/sign-up">SignUp</Link></div>
            <div><span class="material-symbols-outlined cart">shopping_cart</span>
                <Link className='preNavLink' to='/cart'>Cart(0)</Link>
            </div>
            <div><Link className='preNavLink' to='/support'>Support</Link></div>
            <Outlet />
        </div>
    )
}

export default PreNavBar;