import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { TerminalProvider } from "@/app/context/TerminalContext";
import { SkillFilterProvider } from "@/app/context/SkillFilterContext";
import AppShell from "@/app/components/layout/AppShell";
import LoadingScreen from "@/app/components/ui/LoadingScreen";

export const metadata: Metadata = {
  title: "Maruvici — Portfolio",
  description: "Automation Engineer & Software Developer based in the Philippines.",
  keywords: ["portfolio", "software developer", "automation engineer", "Next.js", "TypeScript"],
  authors: [{ name: "Mav" }],
  openGraph: {
    title: "Maruvici — Portfolio",
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
        <LoadingScreen />
        <ThemeProvider>
          <TerminalProvider>
            <SkillFilterProvider>
              <AppShell>
                {children}
              </AppShell>
            </SkillFilterProvider>
          </TerminalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}