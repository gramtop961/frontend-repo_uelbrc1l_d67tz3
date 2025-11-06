import { useState } from 'react';
import { Gavel, Shield, Globe, Search } from 'lucide-react';

function NavLink({ label, href }) {
  return (
    <a
      href={href}
      className="text-sm md:text-base text-slate-200 hover:text-white transition-colors px-3 py-2 rounded-md"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-400 to-cyan-400 grid place-content-center">
              <Gavel className="h-5 w-5 text-slate-900" />
            </div>
            <span className="font-semibold tracking-tight">Supreme Court</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink label="About" href="#about" />
            <NavLink label="Pillars" href="#pillars" />
            <NavLink label="Highlights" href="#highlights" />
            <NavLink label="Resources" href="#resources" />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition-colors">
              <Search className="h-4 w-4" />
              Search
            </button>
            <div className="hidden sm:flex items-center gap-2 text-slate-300">
              <Shield className="h-5 w-5" />
              <Globe className="h-5 w-5" />
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              <NavLink label="About" href="#about" />
              <NavLink label="Pillars" href="#pillars" />
              <NavLink label="Highlights" href="#highlights" />
              <NavLink label="Resources" href="#resources" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
