"use client";
import React from "react";
import ClassComponentRoot from "./ClassComponentRoot";
import ClassComponentContent from "./ClassComponentContent";

type ClassComponentProps = {
  selectedClass: string;
};

const ClassComponent: React.FC<ClassComponentProps> = ({ selectedClass }) => {
  return (
    <ClassComponentRoot selectedClass={selectedClass}>
      <ClassComponentContent selectedClass={selectedClass} />
    </ClassComponentRoot>
  );
};

export default ClassComponent;
