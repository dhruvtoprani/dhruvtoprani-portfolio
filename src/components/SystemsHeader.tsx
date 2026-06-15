"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { profile } from "@/data/profile";

const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"]
] as const;

function GitHubMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.5 11.5 0 0 1 12 5.4c1 0 2 .1 2.9.4 2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

export function SystemsHeader() {
  const [active, setActive] = useState("#top");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = ["top", "about", "experience", "projects", "contact"];

    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);

      const current = [...sections]
        .reverse()
        .find((id) => {
          const element = document.getElementById(id);
          return element ? element.getBoundingClientRect().top <= 120 : false;
        });

      setActive(`#${current ?? "top"}`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed inset-x-0 top-1 z-50 border-b border-white/15 bg-[#080908]/92 text-white backdrop-blur-xl">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#d8ff55]"
        style={{ transform: `scaleX(${progress})` }}
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:px-8"
      >
        <a
          href="#top"
          className="flex min-h-11 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ff55]"
        >
          <span className="font-mono text-sm font-bold">DT/26</span>
          <span className="hidden h-4 w-px bg-white/25 sm:block" />
          <span className="hidden text-sm text-white/62 sm:block">
            Product · Program · Operations
          </span>
        </a>

        <div className="hidden h-full items-center gap-5 md:flex">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              aria-current={active === href ? "location" : undefined}
              className={`relative flex h-full items-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ff55] ${
                active === href
                  ? "text-[#d8ff55]"
                  : "text-white/54 hover:text-white"
              }`}
            >
              {label}
              {active === href ? (
                <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#ff3ca6]" />
              ) : null}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Dhruv Toprani on GitHub"
            className="grid h-11 w-11 place-items-center text-white/62 transition hover:bg-[#59f6ff] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d8ff55]"
          >
            <GitHubMark />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Dhruv Toprani"
            className="grid h-11 w-11 place-items-center text-white/62 transition hover:bg-[#ff3ca6] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d8ff55]"
          >
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
