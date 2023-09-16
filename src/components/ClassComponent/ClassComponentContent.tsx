import classData from "../../data/classData.json";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

type ContentProps = {
  selectedClass: string;
};

export const getClassInfo = (selectedClass: string) => {
  const selectedKey = selectedClass as keyof typeof classData;
  const { name, description, icon, color, links } = classData[selectedKey];
  return { name, description, icon, color, links };
};

export default function ClassComponentContent({ selectedClass }: ContentProps) {
  if (!(selectedClass in classData)) return;
  const { name, description, icon, color, links } = getClassInfo(selectedClass);
  return (
    <div className="grid h-screen grid-cols-3">
      <div className="md relative 2xs:col-span-3 sm:col-span-2">
        <div className="flex flex-col items-center justify-end sm:h-1/5 lg:h-1/3">
          <p className="font-classTitle text-xl uppercase text-white xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
            {name}
          </p>
        </div>
        <div className="flex h-full flex-col bg-classbg py-5">
          <Separator className="w-4/5 place-self-center bg-gray-700" />
          <p className="pt-2 text-left font-classSubheader uppercase text-white 2xs:mx-8 sm:mx-16 xl:mx-28 xl:text-base 2xl:mx-36 2xl:text-3xl">
            Introduction
          </p>
          <p className="pb-2 pt-0.5 text-left font-body text-white 2xs:mx-8 2xs:text-2xs sm:mx-16 sm:text-xs lg:text-sm xl:mx-28 2xl:mx-36">
            {description}
          </p>
          <Separator className="w-4/5 place-self-center bg-gray-700" />
          <div className="relative my-5 grid font-body 2xs:mx-2 2xs:gap-2 sm:mx-auto sm:grid-cols-2 md:gap-3 lg:grid-cols-3">
            {links?.map((linkItem, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center px-4 2xs:mx-auto 2xs:border-b-2 2xs:border-r-0 2xs:border-gray-700 sm:ml-auto sm:mr-0 sm:border-b-0 sm:border-r-2 md:text-center">
                  <p className="m-auto flex items-center text-center font-medium text-white hover:underline 2xs:text-xs xl:text-sm">
                    <FaLink className="mr-2" />
                    <Link href={linkItem.link} target="_blank">
                      {linkItem.linkname}
                    </Link>
                  </p>
                </div>
                <div className="lg:mr-30 pl-2 2xs:mx-auto sm:ml-0 sm:mr-auto lg:col-span-2">
                  <p className="font-thin text-white 2xs:text-2xs md:text-xs xl:text-sm">
                    {linkItem.linkdescription}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="relative 2xs:hidden sm:block">
        <Image
          loading="eager"
          priority
          fill
          className="absolute inset-0 right-10 z-10 h-5/6 w-5/6 object-contain md:translate-x-12 lg:translate-x-14 xl:translate-x-20"
          src={icon}
          alt=""
        />
        <div className="xs:h-fit sm:h-1/6 md:h-1/5 lg:h-1/3"></div>
        <div
          className="-z-20 h-screen w-screen transform xs:translate-x-20 xs:skew-x-0 sm:translate-x-20 sm:skew-x-12 xl:translate-x-20"
          style={{ backgroundColor: color }}
        ></div>
        <div className="absolute bottom-0 -z-10 w-screen bg-classbg xs:h-full md:h-4/5 lg:h-2/3"></div>
      </div>
    </div>
  );
}
