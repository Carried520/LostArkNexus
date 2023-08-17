import * as React from "react";

interface ButtonProps<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
}

export default function CarriedButton<T extends React.ElementType = "button">({
  as,
  ...props
}:
  ButtonProps<T>
  & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) {
  const Component = as || "button";
  return <Component {...props} />;
}