import React from 'react'
import imgAbout from "./img/aboutImg.jpg"
import BackButton from './backButton'

const About = () => {
  return (
    <section className="about_section layout_padding">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>Welcome to <span>Troweld</span></h2>
            </div>
            <p>
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has s
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="img-box">
            <img src={imgAbout} alt="about" className='aboutImg' />
          </div>
        </div>
      </div>
      <BackButton/>
    </div>
  </section>

  )
}

export default About
