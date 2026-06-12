"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface SkillFilterContextValue {
  selected: Set<string>;
  toggleSkill: (skill: string) => void;
  clearFilters: () => void;
  isSelected: (skill: string) => boolean;
}

const SkillFilterContext = createContext<SkillFilterContextValue | null>(null);

export function SkillFilterProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleSkill = useCallback((skill: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(skill)) {
        next.delete(skill);
      } else {
        next.add(skill);
      }
      return next;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setSelected(new Set());
  }, []);

  const isSelected = useCallback(
    (skill: string) => selected.has(skill),
    [selected]
  );

  return (
    <SkillFilterContext.Provider
      value={{ selected, toggleSkill, clearFilters, isSelected }}
    >
      {children}
    </SkillFilterContext.Provider>
  );
}

export function useSkillFilter(): SkillFilterContextValue {
  const ctx = useContext(SkillFilterContext);
  if (!ctx)
    throw new Error("useSkillFilter must be used inside <SkillFilterProvider>");
  return ctx;
}