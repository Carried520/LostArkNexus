import type { NextPage } from "next";
import React, { useState } from "react";
import styles from "./index.module.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClassComponent from "@/components/ClassComponent";
import { Button } from "@/components/ui/button";

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