import React, { useEffect } from 'react';
import classData from "../data/classData.json"

interface NavbarProps {
  setSelectedClass: (selectedClass: string) => void;
  selectedClass: string;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedClass, selectedClass }) => {

  const handleButtonClick = (classItem: any) => {
    setSelectedClass(classItem.name);
  };

  const classArray = Object.values(classData);

  return (
    <nav>
      <button style={{color: 'white', marginRight: '10px'}} onClick={() => handleButtonClick('')}>Return to Home</button>
      <ul>
        {classArray.map((classItem: any) => (
          <li key={classItem.name}>
            <button
              style={{ color: "white", marginRight: "10px" }}
              onClick={() => handleButtonClick(classItem)}
            >
              {classItem.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;