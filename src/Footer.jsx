import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container my-5">
        {/* Footer */}
        <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
          {/* Section: Social media */}
          <section className="d-flex flex-col flex-lg-row justify-content-between p-4 text-white" style={{ backgroundColor: '#21D192' }}>
            {/* Left */}
            <div className="me-5 mb-3 mb-lg-0">
              <span className="small">Get connected with us on social networks:</span>
            </div>
            {/* Right */}
            <div className="flex flex-row justify-content-center justify-content-lg-start">
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
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold small">Company name</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p className="small">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold small">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><a href="#!" className="text-dark small">MDBootstrap</a></p>
                  <p><a href="#!" className="text-dark small">MDWordPress</a></p>
                  <p><a href="#!" className="text-dark small">BrandFlow</a></p>
                  <p><a href="#!" className="text-dark small">Bootstrap Angular</a></p>
                </div>

                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold small">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><a href="#!" className="text-dark small">Your Account</a></p>
                  <p><a href="#!" className="text-dark small">Become an Affiliate</a></p>
                  <p><a href="#!" className="text-dark small">Shipping Rates</a></p>
                  <p><a href="#!" className="text-dark small">Help</a></p>
                </div>

                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold small">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p className="small"><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p className="small"><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                  <p className="small"><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p className="small"><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <p className="small">© 2020 Copyright: <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a></p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
