import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white container mx-auto flex p-4 lg:p-0">
      <div className="container mx-auto lg:px-24 py-8 flex flex-col md:flex-row items-start justify-between lg:gap-8 ">
        {/* Left Column: Contact Form */}
        <div className="w-full lg:w-1/3 space-y-6  pb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nehmen Sie <span className="text-[#004F98]">Kontakt auf</span>
          </h2>
          <p className="text-gray-600">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus --- "Wir helfen Ihnen
            gerne mit dem Transport und der Zollabfertigung.
          </p>

          <form className="space-y-4">
            <div>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full border border-gray-200 rounded  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>

            <div>
              <input
                id="email"
                type="email"
                placeholder="E-Mail"
                className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>

            <div>
              <input
                id="phone"
                type="tel"
                placeholder="Telefonnummer"
                className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                placeholder="Nachricht"
                className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-[#004F98] text-white px-6 py-2 rounded-full hover:bg-[#004F98] transition-colors duration-300 w-full "
            >
              senden
            </button>
          </form>
        </div>

        {/* Right Column: Map */}
        <div className="w-full lg:w-1/2 h-[500px] md:pl-8">
          <iframe
            title="Google Maps"
            className="w-full h-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.090575191847!2d110.41623791415592!3d-7.890350980638159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bad1e327db44b%3A0xb1c386621e00fe30!2sKota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sen!2sid!4v1645952321163!5m2!1sen!2sid"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
