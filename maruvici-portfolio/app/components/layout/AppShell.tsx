"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileTopbar from "./MobileTopbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const openSidebar  = () => setMobileSidebarOpen(true);
  const closeSidebar = () => setMobileSidebarOpen(false);

  return (
    <>
      {/* Mobile topbar — hidden on desktop via CSS */}
      <MobileTopbar onMenuOpen={mobileSidebarOpen ? closeSidebar : openSidebar} />

      {/* Sidebar overlay (mobile) */}
      {mobileSidebarOpen && (
        <div
          id="sidebar-overlay"
          className="show"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <div id="app-shell">
        <Sidebar mobileOpen={mobileSidebarOpen} onClose={closeSidebar} />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </>
  );
}