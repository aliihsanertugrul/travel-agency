import React from 'react'

const Contact = () => {
  return (
    <section className="contact_section pb-5">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Get In <span>Touch</span></h2>
      </div>
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="form_container">
            <form action="">
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="form-group col-lg-6">
                  <select name="" id="" className="form-control wide">
                    <option value="">Select Service</option>
                    <option value="">Service 1</option>
                    <option value="">Service 2</option>
                    <option value="">Service 3</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="message-box form-control" placeholder="Message" />
                </div>
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div className="map_container">
            <div className="map">
              <div id="googleMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.352203070923!2d28.73998121212658!3d41.257666703911106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409ffff60abc95a9%3A0x380ce02cc824e506!2zxLBzdGFuYnVsIEhhdmFsaW1hbsSx!5e0!3m2!1str!2str!4v1705322097836!5m2!1str!2str" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
