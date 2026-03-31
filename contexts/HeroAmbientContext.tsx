"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Value = {
  /** True after hero idle timer (copy faded); Hero resets on scroll/unmount. */
  ambient: boolean;
  setAmbient: (v: boolean) => void;
};

const HeroAmbientContext = createContext<Value | null>(null);

export function HeroAmbientProvider({ children }: { children: ReactNode }) {
  const [ambient, setAmbient] = useState(false);
  const value = useMemo(() => ({ ambient, setAmbient }), [ambient]);
  return (
    <HeroAmbientContext.Provider value={value}>{children}</HeroAmbientContext.Provider>
  );
}

export function useHeroAmbient() {
  return useContext(HeroAmbientContext)?.ambient ?? false;
}

export function useHeroAmbientSetter() {
  return useContext(HeroAmbientContext)?.setAmbient;
}
