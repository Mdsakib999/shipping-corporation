import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
    // useEffect(() => {
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    Swal.fire({
      title: "Thank You!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    e.target.reset();
  };

  // Animation Variants
  const fadeUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-16">
      <div className="flex flex-col lg:flex-row lg:pt-16 px-4 sm:px-6 md:px-10 md:pb-16 md:mb-10 justify-evenly w-full items-center relative pb-16 ">
        <motion.div
          className="mt-8 text-center lg:text-left lg:w-[40%]"
          {...fadeUp}
        >
          <h1 className="text-3xl lg:text-5xl font-semibold ">
            Kontaktinformationen
          </h1>
          <p className="text-lg text-[#004F98] pt-3 lg:w-[75%] pb-5">
            Wir helfen Ihnen gerne mit dem Transport und der Zollabfertigung
          </p>
        </motion.div>

        <motion.div
          className="lg:w-[50%] w-full px-4 sm:px-6 md:px-8 py-8 border border-gray-200 rounded-lg shadow-md bg-white"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="lg:text-2xl text-xl font-bold mb-6 text-center"
            {...fadeUp}
          >
            Nehmen Sie Kontakt auf
          </motion.div>
          <form onSubmit={handleSubmit} className="w-full">
            <motion.div className="flex flex-wrap -mx-2 mb-6" {...fadeUp}>
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400 transition duration-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400 transition duration-300"
                />
              </div>
            </motion.div>
            <motion.div className="mb-6" {...fadeUp}>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400 transition duration-300"
              />
            </motion.div>
            <motion.div className="mb-6" {...fadeUp}>
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your Message..."
                required
                className="w-full h-32 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400 transition duration-300"
              ></textarea>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              {...fadeUp}
            >
              <button
                type="submit"
                className="rounded-full group mt-2 border border-black hover:border-white relative px-7 py-3  overflow-hidden font-bold bg-slate-50 lg:text-lg shadow-md hover:shadow-lg hover:bg-[#004F98]  transition duration-300"
              >
                <span className="relative text-black group-hover:text-white">
                  Nachricht senden
                </span>
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
      <div className="bg-white container mx-auto flex ">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start justify-between gap-8 lg:px-20 ">
          {/* Left Column: Contact Information */}
          <div className="w-full md:w-1/3 space-y-6 py-5 text-center md:text-left lg:ml-24">
            <h1 className="text-4xl font-bold mb-4">Location</h1>
            <p className="text-lg text-gray-700">
              123 Main Street,
              <br />
              Yogyakarta, Indonesia
            </p>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Opening Hours</h2>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="text-gray-600">
                Phone: (012) 345-6789
                <br />
                Email: info@example.com
              </p>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="w-full md:w-1/2 h-[500px] md:pl-8">
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
    </div>
  );
};

export default Contact;
