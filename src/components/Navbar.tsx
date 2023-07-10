'use client'
import React, { useEffect } from 'react';

interface NavbarProps {
  setSelectedClass: (selectedClass: string) => void;
  selectedClass: string;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedClass, selectedClass }) => {

  const handleButtonClick = (classValue: string) => {
    setSelectedClass(classValue);
  };

  useEffect(() => {
    console.log(selectedClass);
  }, [selectedClass]);

  return (
    <nav>
      <button style={{color: 'white', marginRight: '10px'}} onClick={() => handleButtonClick('Machinist')}>Machinist</button>
      <button style={{color: 'white', marginRight: '10px'}} onClick={() => handleButtonClick('Reaper')}>Reaper</button>
      <button style={{color: 'white', marginRight: '10px'}} onClick={() => handleButtonClick('Paladin')}>Paladin</button>
    </nav>
  );
};

export default Navbar;