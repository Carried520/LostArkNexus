"use client";
import AboutUs from "@/components/AboutUs";
import ClassComponent from "@/components/ClassComponent/ClassComponent";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [showHeroSection, setShowHeroSection] = useState<boolean>(true);
  const [showAboutUs, setShowAboutUs] = useState<boolean>(false);

  return (
    <>
      <Navbar
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        showAboutUs={showAboutUs}
        setShowAboutUs={setShowAboutUs}
        showHeroSection={showHeroSection}
        setShowHeroSection={setShowHeroSection}
      />

      <div>
        {showHeroSection && (
          <HeroSection showAboutUs={showAboutUs} setShowAboutUs={setShowAboutUs} showHeroSection={showHeroSection} setShowHeroSection={setShowHeroSection} />
        )}
        {showAboutUs && <AboutUs />}
        {!showHeroSection && !showAboutUs && <ClassComponent selectedClass={selectedClass} />}
      </div>
    </>
  );
}
