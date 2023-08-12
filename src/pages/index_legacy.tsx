/* 
  Disclaimer it is legacy file please head to app folder and edit page.tsx to edit current home page
*/
import type { NextPage } from "next";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import ClassComponent from "@/components/ClassComponent/ClassComponent";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/HeroSection/HeroSection").then((component) => component.default),
  { loading: () => <div>Loading...</div>, ssr: false }
);
 
interface AppProps {
  selectedClass: string;
}

const App: NextPage<AppProps> = () => {
 

  return (
    <>
      <div>
        <HeroSection />
      </div>
    </>
  );
};

export default App;