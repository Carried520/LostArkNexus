import React from "react";
import classData from "../data/classData.json";

interface ClassComponentProps {
  selectedClass: string;
}

const ClassComponent: React.FC<ClassComponentProps> = ({ selectedClass }) => {
  if (!(selectedClass in classData)) return;
  const selectedKey = selectedClass as keyof typeof classData;
  const { name, description } = classData[selectedKey];

  return (
    <div>
      <p style={{ color: "grey" }}>Name: {name}</p>
      <p style={{ color: "grey" }}>Description: {description}</p>
    </div>
  );
};

export default ClassComponent;
