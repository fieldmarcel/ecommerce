import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container my-5">
        {/* Footer */}
        <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
          {/* Section: Social media */}
          <section className="d-flex flex-col sm:flex-row justify-content-between p-4 text-white" style={{ backgroundColor: '#21D192' }}>
            {/* Left */}
            <div className="me-5 mb-3 mb-lg-0">
              <span className="small">Get connected with us on social networks:</span>
            </div>
            {/* Right */}
            <div className="flex flex-row justify-content-center justify-center">
              <a href="#" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          {/* Section: Links */}
          <section className="text-dark">
            <div className="container text-center  mt-5">
              {/* Flex container */}
              <div className="flex flex-col sm:flex-row justify-center  mt-3">
                {/* Company Name */}
                <div className="mb-4 md:mr-8">
                  <h6 className="text-uppercase fw-bold small">Company Name</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p className="small">
                    Shopingger
                  </p>
                </div>

                {/* Products */}
                <div className="mb-4 md:mr-8">
                  <h6 className="text-uppercase fw-bold small">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><a href="#!" className="text-dark small">MDBootstrap</a></p>
                  <p><a href="#!" className="text-dark small">MDWordPress</a></p>
                  <p><a href="#!" className="text-dark small">BrandFlow</a></p>
                  <p><a href="#!" className="text-dark small">Bootstrap Angular</a></p>
                </div>

                {/* Useful Links */}
                <div className="mb-4 md:mr-8">
                  <h6 className="text-uppercase fw-bold small">Useful Links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><a href="#!" className="text-dark small">Your Account</a></p>
                  <p><a href="#!" className="text-dark small">Become an Affiliate</a></p>
                  <p><a href="#!" className="text-dark small">Shipping Rates</a></p>
                  <p><a href="#!" className="text-dark small">Help</a></p>
                </div>

                {/* Contact */}
                <div className="mb-4 md:mr-8">
                  <h6 className="text-uppercase fw-bold small">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p className="small"><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p className="small"><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                  <p className="small"><i className="fas fa-phone mr-3"></i> +01 234 567 88</p>
                  <p className="small"><i className="fas fa-print mr-3"></i> +01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>

          {/* Copyright Section */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <p className="small">© 2020 Copyright: <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a></p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
