import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <>
        <header className="header_section">
      <div className="header_top">
        <div className="container-fluid header_top_container">
          <a className="navbar-brand " href="index.html"> Tro<span>Weld</span> </a>
          <div className="contact_nav">
            <a href="">
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
          <div className="social_box">
            <a href="">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand navbar_brand_mobile" href="index.html"> Tro<span>Weld</span> </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Login
                    </span>
                  </a>
                </li>
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
      </>
  )
}

export default Header
