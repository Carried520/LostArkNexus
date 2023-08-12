"use client";
import React from "react";
import Link from "next/link";
import classData from "../data/classData.json";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import {useRouter } from "next/navigation";


const Navbar: React.FC = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = React.useState(false);

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
    <NavigationMenu className="ml-8 my-6">
      <NavigationMenuList  className="space-x-3">
        <NavigationMenuItem className="relative">
          <Image
            sizes="(min-width: 1200px) 100%"
            priority
            fill
            className={cn("cursor-pointer object-cover relative")}
            src="/loa-nav.png"
            alt="Home"
            onClick={() => router.push('/')}
          />
        </NavigationMenuItem>
        <NavigationMenuItem  onMouseEnter={() => setMenuOpen(true)} onTouchStart={() => setMenuOpen(!menuOpen)}>
          <NavigationMenuTrigger onPointerMove={(e) => e.preventDefault()} onPointerLeave={(e) => e.preventDefault()} className="text-foreground font-cla  ssSubheader text-lg">Guides</NavigationMenuTrigger>
          {menuOpen && (
            <NavigationMenuContent onPointerMove={(e) => e.preventDefault()} onPointerLeave={(e) => e.preventDefault()}  data-state={menuOpen}>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] lg:w-[300px]">
                {Array.from(categoryMap.entries()).map(([category, filteredClasses]) => (
                  <Accordion key={category} type="single" collapsible>
                    <AccordionItem value={category} className="text-sm leading-tight text-foreground">
                      <AccordionTrigger>{category}</AccordionTrigger>
                      <AccordionContent>
                        {filteredClasses.map((filteredClassItem: { name: string }, index: number) => (
                          <p
                            key={index.toString()}
                            className={cn("cursor-pointer hover:underline")}
                            onClick={() => {
                              router.push(`/guides/${filteredClassItem.name}`)
                              setMenuOpen(false);
                            }}
                            onTouchEnd={() => {
                              router.push(`/guides/${filteredClassItem.name}`)
                              setMenuOpen(false);
                            }}
                          >
                            {filteredClassItem.name}
                          </p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </ul>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>

        <NavigationMenuItem  className={`text-foreground font-classSubheader text-lg ${navigationMenuTriggerStyle()}`}>
          <Link href="/lfg">LFG</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;