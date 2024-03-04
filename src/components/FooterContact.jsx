import React from 'react'
import { Link } from 'react-router-dom';




const FooterContact = () => {
  return (
    <>
      
      
{/* Footer */}
<footer className="text-center text-lg-start  text-muted Footer-bg">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <Link to='' className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </Link>
      <Link to='' className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </Link>
      <Link to='' className="me-4 text-reset">
        <i className="fab fa-google" />
      </Link>
      <Link to='' className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </Link>
      <Link to='' className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </Link>
      <Link to='' className="me-4 text-reset">
        <i className="fab fa-github" />
      </Link>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className=" fw-bold mb-4">
            <i className="fas fa-house me-3" />The First Specialist for Real Estate
          </h6>
          <p>
          We provied you the best flats, villa, floor, appartment,plots, showrooms in the best price according yours requirements and choice and demmand.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Buy & Rent
          </h6>
          <p>
            <Link to="#!" className="text-reset">Flats</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Floor</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Villa</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">plots</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="#!" className="text-reset">About</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Services</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Blogs</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Help</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> Malaz near kafi realway staition </p>
          <p>
            <i className="fas fa-envelope me-3" />
             a.s.alghuniam@gmail.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 966 55 460 38</p>
          <p><i className="fas fa-print me-3" /> + 966 50 028 29</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: ' #8769c0'}}>
    © 2021 Copyright:
    <Link className="text-reset fw-bold" to="">alghunaim.com</Link>
  </div>

  <div className="text-center p-4" style={{backgroundColor: ' #8769c0'}}>
    Created by:
    <Link className="text-reset fw-bold" to="">Rabia</Link>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}


    </>
  )
}

export default FooterContact
