import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container mx-auto my-8 px-4">
        {/* Footer */}
        <footer className="text-center text-lg text-dark bg-gray-100">
          {/* Section: Social media */}
          <section className="flex flex-col sm:flex-row justify-between items-center p-3 bg-blue-500 text-white">
            {/* Left */}
            <div className="mb-2 sm:mb-0">
              <span className="text-sm">Get connected with us on social networks:</span>
            </div>
            {/* Right */}
            <div className="flex space-x-3">
              <a href="#" className="text-black hover:text-gray-800 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-800 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-800 transition">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-800 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-800 transition">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-800 transition">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          {/* Section: Links */}
          <section className="bg-gray-100 text-dark py-6 sm:py-10">
            <div className="container mx-auto">
              {/* Flex container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-center">
                {/* Company Name */}
                <div>
                  <h6 className="text-lg font-bold uppercase mb-2">Company Name</h6>
                  <p className="w-12 mx-auto  mb-2 border-t-2 border-purple-600" />
                  <p className="text-lg font-bold">Shopingger</p>
                </div>

                {/* Useful Links */}
                <div>
                  <h6 className="text-lg font-bold uppercase mb-2">Useful Links</h6>
                  <hr className="w-12 mx-auto  mb-2 border-t-2 border-purple-600" />
                  <p><a href="#!" className="text-dark hover:text-gray-800 text-sm">Your Account</a></p>
                  <p><a href="#!" className="text-dark hover:text-gray-800 text-sm">Become an Affiliate</a></p>
                  <p><a href="#!" className="text-dark hover:text-gray-800 text-sm">Shipping Rates</a></p>
                  <p><a href="#!" className="text-dark hover:text-gray-800 text-sm">Help</a></p>
                </div>

                {/* Contact */}
                <div>
                  <h6 className="text-lg font-bold uppercase mb-2">Contact</h6>
                  <hr className="w-12 mx-auto  mb-2 border-t-2 border-purple-600" />
                  <p className="text-sm"><i className="fas fa-home mr-2"></i> New York, NY 10012, US</p>
                  <p className="text-sm"><i className="fas fa-envelope mr-2"></i> info@example.com</p>
                  <p className="text-sm"><i className="fas fa-phone mr-2"></i> +01 234 567 88</p>
                  <p className="text-sm"><i className="fas fa-print mr-2"></i> +01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>

          {/* Copyright Section */}
          <div className="bg-gray-200 text-center py-3">
            <p className="text-sm">© 2020 Copyright: <a className="text-gray-800 font-semibold" href="https://mdbootstrap.com/">SHOPPINGER</a></p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
