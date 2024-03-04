import React from 'react'
import FooterContact from './FooterContact'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    {/* Footer section start */}
<footer className="main-footer-section footer-top bg-color">
  <div className="contact-details">
    <div className="container px-5">
      <div className="row g-0">
        <div className="col-lg-4">
          <div className="contact-div p-5 d-flex flex-column justify-content-center align-item-center">
            <div className="icon-div d-flex justify-content-center align-item-center rounded-circle mb-3">
              <img src="images/gifcall.gif" className="img-fluid" alt='phone-img' />
            </div>
            <Link to='' className="text-white">(+966)5550 0123</Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-div p-5 d-flex flex-column justify-content-center align-item-center">
            <div className="icon-div d-flex justify-content-center align-item-center rounded-circle mb-3">
              <img src="images/mailgif.gif" className="img-fluid" alt='mail-img' />
            </div>
            <Link  to='' className="text-white">a.s.alghuniam@gmail.com</Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-div p-5 d-flex flex-column justify-content-center align-item-center">
            <div className="icon-div d-flex justify-content-center align-item-center rounded-circle mb-3">
              <img src="images/mapgif.gif" className="img-fluid" alt='map-img' />
            </div>
            <Link to='' className="text-white">Location</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* Footer first section end */}



<FooterContact/>








    </>
  )
}

export default Footer
