'use client';


import Image from "next/image";
import Terminal from "./Components/Terminal";
import Dnd from "./Components/Dnd";
import ContentEditable from "./Components/ContentEditable";
import { useState } from "react";
import EditableText from "./Components/ContentEditable";

export default function Home() {
  const handleSave = (newText: string) => {
    console.log("Saved text:", newText);
  };
  return (
    <>
        <Dnd/>
        <EditableText initialText="Edit me!" onSave={handleSave} />
    </>
  );
}
