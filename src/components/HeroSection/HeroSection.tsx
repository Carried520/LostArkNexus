"use client";
import dynamic from "next/dynamic";
import classData from "../../data/classData.json";
import HeroSectionImages from "./HeroSectionImages";
import HeroSectionRoot from "./HeroSectionRoot";
import { useRef } from "react";


export default function HeroSection() {
  const classArray = Object.values(classData);
  const randomClassRef = useRef(classArray[Math.floor(Math.random() * classArray.length)]);
  const randomClass = randomClassRef.current;
  const HeroSectionContent = dynamic(() => import("./HeroSectionContent"), { ssr: false });

  return (
    <HeroSectionRoot>
      <HeroSectionContent randomClass={randomClass}>
        <HeroSectionImages bg={randomClass.bg} name={randomClass.name} color={randomClass.color} icon={randomClass.icon} />
      </HeroSectionContent>
    </HeroSectionRoot>
  );
}
