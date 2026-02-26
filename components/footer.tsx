"use client"

import { Rocket, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Partners", href: "#partners" },
  { label: "Stories", href: "#stories" },
]

const programs = [
  "B.Voc Robotics",
  "B.Voc Data Science",
  "B.Voc Cyber Security",
  "M.Sc Remote Sensing & GIS",
  "Ph.D Programs",
]

export function Footer() {
  return (
    <footer className="bg-[#0b1d3a] text-[#94b8db]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Rocket className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-lg font-bold text-white">
                SpaceTech Academy
              </span>
            </div>

            <p className="text-sm leading-relaxed">
              Empowering the next generation of innovators through
              career-focused education and industry partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Popular Programs
            </h4>

            <ul className="flex flex-col gap-2.5">
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#programs"
                    className="text-sm transition-colors hover:text-white"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>

            <ul className="flex flex-col gap-3">
              {/* Address 1 */}
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                D1210, Jain Carlton Creek (JCC), Gachibowli, Hyderabad
              </li>

              {/* Address 2 */}
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Govt. ITI Campus, Mallepally, Hyderabad
              </li>

              {/* Address 3 */}
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Govt. Polytechnic for Women, Secunderabad
              </li>

              {/* Email */}
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@spaceedtech.com
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +91 9100885674
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} SpaceEdTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
