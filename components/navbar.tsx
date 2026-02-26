"use client"

import { useState } from "react"
import { Menu, X, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Partners", href: "#partners" },
  { label: "Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Rocket className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            SpaceTech Academy
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#enquiry">Apply Now</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild size="sm" className="w-full">
                <a href="#enquiry" onClick={() => setOpen(false)}>
                  Apply Now
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
