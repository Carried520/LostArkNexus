"use client";

import classData from "../data/classData.json";
import raidData from "../data/raidData.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar: React.FC = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = React.useState(false);

  const classArray = Object.values(classData);
  const categoryClassMap = classArray.reduce((map, classItem) => {
    const { base } = classItem;
    if (!map.has(base)) {
      map.set(base, [classItem]);
    } else {
      map.get(base).push(classItem);
    }
    return map;
  }, new Map());

  const raidArray = Object.values(raidData);
  const categoryRaidMap = raidArray.reduce((map, raidItem) => {
    const { raid } = raidItem;
    if (!map.has(raid)) {
      map.set(raid, [raidItem]);
    } else {
      map.get(raid).push(raidItem);
    }
    return map;
  }, new Map());

  return (
    <NavigationMenu className="my-6 ml-8">
      <NavigationMenuList className="space-x-3">
        <NavigationMenuItem className="relative">
          <Image
            sizes="(min-width: 1200px) 100%"
            priority
            fill
            className={cn("relative cursor-pointer object-cover")}
            src="/loa-nav.png"
            alt="Home"
            onClick={() => router.push("/")}
          />
        </NavigationMenuItem>
        <NavigationMenuItem
          onMouseEnter={() => setMenuOpen(true)}
          onTouchStart={() => setMenuOpen(!menuOpen)}
        >
          <NavigationMenuTrigger
            onPointerMove={(e) => e.preventDefault()}
            onPointerLeave={(e) => e.preventDefault()}
            className="font-cla ssSubheader  text-lg text-foreground"
          >
            Class Guides
          </NavigationMenuTrigger>
          {menuOpen && (
            <NavigationMenuContent
              onPointerMove={(e) => e.preventDefault()}
              onPointerLeave={(e) => e.preventDefault()}
              data-state={menuOpen}
            >
              <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] lg:w-[300px]">
                {Array.from(categoryClassMap.entries()).map(
                  ([category, filteredClasses]) => (
                    <Accordion key={category} type="single" collapsible>
                      <AccordionItem
                        value={category}
                        className="text-sm leading-tight text-foreground"
                      >
                        <AccordionTrigger>{category}</AccordionTrigger>
                        <AccordionContent>
                          {filteredClasses.map(
                            (
                              filteredClassItem: {
                                name: string;
                                icon: string;
                              },
                              index: number
                            ) => (
                              <div
                                key={index.toString()}
                                className="mb-2 flex items-center"
                              >
                                <div className="relative mr-1 flex h-5 w-6 items-center justify-center">
                                  <Image
                                    fill
                                    objectFit="contain"
                                    src={filteredClassItem.icon}
                                    alt={filteredClassItem.name}
                                  />
                                </div>
                                <p
                                  className="cursor-pointer hover:underline"
                                  onClick={() => {
                                    router.push(
                                      `/guides/${filteredClassItem.name}`
                                    );
                                    setMenuOpen(false);
                                  }}
                                  onTouchEnd={() => {
                                    router.push(
                                      `/guides/${filteredClassItem.name}`
                                    );
                                    setMenuOpen(false);
                                  }}
                                >
                                  {filteredClassItem.name}
                                </p>
                              </div>
                            )
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`font-classSubheader text-lg text-foreground ${navigationMenuTriggerStyle()}`}
        >
          <Link href="/info/jumpstart">Jumpstart</Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`font-classSubheader text-lg text-foreground ${navigationMenuTriggerStyle()}`}
        >
          <Link href="/lfg">LFG</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
