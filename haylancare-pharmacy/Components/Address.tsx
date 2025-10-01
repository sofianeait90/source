import React from "react";


const Address = () => {
  return (
    <footer className="bg-blue-800 text-white  mt-0  w-full">
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-1">
        {/* Google Map */}
        <div className="w-full h-100  overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.7321461919787!2d-74.09058102359111!3d40.591667444973005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fb904488f35%3A0xd6fd7c4723a8c18d!2sHylan%20Care%20Pharmacy!5e0!3m2!1sfr!2sus!4v1757783318655!5m2!1sfr!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            
          ></iframe>
        </div>
        {/* Address and Contact Info */}
        <div className="p-6 flex flex-col justify-center r items-center text-center">
          <h2 className="text-xl font-semibold mb-2">Hylan Care Pharmacy</h2>
          <p>1419 Hylan Blvd</p>
          <p>Staten Island, NY 10305</p>

          <div className="mt-4">
            <p>
              <span className="font-medium">Phone:</span>
              <a
                href="tel:+17184488880"
                className="text-black-600 hover:underline"
              >
                (718) 448-8880
              </a>
            </p>
            <p>
              <span className="font-medium">Fax:</span> (718) 448-8881
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:hylancarepharmacy@gmail.com"
                className="text-black-600 hover:underline"
              >
                hylancarepharmacy@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}
    </footer>
  );
};

export default Address;
