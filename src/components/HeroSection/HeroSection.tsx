"use client";

import classData from "../../data/classData.json";
import HeroSectionContent from "./HeroSectionContent";
import { useRandomClass } from "@/Store/RandomClassStore";
import { Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";

export default function HeroSection() {
  const classArray = Object.values(classData);
  const DELAY_IN_MILISECONDS = 30_000;
  const [, updateClass] = useRandomClass((state) => [
    state.randomClass,
    state.updateClass,
  ]);
  const HeroSectionImages = dynamic(() => import("./HeroSectionImages"), {
    ssr: false,
  });
  useEffect(() => {
    let intervalId: NodeJS.Timer | null = setInterval(() => {
      updateClass({
        randomClass: classArray[Math.floor(Math.random() * classArray.length)],
      });
    }, DELAY_IN_MILISECONDS);

    return () => {
      intervalId && clearInterval(intervalId);
      intervalId = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxW={"85%"} minH={"60rem"} py={"60px"}>
      <HeroSectionContent />
      <HeroSectionImages />
    </Container>
  );
}
