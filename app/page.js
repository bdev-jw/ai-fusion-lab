"use client"
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Home() {
  const {setTheme}=useTheme()
  return (
    <div>
      <h2></h2>
      <Button>sub</Button>
      <Button onClick={()=>setTheme('dark')}>DARK MODE</Button>
      <Button onClick={()=>setTheme('light')}>LIGHT MODE</Button>
    </div>
  );
}
