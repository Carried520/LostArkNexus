'use client'
import React from "react";
import '../styles/globals.css'
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.9 }}>
    <div className="bg-070709 flex justify-center items-center">
      <div className="text-white flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <div className="flex justify-center items-center text-center max-w-2xl mb-4 mx-14">
          Lost Ark Nexus is a community made non-profit website and hub for a large array of community assets most notably the Community Guides. The purpose of this site is to help redirect users to various community resources that may or may not be created by the Lost Ark Nexus or Community Guide team.
        </div>
        <div className="flex justify-center items-center mx-14">
          <div>
            <h3 className="text-xl font-semibold">Carried</h3>
            <p className="text-gray-300">Developer</p>
          </div>
          <div className="mx-4">
            <h3 className="text-xl font-semibold">poyo</h3>
            <p className="text-gray-300">Developer</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Civo</h3>
            <p className="text-gray-300">Karma Farmer</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default AboutUs;