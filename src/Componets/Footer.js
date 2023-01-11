import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/footer.css';


const Footer = () => {
  return (<div className='footer-container-main'>

    <div className='footer-container'>
      <div className='footer-container-2'>
        <div>
          <div><h5>ABOUT</h5></div>
          <div>
            <Link href='/'>Contact Us</Link>
            <Link href='/'>About Us</Link>
            <Link href='/'>Career</Link>
            <Link href='/'>Press</Link>
            <Link href='/'>Corporate Information</Link>
          </div>
        </div>
        <div>
          <div><h5>HELP</h5></div>
          <div>
            <Link href='/'>Payment</Link>
            <Link href='/'>Shipping</Link>
            <Link href='/'>Cancellation and Returns</Link>
            <Link href='/'>FAQ</Link>
            <Link href='/'>Report Infringement</Link>
          </div>
        </div>
        <div>
          <div><h5>POLICY</h5></div>
          <div>
            <Link href='/'>Return Policy</Link>
            <Link href='/'>Terms Of Use</Link>
            <Link href='/'>Security</Link>
            <Link href='/'>Privacy</Link>
            <Link href='/'>Sitemap</Link>
          </div>
        </div>
        <div>
          <div><h5>SOCIAL</h5></div>
          <div>
            <Link className='block' href='/'>Facebook</Link>
            <Link className='block' href='/'>Twitter</Link>
            <Link className='block' href='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <div className='footer-container-3'>
        <div>
          <div><h5>Mail Us :-</h5></div>
          <div>
            Tecchie India Private Limited,
            Housing Board Colony,
            Sehore, 466001 Madhya Pradesh,
            India</div>
        </div>
        <div>
        <div><h5>Registered Office Address :-</h5></div>
        <div>Tecchie India Private Limited,
            Housing Board Colony,
            Sehore, 466001 Madhya Pradesh,
            India
            Mobile No:- 9109330696</div>
      </div>
        </div>
    </div>
    <hr></hr>
    <div className='post-footer'>
    <div>Become a Seller</div>
    <div>Advertise</div>
    <div>Gift Cards</div>
    <div>Help Center</div>
    <div>2002-2023 Tecchie.com</div>
    </div>
  </div>
  )
}

export default Footer;