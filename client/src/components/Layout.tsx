/**
 * Layout.tsx — Shared page shell.
 * Wraps every page with the Navbar at the top and a footer at the
 * bottom so they are not repeated in each page component.
 */

import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import { personalInfo } from "@/data/portfolioData";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />

      {/* Outlet renders whichever page matches the current route */}
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Logo size={28} />
            <span className="text-sm text-slate-400">
              {personalInfo.fullName} — COMP229 Portfolio
            </span>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {personalInfo.fullName}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
