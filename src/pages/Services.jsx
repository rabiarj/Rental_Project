import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'


const Services = () => {
  return (
    <>
    <NavBar/>
        
   {/* services section start */}
<section className="services-section common-section ">

  <div className="container text-center common-title fw-bold ">
    <h2 className="common-heading"> what Will We Do <br /> Yours Business</h2>
    <hr className="w-25 mx-auto" />
  </div>
  <div className="container mt-5">
    <div className="row g-5">
      <div className="col-12 col-lg-4 col-md-12">
        <div className="text-center card-box rounded-2 p-5">
          <img src="images/3.jpg" alt="housepic" className="img-fluid" width="200px" />
          <h5 className="my-3 fw-normal">Building Link</h5>
          <p className="mb-5">Family Apartment for rent in ...... 
            3rooms , + 2bathrooms ,+ kitchen ,
            +hall. yaerly paymeny .
          </p>
          <div className="d-flex justify-content-center align-item-center">
            <Link to="#service">
              <i className="fa-solid fa-circle-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-md-12">
        <div className="text-center shadow card-box rounded-2 p-5 ">
          <img src="images/4.avif" alt="housepic" className="img-fluid" width="200px" />
          <h5 className="my-3 fw-normal">Marketing Content</h5>
          <p className="mb-5">Family Apartment for rent in ...... 
            3rooms , + 2bathrooms ,+ kitchen ,
            +hall. yaerly paymeny .
          </p>
          <div className="d-flex justify-content-center align-item-center">
            <Link to="#service" className>
              <i className="fa-solid fa-circle-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-md-12">
        <div className="text-center card-box rounded-2 p-5">
          <img src="images/2.avif" alt="housepic" className="img-fluid" width="200px" />
          <h5 className="my-3 fw-normal">On page SEO</h5>
          <p className="mb-5">Family Apartment for rent in ...... 
            3rooms , + 2bathrooms ,+ kitchen ,
            +hall. yaerly paymeny .
          </p>
          <div className="d-flex justify-content-center align-item-center">
            <Link to="#service">
              <i className="fa-solid fa-circle-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>



  
</section>

{/* Our Marketing start */}
<section className=" bg-color more-info-section">
  <div className="container">
    <div className="row g-4">
      <div className=" col-12 col-md-12 col-lg-6  img-section ">   
        <figure className="justify-content-center align-items-center">
          {/* <video src="" loop muted autoplay class="hero-video--section" ></video> */}
          <img src="images/7.jpg" className="hero-video--sectio img-fluid" alt='housepic' />
        </figure>                      
      </div>
      <div className="m col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
        <h1 className="text-capitalize fw-bolder text-white common-heading">world wide supplyer!</h1>
        <p className="mt-3 mb-2 para-width text-light-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          excepturi delectus a, accusamus impedit minus quam unde quod eveniet
          perspiciatis exercitationem recusandae porro
          sapiente voluptate deleniti. Laborum distinctio itaque nisi?</p>
        <div className="text-center w-100 text-md-start py-3 px-3">
          <button className="text-capitlize btn btn-primary px-5 py-2" data-bs-toggle="tooltip" data-bs-title="Contact Us">Contact us</button>
        </div>
        
      </div>
    </div>
  </div>



  
</section>
 {/* Our Marketing end */}

 
 {/* online services start */}
<section className="common-section business-section" id='online-section' >
  <div className="container text-center common-title fw-bold ">
    <h2 className="common-heading"> We care love <br /> Our clients</h2>
    <hr className="w-25 mx-auto" />
  </div>
  <div className="container">
    <div className="row g-5">
      <div className="col-12 col-lg-6 col-md-6">
        <div className="d-flex px py-5 shadow">
          <img src="images/4.avif" className="img-fluid d-md-block d-none mx-3 " alt="housepic" />
          <span> <p className="mb-3 fw-bold">House for Rent</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat 
              eius blanditiis doloremque, ut corrupti hic enim a doloribus ad 
              sint vero earum quod similique reiciendis voluptatum ipsa dolor eos quis!
            </p></span>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-6">
        <div className="d-flex px py-5 shadow">
          <img src="images/4.avif" className="img-fluid d-md-block d-none mx-3" alt="housepic" />
          <div>
            <p className="mb-3 fw-bold">House for Rent</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat 
              eius blanditiis doloremque, ut corrupti hic enim a doloribus ad 
              sint vero earum quod similique reiciendis voluptatum ipsa dolor eos quis!
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-6">
        <div className="d-flex px py-5 shadow">
          <img src="images/4.avif" className="img-fluid d-md-block d-none mx-3" alt="housepic" />
          <div>
            <p className="mb-3 fw-bold">House for Rent</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat 
              eius blanditiis doloremque, ut corrupti hic enim a doloribus ad 
              sint vero earum quod similique reiciendis voluptatum ipsa dolor eos quis!
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md- col-md-6">
        <div className="d-flex px py-5 shadow">
          {/* <img src="images/4.avif" class="img-fluid d-md-block d-none mx-3"
              alt="housepic" > */}
          <img src="images/4.avif" className="img-fluid d-md-block d-none mx-3" alt="housepic" />
          <div>
            <p className="mb-3 fw-bold">House for Rent</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat 
              eius blanditiis doloremque, ut corrupti hic enim a doloribus ad 
              sint vero earum quod similique reiciendis voluptatum ipsa dolor eos quis!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* online services end */}





    </>
  )
}

export default Services
