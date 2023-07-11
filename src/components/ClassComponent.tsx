import React from "react";
import classData from "../data/classData.json"

interface ClassComponentProps {
  selectedClass: keyof typeof classData;
}

const ClassComponent: React.FC<ClassComponentProps> = ({ selectedClass }) => {
  const { name, description, role, difficulty, range } = classData[selectedClass];

  return (
    <div>
      <p style={{color: 'grey'}}>Name: {name}</p>
      <p style={{color: 'grey'}}>Description: {description}</p>
      <p style={{color: 'grey'}}>Role: {role}</p>
      <p style={{color: 'grey'}}>Difficulty: {difficulty}</p>
      <p style={{color: 'grey'}}>Range: {range}</p>
    </div>
  );
};

export default ClassComponent;