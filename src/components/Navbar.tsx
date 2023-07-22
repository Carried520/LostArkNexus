"use client"
import React from "react";
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
import { Separator } from "@/components/ui/separator"

interface NavbarProps {
  setSelectedClass: (selectedClass: string) => void;
  selectedClass: string;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedClass, selectedClass }) => {
  const handleButtonClick = (classItem: { name: string } | string) => {
    if (typeof classItem != "string") setSelectedClass(classItem?.name);
    else setSelectedClass(classItem);
  };

  const classArray = Object.values(classData);

  const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
  
  return (
    <NavigationMenu className="border-none">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground ">Guides</NavigationMenuTrigger>
            <NavigationMenuContent>

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-5 lg:w-[600px]">
              {classArray.map((classItem: {name : string}) => (
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="text-sm leading-tight text-foreground">
                  <AccordionTrigger>Warrior</AccordionTrigger>
                    <AccordionContent>
                      <p className={cn("cursor-pointer hover:underline")} onClick={() => handleButtonClick(classItem)}>{classItem.name}</p>
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

      

    </NavigationMenu>
  );
};

export default Navbar;
