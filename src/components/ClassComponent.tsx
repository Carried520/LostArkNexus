/* eslint-disable @next/next/no-img-element */
import React from "react";
import classData from "../data/classData.json";
import { Separator } from "@/components/ui/separator"
import Link from 'next/link';

interface ClassComponentProps {
  selectedClass: string;
}

interface ClassData {
  name: string;
  description: string;
  icon: string;
  color: string;
  hover: string;
  links?: {
    link: string;
    linkdescription: string;
  }[];
}

const ClassComponent: React.FC<ClassComponentProps> = ({ selectedClass }) => {
  if (!(selectedClass in classData)) return;
  const selectedKey = selectedClass as keyof typeof classData;
  const { name, description, icon, color, links } = classData[selectedKey];

  return (
<div>
  <div className="grid grid-cols-3 h-screen">
    <div className="sm:col-span-2 2xs:col-span-3 md relative">
      <div className="lg:h-1/3 sm:h-1/5 flex flex-col justify-end items-center">
        <p className="text-white text-xl font-classTitle uppercase lg:text-6xl md:text-5xl sm:text-4xl xs:text-4xl">
          {name}
        </p>
      </div>
      <div className="bg-classbg h-full flex flex-col py-5">
        <Separator className="w-4/5 bg-gray-700 place-self-center"/>
            <p className="text-white text-left xl:text-base 2xl:text-3xl font-classSubheader pt-2 2xl:mx-36 xl:mx-28 sm:mx-16 2xs:mx-8 uppercase">
              Introduction
            </p>
            <p className="text-white lg:text-sm sm:text-xs 2xs:text-2xs text-left font-body pt-0.5 pb-2 2xl:mx-36 xl:mx-28 sm:mx-16 2xs:mx-8">
              {description}
            </p>
        <Separator className="w-4/5 bg-gray-700 place-self-center" />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-3 2xs:gap-1 my-5 relative font-body 2xs:mx-2 sm:mx-auto">
          {links?.map((linkItem, index) => (
            <React.Fragment key={index}>
              <div className="2xs:border-r-0 2xs:border-b-2 sm:border-b-0 sm:border-r-2 2xs:border-gray-700 px-4 2xs:mx-auto sm:ml-auto sm:mr-0 flex items-center md:text-center">
                <p className="text-white xl:text-sm 2xs:text-xs text-center hover:underline font-medium m-auto">
                  <Link href={linkItem.link} target="_blank">{linkItem.linkname}</Link>
                </p>
              </div>
              <div className="lg:col-span-2 lg:mr-30 sm:mr-auto sm:ml-0 2xs:mx-auto pl-2">
                <p className="text-white xl:text-sm md:text-xs 2xs:text-2xs font-thin">{linkItem.linkdescription}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    
    <div className="relative 2xs:hidden sm:block">
      <img className="absolute h-5/6 w-5/6 object-contain z-10 inset-0 right-10 xl:translate-x-20 lg:translate-x-14 md:translate-x-12" src={icon} alt="" />
      <div className="lg:h-1/3 md:h-1/5 sm:h-1/6 xs:h-fit"></div>
      <div className="sm:skew-x-12 xs:skew-x-0 h-screen w-screen -z-20 transform xs:translate-x-20 sm:translate-x-20 xl:translate-x-20" style={{backgroundColor: color}}></div>
      <div className="absolute bottom-0 bg-classbg w-screen lg:h-2/3 md:h-4/5 xs:h-full -z-10"></div>
    </div>
  </div>
</div>
  );
};

export default ClassComponent;
