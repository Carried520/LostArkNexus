"use client";
import dynamic from "next/dynamic";
import classData from "../../data/classData.json";
import HeroSectionImages from "./HeroSectionImages";
import HeroSectionRoot from "./HeroSectionRoot";
import { useRef } from "react";

interface HeroSectionProps {
  setShowAboutUs: (aboutUs: boolean) => void;
  showAboutUs: boolean;
  setShowHeroSection: (aboutUs: boolean) => void;
  showHeroSection: boolean;
}

export default function HeroSection({ setShowAboutUs, showAboutUs, setShowHeroSection, showHeroSection }: HeroSectionProps) {
  const classArray = Object.values(classData);
  const randomClassRef = useRef(classArray[Math.floor(Math.random() * classArray.length)]);
  const randomClass = randomClassRef.current;
  const HeroSectionContent = dynamic(() => import("./HeroSectionContent"), { ssr: false });

  return (
    <HeroSectionRoot>
      <HeroSectionContent
        randomClass={randomClass}
        showAboutUs={showAboutUs}
        showHeroSection={showHeroSection}
        setShowAboutUs={setShowAboutUs}
        setShowHeroSection={setShowHeroSection}
      >
        <HeroSectionImages bg={randomClass.bg} name={randomClass.name} color={randomClass.color} icon={randomClass.icon} />
      </HeroSectionContent>
    </HeroSectionRoot>
  );
}
