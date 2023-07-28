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
  <div className="grid grid-cols-2 h-screen min-h-fit">
    <div className="relative">
      <div className="h-1/3 flex flex-col justify-end items-center">
        <p className="text-white text-7xl font-classTitle uppercase">
          {name}
        </p>
      </div>
      <div className="bg-classbg h-2/3 flex flex-col py-5">
        <Separator className="w-4/5 bg-gray-700 place-self-center"/>
            <p className="text-white text-left text-2xl font-classSubheader pt-2 mx-28 uppercase">
              Introduction
            </p>
            <p className="text-white text-sm text-left font-body pt-0.5 pb-2 mx-28">
              {description}
            </p>
        <Separator className="w-4/5 bg-gray-700 place-self-center" />
        <div className="grid grid-cols-3 gap-4 my-5 text-sm relative font-body">
            {links?.map((linkItem, index) => (
              <React.Fragment key={index}>
                <div className="border-r-2 border-gray-700 ml-28">
                  <p className="text-white text-center hover:underline font-medium">
                    <Link href={linkItem.link} target="_blank">{linkItem.linkname}</Link>
                  </p>
                </div>
                
                <div className="col-span-2 mr-28 pl-2">
                  <p className="text-white font-thin">{linkItem.linkdescription}</p>
                </div>
              </React.Fragment>
              
            ))}
        </div>
      </div>
    </div>
    
    <div className="relative">
      <img className="absolute h-5/6 w-5/6 object-contain z-10 inset-0 right-10 transform translate-x-20" src={icon} alt="" />
      <div className="h-1/3"></div>
      <div className="skew-x-12 h-2/3 w-screen -z-10 transform translate-x-20" style={{backgroundColor: color}}></div>
      <div className="absolute bottom-0 bg-classbg w-screen h-2/3 -z-10"></div>
    </div>
  </div>
</div>
  );
};

export default ClassComponent;
