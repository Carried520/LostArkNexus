//import { redirect } from "next/navigation"

//{export default async function Home(){
    
   //redirect("https://docs.google.com/document/d/1APWVyq77z2flMCc06_cqUnrNKee1U99p7R4XZe5FYV0/edit")
//}
'use client'
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Box } from "./components/Box";

const Page = () => {
  useEffect(() => {
    const app = document.getElementById("app");
    if (app) {
      ReactDOM.render(<Box />, app);
    }
  }, []);

  return <div id="app"></div>;
};

export default Page;