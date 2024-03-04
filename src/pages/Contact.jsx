import React from 'react'
import NavBar from '../components/NavBar'
import FooterContact from '../components/FooterContact'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <NavBar/>

    <br/><br/><br/><br/><br/>
  



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






    {/* contact us start */}
<section className="common-section contact-section text-white  pt-5 bg-color" id="">
  

  
  <div className="container text-center common-title fw-bold ">
    <h2 className="common-heading text-white"> Contact Us</h2>
    <hr className="w-25 mx-auto" />
  </div>
  <div className="container">
    <div className="form-section mx-auto">
      <form action="https://formspree.io/f/mwkgvwjr" method="POST">
        <div className="mb-3">
          <div className="row">
            <div className="col-lg-6 col-12">
              {/* <input type="hidden" name="access_key" value="56c91269-96de-41a6-8650-9b620d125cb2"> */}
              <label htmlFor="exampleFormUserFirstName" className="form-label">First Name:</label>
              <input type="text" required className="form-control" id="name" name=" exampleformuserfirstname" placeholder="FirstName" />
            </div>
            <div className="col-lg-6 col-12">
              <label htmlFor="exampleFormUserLastName" className="form-label">Last Name:</label>
              <input type="text" className="form-control" name="lname" id="exampleFormUserLastName" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Email Adress</label>
          <input type="email" className="form-control" name="email" required id="exampleFormControlTextarea1" placeholder="demo@mail.com" rows={3} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Aera</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows={3} defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>




  <div className="custom-shape-divider-top-1706182306">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
    </svg>
  </div>
</section>
{/* cntact us end */}

<FooterContact/>

    </>
  )
}

export default Contact
