import React from 'react';
import bg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
       <div className="mt-24 px-24  "  style={{ backgroundImage: `url(${bg})` }} >
         <footer className="footer py-5 lg:flex md:flex justify-between sm:block text-black" >
        <div>
          <span className="footer-title text-primary" href='.'>Services</span> 
          <a className="link link-hover" href='.'>Branding</a>
          <a className="link link-hover" href='.'>Design</a>
          <a className="link link-hover" href='.'>Marketing</a>
          <a className="link link-hover" href='.'>Advertisement</a>
        </div> 
        <div >
          <span className="footer-title text-primary" href='.'>Company</span> 
          <a className="link link-hover" href='.'>About us</a>
          <a className="link link-hover" href='.'>Contact</a>
          <a className="link link-hover" href='.'>Jobs</a>
          <a className="link link-hover" href='.'>Press kit</a>
        </div> 
        <div>
          <span className="footer-title text-primary" href='.'>Legal</span> 
          <a className="link link-hover" href='.'>Terms of use</a>
          <a className="link link-hover" href='.'>Privacy policy</a>
          <a className="link link-hover" href='.'>Cookie policy</a>
        </div>
      </footer> 
      <footer className="footer footer-center p-4 font-medium mt-3 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by SH Industries Ltd</p>
  </div>
</footer>

       </div>
    );
};

export default Footer;