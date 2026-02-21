"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Building2, Award } from "lucide-react"

const stats = [
  { icon: Users, value: "5,000+", label: "Students" },
  { icon: GraduationCap, value: "18+", label: "Programs" },
  { icon: Building2, value: "50+", label: "Partners" },
  { icon: Award, value: "95%", label: "Placement" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0b1d3a]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,107,212,0.25)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,107,212,0.15)_0%,_transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left content */}
          <div className="flex-1 pt-4">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#3b9aed]">
              SpaceEdTech - Empowering Future Innovators
            </p>

            <h1 className="mb-6 font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Empowering the Next Generation of SpaceTech & Geospatial Innovators
              </span>
            </h1>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-[#94b8db]">
              Career-focused B.Voc programs aligned with industry, government,
              and future technologies. Join 5,000+ students building tomorrow's
              innovations today.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#programs">Explore Programs</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#3b5998] bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#about">Learn More</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm"
                >
                  <s.icon className="mx-auto mb-1 h-5 w-5 text-[#3b9aed]" />
                  <p className="text-xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-[#94b8db]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry form */}
          <div id="enquiry" className="w-full lg:w-[370px]">
            <Card className="border-0 bg-card shadow-xl overflow-hidden">
              <CardHeader className="pb-1">
                <CardTitle className="text-center text-xl font-semibold text-foreground">
                  Admission Enquiry
                </CardTitle>
                <p className="text-center text-xs text-muted-foreground">
                  We will get back to you shortly
                </p>
              </CardHeader>

              <CardContent className="p-0 overflow-hidden">
                <div className="scale-[0.1] origin-top"></div>
                <iframe
                  src="https://login.winmeeto.com/widget/form/69980b9661f22"
                  title="Admission Enquiry Form"
                  className="w-full h-[490px] border-0 rounded-md overflow-hidden"
                  scrolling="no"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}