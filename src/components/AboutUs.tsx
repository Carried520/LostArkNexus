import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-070709 flex justify-center items-center">
      <div className="text-white flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <div className="flex justify-center items-center">
          <div>
            <h3 className="text-xl font-semibold">Carried</h3>
            <p className="text-gray-300">Developer</p>
          </div>
          <div className="mx-4">
            <h3 className="text-xl font-semibold">poyo</h3>
            <p className="text-gray-300">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;