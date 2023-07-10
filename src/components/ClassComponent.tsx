import React from "react";

interface ClassComponentProps {
  selectedClass: string;
}

const classData: Record<string, { description: string, role?: string, difficulty?: string, range?: string }> = {
  Reaper: {
    description: "This is the description for Reaper.",
    role: "DPS",
    difficulty: "Advanced",
    range: "Melee"
  },
  Machinist: {
    description: "This is the description for Machinist.",
    role: "DPS",
    difficulty: "Intermediate",
    range: "Hybrid"
  },
  Paladin: {
    description: "This is the description for Paladin.",
    role: "Support",
    difficulty: "Easy",
    range: "Ranged"
  }
};

const ClassComponent: React.FC<ClassComponentProps> = ({ selectedClass }) => {
  const { description, role, difficulty, range } = classData[selectedClass];

  return (
    <div>
      <p style={{color: 'grey'}}>Description: {description}</p>
      <p style={{color: 'grey'}}>Role: {role}</p>
      <p style={{color: 'grey'}}>Difficulty: {difficulty}</p>
      <p style={{color: 'grey'}}>Range: {range}</p>
    </div>
  );
};

export default ClassComponent;