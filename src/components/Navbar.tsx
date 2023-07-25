"use client"
import React, { useState } from "react";
import Link from 'next/link';
import classData from "../data/classData.json";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface NavbarProps {
  setSelectedClass: (selectedClass: string) => void;
  selectedClass: string;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedClass, selectedClass }) => {
  const handleButtonClick = (classItem: { name: string } | string) => {
    if (typeof classItem != "string") setSelectedClass(classItem?.name);
    else setSelectedClass(classItem);
  };

  const handleNavClick = () => {
    setSelectedClass('');
  };

  const classArray = Object.values(classData);
  const categoryMap = classArray.reduce((map, classItem) => {
    const { base } = classItem;
    if (!map.has(base)) {
      map.set(base, [classItem]);
    } else {
      map.get(base).push(classItem);
    }
    return map;
  }, new Map());

  return (
    <NavigationMenu className="mx-8 my-4">
      <NavigationMenuList className="space-x-6">
        <NavigationMenuItem>
            <img className={cn("cursor-pointer")} src="/loa-nav.png" onClick={handleNavClick}></img>
        </NavigationMenuItem>
        <NavigationMenuItem className="!border-none" >
          <NavigationMenuTrigger className="text-foreground">Guides</NavigationMenuTrigger>
            <NavigationMenuContent data-state={true}>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] lg:w-[300px]">
                {Array.from(categoryMap.entries()).map(([category, filteredClasses]) => {
                  return (
                    <Accordion
                      key={category}
                      type="single"
                      collapsible
                    >
                      <AccordionItem value={category} className="text-sm leading-tight text-foreground">
                        <AccordionTrigger>{category}</AccordionTrigger>
                          <AccordionContent>
                            {filteredClasses.map((filteredClassItem: {name:string}, index: number) => (
                            <p
                              key={index.toString()}
                              className={cn("cursor-pointer hover:underline")}
                              onClick={() => handleButtonClick(filteredClassItem)}
                            >
                              {filteredClassItem.name}
                            </p>
                            ))}
                          </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

      

    </NavigationMenu>
  );
};

export default Navbar;
