import React from "react";

const Footer = () => {
  return (
    <div>


      <footer className="bg-[#004F98] text-white py-10 px-6 md:px-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-b pb-6 mt-12  pt-10">

        <div className="flex flex-col justify-center">
            <h2 className="font-bold text-lg mb-2">Zoll-Trans-Service GmbH</h2>
            <p className="font-bold">+49 (0) 4065 580053</p>
            <a
              href="mailto:customs@zoll-trans.de"
              className="text-blue-100 underline mb-2"
            >
              customs@zoll-trans.de
            </a>
            <p className="mb-1">Zum Stichkanal 1 A</p>
            
          </div>

          {/* Left Section */}
          <div className="">
            
            <p className="text-lg font-semibold">Company</p>
            <p className="mt-3">About</p>
            <p className="mt-2">Service</p>
            <p className="mt-2">Contact</p>
          </div>

          <div className="">
            
            <p className="text-lg font-semibold">Quick Links</p>
            <p className="mt-3">Terms & services</p>
            <p className="mt-2">Privacy Policy</p>
            <p className="mt-2">Refund Policy</p>
          </div>




          {/* Right Section */}
          <div className="flex flex-col justify-center">
            <h3 className="font-bold mb-3">SERVICE</h3>
            <label htmlFor="email" className="mb-2">
              Ihre E-Mail-Adresse
            </label>
            <input
              type="email"
              id="email"
              placeholder="Geben Sie Ihre E-Mail ein"
              className="px-3 py-2 rounded-md text-black mb-3 focus:outline-none bg-white"
            />
            <button className="bg-[#020d17] hover:bg-[#262946] text-white font-medium py-2 px-4 rounded-full">
              Anfrage jetzt senden
            </button>
          </div>
        </div>

        <p className="text-center mt-2">Copyright</p>
      </footer>
    </div>
  );
};

export default Footer;
