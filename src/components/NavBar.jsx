import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';




const NavBar = () => {
  const {t , i18n} = useTranslation('common');
  useEffect(()=>{
    
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);
  },[])
  
  const changeLang = (l) =>{
    return()=>{
      i18n.changeLanguage(l);
      localStorage.setItem('lang',l);

    }
  }




  return (
    <>
      <div>
  <nav className="navbar navbar-expand-lg bg-color  fixed-top pt-lg-5">
    <div className="container-fluid ">
      <Link to="#" className="navbar-brand ">
      </Link>
      <Link to="#"> <img src="./images/logmtp.png" alt="logo" width={150} className="rounded-2 mb-4 logo" /></Link>
      <Link className=" logoN mb-4 ">   الاختصاصي الأول للعقارات  <br className=""/>  <span className=''>The First Specialist for Real Estate</span> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/">{t('Home')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">{t('About')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">{t('Service')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">{t('Portfolio')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">{t('Contact')}</Link>
          </li>
        </ul>
        <button onClick={changeLang('en')} className='btn btn-light  ms-5  logob'>ENGLISH</button>
        <button onClick={changeLang('sa')} className='btn btn-light  px-4 ms-2  logob'>  عربي </button>
      </div>
    </div>
  </nav>
  {/* hero section start */}
  <section className="bg-main bg-color hero-section">
    <div className="container">
      <div className="row mb-5">
        <div className=" mt-2 mt-lg-0 text-center text-lg-start  order-lg-0 order-1    col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
          <h1 className="text-capitalize fw-bolder text-white">welcom to our website</h1>
          <p className="mt-2 mb-2 para-width text-light-grey">We provied you the best flats, villa, floor, appartment,plots, showrooms in the best price according yours requirements and choice and demmand 
           lest join us!</p>
          <div className="text-center w-100 text-md-start py-3 px-3">
           <Link to='/contact'> <button className="text-capitlize btn btn-primary px-5 py-2" data-bs-toggle="tooltip" data-bs-title="Contact Us">Contact us</button></Link>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 order-lg-1 order-0 ">
          <div className="text-center text-lg-end">
            {/* <video src="" loop muted autoplay class="hero-video--section" ></video> */}
            <img src="images/8.jpg" alt='renthous-img' className="hero-video--section" />
          </div>
        </div>
      </div>
    </div>
    <div class="custom-shape-divider-bottom-1708343811">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

  </section>



  
  {/* hero-section end */}
</div>

    </>
  )
}

export default NavBar
