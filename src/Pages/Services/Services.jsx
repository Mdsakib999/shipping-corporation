import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CustomerReview from "../../Components/CustomerReview";
import ContactForm from "../../Components/ContactForm";

// Constant arrays moved outside the component
const servicesCards = [
  {
    img: "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Zollabfertigung Services",
    desc: "Professionelle Unterstützung bei der Ausstellung und Bearbeitung von Zoll- und Begleitpapieren für Ihre Waren.",
  },
  {
    img: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lagerung und Verpackung",
    desc: "Maßgeschneiderte Lösungen für die sichere Lagerung und Verpackung Ihrer Waren während des Transportes.",
  },
  {
    img: "https://images.pexels.com/photos/14400831/pexels-photo-14400831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Transportvermittlung",
    desc: "Vertrauen Sie auf unsere Erfahrung und Expertise, um Ihre Waren effizient ans Ziel zu bringen.",
  },
];

const transportServices = [
  {
    img: "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Zollabfertigung",
    desc: "Professionelle Unterstützung bei der Ausstellung und Bearbeitung von Zollpapieren.",
  },
  {
    img: "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lagerung",
    desc: "Sichere Lagerung und Verpackung Ihrer Waren für den Transport.",
  },
];

// Framer Motion configuration for move-up animation
const moveUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Services = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="w-full px-10 md:px-20">
      <div className="container py-10 md:py-24 mx-auto">
        {/* Header Section */}
        <motion.div {...moveUp} className="text-center mb-10 px-3 md:px-0">
          <h1 className="font-md text-2xl md:text-4xl mb-4">
            Learn More About the Segments We Serve
          </h1>
          <p className="text-[#004F98]">
            Umfassende Dienstleistungen für Import und Export von Handelswaren
            aller Art seit 2006.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          {servicesCards.map((service, index) => (
            <motion.div {...moveUp} key={index} className="max-w-md">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-auto mx-auto rounded-2xl"
              />
              <h2 className="text-xl font-bold mt-4">{service.title}</h2>
              <p className="mt-2 text-md text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-10  container mx-auto">
        <motion.h1
          {...moveUp}
          className="font-md text-3xl lg:text-4xl mb-4 text-center"
        >
          Transport Solutions
        </motion.h1>
        <motion.p
          {...moveUp}
          className="text-[#004F98] max-w-xl mx-auto  text-center pb-12 pl-2"
        >
          Umfassende Dienstleistungen für Import und Export in Osteuropa.
        </motion.p>

        {/* Services List */}
        <div className="flex flex-col gap-16 rounded-2xl ">
          <div className="flex flex-col md:flex-row justify-start md:gap-10 items-center lg:p-10 bg-[#8eb3d520] w-full rounded-2xl ">
            <div className="max-w-xl p-3">
              <img
                src={transportServices[0].img}
                alt=""
                className="w-full h-auto mx-auto rounded-2xl "
              />
            </div>
            <div className="p-4 md:p-0">
              <h1 className="hidden md:block font-md text-xl lg:text-2xl mb-4 font-bold">
                Custom <br /> Clearance
              </h1>
              <h1 className="font-md text-2xl lg:text-2xl mb-4 font-bold md:hidden">
                Custom Clearance
              </h1>
              <p className="text-gray-600 w-[90%] md:w-[50%]">
                operates in UAE, Turkey, Azerbaijan, Russia, Ukraine, Georgia,
                Kazakhstan, Turkmenistan and other CIS and Central Asian
                Countries.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start dm:gap-10 items-center lg:p-10 bg-[#8eb3d520] w-full rounded-2xl">
            <div className="p-4 md:p-0">
            <h1 className="hidden md:block font-md text-xl lg:text-2xl mb-4 font-bold">
                Custom <br /> Clearance
              </h1>
              <h1 className="font-md text-2xl lg:text-2xl mb-4 font-bold md:hidden">
                Custom Clearance
              </h1>
              <p className="text-gray-600 w-[90%] md:w-[50%]">
                operates in UAE, Turkey, Azerbaijan, Russia, Ukraine, Georgia,
                Kazakhstan, Turkmenistan and other CIS and Central Asian
                Countries.
              </p>
            </div>
            <div className="max-w-xl p-3">
              <img
                src={transportServices[1].img}
                alt=""
                className="w-full h-auto mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <CustomerReview />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Services;
