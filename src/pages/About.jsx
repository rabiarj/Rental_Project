import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <>
        <NavBar/>
    {/* testimonial section start */}
<section className="common-section mt-5 pt-5 ">
  <div className="container text-center common-title fw-bold ">
    <h2 className="common-heading"> Clients reviews<br /> Our works or menbers</h2>
    <hr className="w-25 mx-auto  " />
  </div>
  {/* slider start */}
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img1" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img2" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img3" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img4" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img5" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img6" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img7" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img8" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
                <div className="card p-4" style={{width: '18rem'}}>
                  <img src="images/of1.jfif" className="card-img-top" alt="team-img9" />
                  <div className="card-body">
                    <h5 className="card-title">Miss RRR</h5>
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="mt-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* slider end */}
</section>
{/* testimonial section end */}
{/* belogs start */}
<section className="common-section business-section" id=" online-section">
  <div className="container text-center common-title fw-bold ">
    <h2 className="common-heading text-dark">Our Updates  <br /> a new Projects</h2>
    <hr className="w-25 mx-auto" />
  </div>
  <div className="container">
    <div className="row g-5">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="d-flex justify-content-center align-item-center">
          <div className="card" style={{width: '18rem'}}>
            <img src="images/5.png" className="card-img-top" alt="project-img1" />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="small text-grey">
                  <i className="fa-solid fa-book-open-reader" /> : 5000
                </p>
                <p className="small text-grey"> Jan 24, 2024</p>
              </div>
              <h5 className="card- mt-3">Our Projects</h5>
              <p className="card-text mb-3 mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary px-5">Get Started</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="d-flex justify-content-center align-item-center">
          <div className="card" style={{width: '18rem'}}>
            <img src="images/5.png" className="card-img-top" alt="project-img2" />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="small text-grey">
                  <i className="fa-solid fa-book-open-reader" /> : 5000
                </p>
                <p className="small text-grey"> Jan 24, 2024</p>
              </div>
              <h5 className="card- mt-3">Our Projects</h5>
              <p className="card-text mb-3 mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary px-5">Get Started</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="d-flex justify-content-center align-item-center">
          <div className="card" style={{width: '18rem'}}>
            <img src="images/5.png" className="card-img-top" alt="project-img3" />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="small text-grey">
                  <i className="fa-solid fa-book-open-reader" /> : 5000
                </p>
                <p className="small text-grey"> Jan 24, 2024</p>
              </div>
              <h5 className="card- mt-3">Our Projects</h5>
              <p className="card-text mb-3 mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary px-5">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="d-flex justify-content-center align-item-center">
          <div className="card" style={{width: '18rem'}}>
            <img src="images/5.png" className="card-img-top" alt="project-img4" />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="small text-grey">
                  <i className="fa-solid fa-book-open-reader" /> : 5000
                </p>
                <p className="small text-grey"> Jan 24, 2024</p>
              </div>
              <h5 className="card- mt-3">Our Projects</h5>
              <p className="card-text mb-3 mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary px-5">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* brlogs end */}


    </>
  )
}

export default About
