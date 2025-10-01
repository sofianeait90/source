import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Address / Contact Info */}
        <div className="space-y-2 text-center ">
          <h2 className="text-xl font-semibold text-white">
            Hylan Care Pharmacy
          </h2>
          <p>1509 Hylan Blvd, Staten Island, NY 10305</p>
         
        </div>

    
      

       
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hylan Care Pharmacy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
