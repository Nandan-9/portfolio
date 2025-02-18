'use client';


import Image from "next/image";
import Dnd from "./Components/Dnd";
import ContentEditable from "./Components/ContentEditable";
import { useState } from "react";
import EditableText from "./Components/ContentEditable";
import DraggableText from "./Components/Dragable/Dragable";
import Dashboard from "./(pages)/Dashboard";

export default function Home() {
  const handleSave = (newText: string) => {
    console.log("Saved text:", newText);
  };
  return (
    <>
    <Dashboard/>
    </>
  );
}



