import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <section className="info_section ">
    <div className="info_container layout_padding2">
      <div className="container">
        <div className="info_logo">
          <a className="navbar-brand" href="index.html"> Tro<span>Weld</span> </a>
        </div>
        <div className="info_main">
          <div className="row">
            <div className="col-md-3 col-lg-2">
              <div className="info_link-box">
                <h5>
                  Useful Link
                </h5>
                <ul>
                  <li className=" active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="">
                  <Link className="nav-link" to="/about"> About</Link>
                  </li>
                  <li className="">
                  <Link className="nav-link" to="/service">Services</Link>
                  </li>
                  <li className="">
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 ">
              <h5>
                Welding
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscinaliquaLoreadipiscing
              </p>
            </div>
            <div className="col-md-3 mx-auto  ">
              <h5>
                social media
              </h5>
              <div className="social_box">
                <a href="#">
                  <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h5>
                Our welding center
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscinaliquaLoreadipiscing
              </p>
            </div>
          </div>
        </div>
        <div className="info_bottom">
          <div className="row">
            <div className="col-lg-9">
              <div className="info_contact ">
                <div className="row">
                  <div className="col-md-3">
                    <a href="#" className="link-box">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Location
                      </span>
                    </a>
                  </div>
                  <div className="col-md-5">
                    <a href="#" className="link-box">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>
                        Call +01 1234567890
                      </span>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="link-box">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>
                        demo@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form ">
                <form action="">
                  <input type="email" placeholder="Enter Your Email" />
                  <button>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Footer
