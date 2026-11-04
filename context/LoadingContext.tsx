"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  isLoaded: boolean;
  setLoaded: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoaded: false,
  setLoaded: () => {},
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const setLoaded = () => setIsLoaded(true);

  return (
    <LoadingContext.Provider value={{ isLoaded, setLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
