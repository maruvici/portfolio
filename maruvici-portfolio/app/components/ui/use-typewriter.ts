"use client";

import { useEffect, useRef, useState } from "react";

interface UseTypewriterOptions {
  strings: string[];
  typingSpeed?: number;   // ms per character when typing
  deletingSpeed?: number; // ms per character when deleting
  pauseAfter?: number;    // ms to pause at full string before deleting
}

export function useTypewriter({
  strings,
  typingSpeed  = 90,
  deletingSpeed = 50,
  pauseAfter   = 1800,
}: UseTypewriterOptions): string {
  const [displayed, setDisplayed] = useState("");
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef  = useRef(false);
  const timerRef     = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (strings.length === 0) return;

    const tick = () => {
      const target   = strings[roleIndexRef.current];
      const deleting = deletingRef.current;

      if (!deleting) {
        // Typing forward
        const next = charIndexRef.current + 1;
        setDisplayed(target.slice(0, next));
        charIndexRef.current = next;

        if (next === target.length) {
          // Finished typing — pause then start deleting
          deletingRef.current = true;
          timerRef.current = setTimeout(tick, pauseAfter);
          return;
        }
        timerRef.current = setTimeout(tick, typingSpeed);
      } else {
        // Deleting backward
        const next = charIndexRef.current - 1;
        setDisplayed(target.slice(0, next));
        charIndexRef.current = next;

        if (next === 0) {
          // Finished deleting — move to next string
          deletingRef.current = false;
          roleIndexRef.current = (roleIndexRef.current + 1) % strings.length;
          timerRef.current = setTimeout(tick, typingSpeed);
          return;
        }
        timerRef.current = setTimeout(tick, deletingSpeed);
      }
    };

    timerRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — strings are stable from data layer

  return displayed;
}