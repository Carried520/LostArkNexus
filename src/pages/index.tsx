import type { NextPage } from "next";
import React, { useState } from "react";
import Link from 'next/link';
import Navbar from "@/components/Navbar";

import ClassComponent from "@/components/ClassComponent";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import('@/components/HeroSection').then((component) => component.default), {
  ssr : false
})
 
interface AppProps {
  selectedClass: string;
}

const App: NextPage<AppProps> = () => {
  const [selectedClass, setSelectedClass] = useState<string>('');
  return (
    <>

          <Navbar selectedClass={selectedClass} setSelectedClass={setSelectedClass} />

      <div>
      
        {selectedClass ? <ClassComponent selectedClass={selectedClass} /> : <HeroSection />}
      </div>   
    </>
  );
};

export default App;