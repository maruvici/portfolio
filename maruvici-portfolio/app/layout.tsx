import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { TerminalProvider } from "@/app/context/TerminalContext";
import { SkillFilterProvider } from "@/app/context/SkillFilterContext";
import AppShell from "@/app/components/layout/AppShell";
import LoadingScreen from "@/app/components/ui/LoadingScreen";
import FloatingTerminal from "@/app/components/ui/FloatingTerminal";

export const metadata: Metadata = {
  title: "Mark — Portfolio",
  description: "Automation Engineer & Software Developer based in the Philippines.",
  keywords: ["portfolio", "software developer", "automation engineer", "Next.js", "TypeScript"],
  authors: [{ name: "Mark" }],
  openGraph: {
    title: "Mark — Portfolio",
    description: "Automation Engineer & Software Developer based in the Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Loading screen renders above everything, dismisses itself after boot sequence */}
        <LoadingScreen />

        <ThemeProvider>
          <TerminalProvider>
            <SkillFilterProvider>
              <AppShell>
                {children}
              </AppShell>
              <FloatingTerminal />
            </SkillFilterProvider>
          </TerminalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}