"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface TerminalContextValue {
  isOpen: boolean;
  openTerminal: () => void;
  closeTerminal: () => void;
  toggleTerminal: () => void;
}

const TerminalContext = createContext<TerminalContextValue | null>(null);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openTerminal  = () => setIsOpen(true);
  const closeTerminal = () => setIsOpen(false);
  const toggleTerminal = () => setIsOpen((prev) => !prev);

  return (
    <TerminalContext.Provider
      value={{ isOpen, openTerminal, closeTerminal, toggleTerminal }}
    >
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal(): TerminalContextValue {
  const ctx = useContext(TerminalContext);
  if (!ctx)
    throw new Error("useTerminal must be used inside <TerminalProvider>");
  return ctx;
}