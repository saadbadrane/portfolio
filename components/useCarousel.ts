import { useEffect, useRef, useState } from "react";

export function useCarousel(length: number, interval = 2500) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timer.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % length);
      }, interval);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [isPaused, length, interval]);

  const goTo = (i: number) => setIndex(i);
  const next = () => setIndex((prev) => (prev + 1) % length);
  const prev = () => setIndex((prev) => (prev - 1 + length) % length);

  return {
    index,
    setIndex: goTo,
    next,
    prev,
    isPaused,
    setIsPaused,
  };
}
