import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="social-links text-center">
        <Link to="https://x.com/mwinami_" className="twitter p-1"><i className="bi bi-twitter-x"></i></Link>
        <Link to="https://facebook.com/mwinamijr" className="facebook p-1"><i className="bi bi-facebook"></i></Link>
        <Link to="https://instagram.com/_mwinami" className="instagram p-1"><i className="bi bi-instagram"></i></Link>
        <Link to="https://linkedin.com/in/mwinamijr" className="linkedin p-1"><i className="bi bi-linkedin"></i></Link>
        <Link to="https://github.com/mwinamijr" className="github p-1"><i className="bi bi-github"></i></Link>
      </div>
      <div className="text-center p-3">
        <p>
          &copy; {new Date().getFullYear()} Techdometz. All rights reserved. <br />Designed by Mwinami Jr.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
