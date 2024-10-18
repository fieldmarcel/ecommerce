import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="container   mx-auto px-4 py-6">
      {/* Main Box for All Services */}
      <div className=" services bg-white  p-6 rounded-md text-center flex  flex-col  sm:flex-row sm:justify-center items-center gap-4 sm:gap-8">
        
        {/* Service 1 */}
        <div className="flex items-center gap-2 sm:gap-4">
         <div><TbTruckDelivery className="text-3xl sm:text-4xl text-blue-600" /></div> 
         <h3 className="text-sm sm:text-lg  text-gray-800">
            Super Fast & Free Delivery
          </h3>
        </div>

        {/* Service 2 */}
        <div className="flex items-center gap-7 sm:gap-4">
          <MdSecurity className="text-3xl sm:text-4xl text-green-600" />
          <h3 className="text-sm sm:text-lg  text-gray-800">
            Non-Contact Shipping
          </h3>
        </div>

        {/* Service 3 */}
        <div className="flex items-center gap-6 sm:gap-4">
          <GiReceiveMoney className="text-3xl sm:text-4xl text-yellow-600" />
          <h3 className="text-sm sm:text-lg  text-gray-800">
            Money Back Guarantee
          </h3>
        </div>

        {/* Service 4 */}
        <div className="flex items-center gap-6 sm:gap-4">
          <RiSecurePaymentLine className="text-3xl sm:text-4xl text-red-600" />
          <h3 className="text-sm sm:text-lg  text-gray-800">
            Secure Payment System
          </h3>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
