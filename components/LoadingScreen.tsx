"use client";

import { useState } from "react";
import TerminalLoader from "@/components/TerminalLoader";
import { useLoading } from "@/context/LoadingContext";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const { setLoaded } = useLoading();

  if (!visible) return null;

  return (
    <TerminalLoader
      onComplete={() => {
        setVisible(false);
        setLoaded();
      }}
    />
  );
}
