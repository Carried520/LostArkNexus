"use client";
import classData from "../../data/classData.json";
import { useEffect} from "react";
import dynamic from "next/dynamic";
import { Container } from "@chakra-ui/react";
import HeroSectionContent from "./HeroSectionContent";
import { useStore } from "@/Store/RandomClassStore";


export default function HeroSection() {
  const classArray = Object.values(classData);
  const DELAY_IN_MILISECONDS = 30_000;  
  const [ , updateClass] = useStore((state) => [state.randomClass , state.updateClass]);
  const HeroSectionImages = dynamic(() => import('./HeroSectionImages') , {ssr : false })
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateClass({randomClass : classArray[Math.floor(Math.random() * classArray.length)]});
    }, DELAY_IN_MILISECONDS);

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Container maxW={"85%"} minH={"60rem"} py={"60px"}>
        <HeroSectionContent/>
        <HeroSectionImages/>
    </Container>
    
  );
}
