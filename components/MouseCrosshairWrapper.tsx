"use client";
import { useEffect, useState } from "react";
import MouseCrosshair from "@/components/MouseCrosshair";

// Only renders MouseCrosshair on desktop
export default function MouseCrosshairWrapper() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  if (isMobile) return null;
  return <MouseCrosshair />;
}
