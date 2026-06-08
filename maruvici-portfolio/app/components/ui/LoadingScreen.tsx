"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { BOOT_LINES } from "@/data/terminal";

type LoaderPhase = "booting" | "done" | "dismissed";

export default function LoadingScreen() {
  const [phase, setPhase]          = useState<LoaderPhase>("booting");
  const [visibleLines, setVisible] = useState<string[]>([]);
  const [barWidth, setBarWidth]    = useState(0);
  const [doneVisible, setDoneVis]  = useState(false);
  const lineIndexRef               = useRef(0);
  const timerRef                   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    setPhase("dismissed");
    sessionStorage.setItem("portfolio-booted", "1");
  }, []);

//   // Skip loader if already booted this session
//   useEffect(() => {
//     if (sessionStorage.getItem("portfolio-booted")) {
//       setPhase("dismissed");
//     }
//   }, []);

  // Boot line ticker
  useEffect(() => {
    if (phase !== "booting") return;

    const tick = () => {
      const i = lineIndexRef.current;
      if (i >= BOOT_LINES.length) {
        setDoneVis(true);
        setPhase("done");
        return;
      }
      setVisible((prev) => [...prev, BOOT_LINES[i]]);
      setBarWidth(Math.round(((i + 1) / BOOT_LINES.length) * 100));
      lineIndexRef.current = i + 1;

      const delay = i === BOOT_LINES.length - 2 ? 500 : 180;
      timerRef.current = setTimeout(tick, delay);
    };

    timerRef.current = setTimeout(tick, 300);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [phase]);

  // Auto-dismiss after a 3s pause once done
  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(dismiss, 3000);
    return () => clearTimeout(t);
  }, [phase, dismiss]);

  // Keyboard / click to dismiss once boot is done
  useEffect(() => {
    if (phase !== "done") return;
    const handler = () => dismiss();
    window.addEventListener("keydown", handler);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("click", handler);
    };
  }, [phase, dismiss]);

  // Early return for dismissed — after this point phase is "booting" | "done"
  if (phase === "dismissed") return null;

  // Derive values from non-dismissed phase safely
  const isDone    = phase === "done";
  const opacity   = 1; // always 1 while mounted; unmount handles the fade
  const cursorStyle: React.CSSProperties["cursor"] = isDone ? "pointer" : "default";

  return (
    <div
      id="loader"
      onClick={isDone ? dismiss : undefined}
      style={{ opacity, transition: "opacity 0.6s ease", cursor: cursorStyle }}
      aria-live="polite"
      aria-label="Portfolio loading"
    >
      {/* Boot text */}
      <div id="loader-text" aria-hidden="true">
        {visibleLines.map((line, i) => (
          <div key={i} style={{ minHeight: "1.2em" }}>
            {line || "\u00A0"}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div
        id="loader-bar-wrap"
        role="progressbar"
        aria-valuenow={barWidth}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div id="loader-bar" style={{ width: `${barWidth}%` }} />
      </div>

      {/* Press any key hint */}
      <div
        id="loader-done"
        style={{ opacity: doneVisible ? 1 : 0 }}
        aria-hidden={!doneVisible}
      >
        [ Press any key or click to continue... ]
      </div>
    </div>
  );
}