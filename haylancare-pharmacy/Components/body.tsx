"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const heroVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Body = () => {
  // scroll controls for hero
  const heroRef = useRef(null);
  const heroControls = useAnimation();
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // scroll controls for cards
  const cardsRef = useRef(null);
  const cardsControls = useAnimation();
  const cardsInView = useInView(cardsRef, { once: true, margin: "-120px" });

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    else heroControls.start("hidden");
  }, [heroInView, heroControls]);

  useEffect(() => {
    if (cardsInView) cardsControls.start("visible");
    else cardsControls.start("hidden");
  }, [cardsInView, cardsControls]);

  return (
    <div className="w-full flex flex-col h-full justify-center items-center">
      <motion.div
        ref={heroRef}
        className="w-full flex h-195 py-5 bg-[url('/landpage.jpg')] items-center justify-center bg-cover bg-center relative"
        initial="hidden"
        animate={heroControls}
        variants={heroVariant}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="w-300 h-full flex flex-col bg-transaprent items-center justify-start gap-8">
          <motion.div
            className="w-full text-blue-700 flex flex-col h-70 items-start justify-center p-6"
            variants={heroVariant}
            initial="hidden"
            animate={heroControls}
            transition={{ duration: 0.9 }}
          >
            <h1 className=" text-1xl font-semibold leading-tight">
              WELCOME TO HYLAN CARE PHARMACY
              <br />
              <span className="text-4xl font-bold block mt-1">
                BETTER HEALTH
                <br /> STARTS HERE.
              </span>
            </h1>
          </motion.div>

          <div className="w-full bg-center py-16 px-6 flex flex-col items-center">
            <motion.div
              ref={cardsRef}
              className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={cardsContainer}
              initial="hidden"
              animate={cardsControls}
            >
              {/* About Us */}
              <motion.div
                className="bg-sky-500 text-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                variants={cardVariant}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="text-lg font-semibold mb-4 uppercase">
                  About Us
                </h2>
                <p>
                  Hylan Care Pharmacy is one of Staten Island's highest rated
                  pharmacies. Now, as always, we’re here to help. Simple,
                  stress-free ordering. Safe, accurate prescriptions delivered
                  to your door. World-class customer support, 24x7.
                </p>
              </motion.div>

              {/* Covid Vaccinations */}
              <motion.div
                className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                variants={cardVariant}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="text-lg font-semibold mb-4 uppercase">
                  COVID-19 Vaccinations
                </h2>
                <p>
                  We provide covid-19 testing and vaccinations. An appointment
                  is not required. A referral not required. Testing is available
                  for all patients. Please call for more information.
                </p>
              </motion.div>

              {/* Location */}
              <motion.div
                className="bg-blue-800 text-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                variants={cardVariant}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="text-lg font-semibold mb-4 uppercase">
                  Location
                </h2>
                <p>
                  <strong>Hylan Care Pharmacy</strong>
                  <br />
                  1509 Hylan Blvd, Staten Island, NY 10305
                  <br />
                  Tel: 718-400-8408
                  <br />
                  <strong>Opening Hours:</strong>
                  <br />
                  Mon-Sat: 9AM-8PM
                  <br />
                  Sun: 11AM-5PM
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="w-full bg-center py-16 px-6 flex flex-col items-center">
        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={cardsContainer}
          initial="hidden"
          animate={cardsControls}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg text-center"
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-lg font-semibold mb-4 uppercase">
                COVID-19 Vaccinations
              </h2>
              <p>
                We provide covid-19 testing and vaccinations. An appointment is
                not required. A referral not required. Testing is available for
                all patients. Please call for more information.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Body;
