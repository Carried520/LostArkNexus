import type { NextPage } from "next";
import React, { useState } from "react";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import ClassComponent from "@/components/ClassComponent";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/HeroSection").then((component) => component.default),
  { loading: () => <div>Loading...</div>, ssr: false }
);
 
interface AppProps {
  selectedClass: string;
}

const App: NextPage<AppProps> = () => {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [showHeroSection, setShowHeroSection] = useState<boolean>(true);
  const [showAboutUs, setShowAboutUs] = useState<boolean>(false);

  return (
    <>

          <Navbar selectedClass={selectedClass} setSelectedClass={setSelectedClass} showAboutUs={showAboutUs} setShowAboutUs={setShowAboutUs} showHeroSection={showHeroSection} setShowHeroSection={setShowHeroSection} />

      <div>
        {showHeroSection && <HeroSection showAboutUs={showAboutUs} setShowAboutUs={setShowAboutUs} showHeroSection={showHeroSection} setShowHeroSection={setShowHeroSection} />}
        {showAboutUs && <AboutUs />}
        {!showHeroSection && !showAboutUs && <ClassComponent selectedClass={selectedClass} />}
      </div>   
    </>
  );
};

export default App;