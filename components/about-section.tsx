"use client"

import { useState } from "react"
import Image from "next/image"
import { Rocket, Satellite, Globe, GraduationCap, Briefcase, ChevronRight, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type StreamKey = "upstream" | "midstream" | "downstream"

const marketIndicators = [
  { label: "Global Geospatial Market", value: "$100B+" },
  { label: "Global Geo-AI Analytics Market", value: "$470B+" },
  { label: "India Geospatial-AI Market", value: "$12.75B+" },
]

const streams = [
  {
    key: "upstream" as StreamKey,
    label: "Upstream",
    icon: Rocket,
    schoolName: "School of Space Manufacturing",
    tagline: "Engineering Orbital Infrastructure",
    marketSize: "$250\u2013300 Billion",
    description:
      "Satellite manufacturing & launch systems. Focused on satellite design, subsystem integration, launch systems, space-grade materials, robotics, and orbital infrastructure engineering.",
    heroImage: "/images/main1.jpg",
    focusAreas: [
      { title: "Satellite Subsystem Integration", image: "/images/Satellite Subsystem Integration.jpg" },
      { title: "Aerospace Structural Systems", image: "/images/Aerospace Structural Systems.jpg" },
      { title: "Payload Integration & Validation", image: "/images/Payload Integration & Validation.jpg" },
    ],
    academicPathways: [
      { degree: "B.Voc \u2013 Space Manufacturing", university: "Kalinga University", image: "/images/space manufacturing.jpg" },
      { degree: "B.Voc \u2013 Manufacturing", university: "Kalinga University", image: "/images/Manufacturing.jpg" },
    ],
    careerRoles: [
      "Space Manufacturing Engineer",
      "Satellite Integration Engineer",
      "Launch Systems Engineer",
      "Aerospace Production Specialist",
    ],
  },
  {
    key: "midstream" as StreamKey,
    label: "Midstream",
    icon: Satellite,
    schoolName: "School of Satellite Communication",
    tagline: "Sustaining Global Connectivity",
    marketSize: "$300\u2013350 Billion",
    description:
      "Satellite communication & infrastructure. Covers satellite communication architecture, ground stations, mission control, signal processing, and secure global connectivity infrastructure.",
    heroImage: "/images/midstream.jpg",
    focusAreas: [
      { title: "Ground Station Engineering", image: "/images/Ground Station Engineering.jpg" },
      { title: "Mission Control Systems", image: "/images/mcs.jpg" },
      { title: "Network & Signal Processing", image: "/images/Network & Signal Processing.jpg" },
    ],
    academicPathways: [
      { degree: "B.Voc \u2013 Satellite Communication Technology", university: "Aurora University, Hyderabad", image: "/images/B.Voc Satillite Communication Technology.jpg" },
    ],
    careerRoles: [
      "Satellite Operations Engineer",
      "Telecom Systems Architect",
      "Network Infrastructure Specialist",
    ],
  },
  {
    key: "downstream" as StreamKey,
    label: "Downstream",
    icon: Globe,
    schoolName: "School of Remote Sensing, GIS & Geo-AI",
    tagline: "Intelligence from Orbit",
    marketSize: "$400\u2013450 Billion",
    description:
      "GIS, Geo-AI & digital twin ecosystems. Transforms satellite data into insights using GIS, remote sensing, Geo-AI, digital twins, climate intelligence, and spatial analytics.",
    heroImage: "/images/Main Image.jpg",
    focusAreas: [
      { title: "GIS & Spatial Analytics", image: "/images/GIS &Spatial Analytics.jpg" },
      { title: "Geo-AI & Machine Learning", image: "/images/Geo-AI & Machine Learning.jpg" },
      { title: "Digital Twin Ecosystems", image: "/images/Digital Twin Ecosystems.jpg" },
    ],
    academicPathways: [
      { degree: "M.Sc / M.Tech / Ph.D \u2013 Remote Sensing & GIS", university: "SHAUT University", image: "/images/rsg.jpg" },
      { degree: "B.Voc \u2013 Information Technology", university: "Kalinga University", image: "/images/B.Voc Information Technology.jpg" },
      { degree: "B.Voc \u2013 Software Development", university: "Kalinga University", image: "/images/sd.jpg" },
      { degree: "B.Voc \u2013 Data Science", university: "Kalinga University", image: "/images/B.Voc Data Science.jpg" },
      { degree: "B.Voc \u2013 Cyber Security", university: "Kalinga University", image: "/images/B.Voc Cyber Security.jpg" },
      { degree: "B.Voc \u2013 Robotics", university: "Kalinga University", image: "/images/B.Voc Robotics.jpg" },
    ],
    careerRoles: [
      "Geo-AI Engineer",
      "Spatial Data Scientist",
      "Digital Twin Architect",
      "Remote Sensing Specialist",
    ],
  },
]

function FocusAreaCard({ title, image }: { title: string; image: string }) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-sm font-semibold leading-snug text-white">{title}</h4>
        </div>
      </div>
    </Card>
  )
}

function AcademicPathwayCard({
  degree,
  university,
  image,
}: {
  degree: string
  university: string
  image: string
}) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={image}
          alt={university}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Badge className="mb-1.5 bg-primary/90 text-primary-foreground text-[10px]">
            <GraduationCap className="mr-1 h-3 w-3" />
            {university}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm font-semibold leading-snug text-foreground">{degree}</p>
      </CardContent>
    </Card>
  )
}

export function AboutSection() {
  const [activeStream, setActiveStream] = useState<StreamKey>("upstream")

  const current = streams.find((s) => s.key === activeStream)!
  const Icon = current.icon

  return (
    <section id="about" className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Space Value Chain
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            About SpaceTech Academy
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            We operate across the complete space ecosystem &mdash; from building
            satellites to transforming data into intelligence. Explore our three
            schools spanning Upstream, Midstream, and Downstream sectors of the
            global space industry.
          </p>
        </div>

        {/* Market Indicators */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {marketIndicators.map((item) => (
            <Card key={item.label} className="border-border bg-background">
              <CardContent className="flex items-center gap-3 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mb-10 text-center text-sm font-medium text-muted-foreground">
          The demand for skilled professionals across these domains continues to
          accelerate.
        </p>

        {/* Stream Selector */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {streams.map((stream) => {
            const StreamIcon = stream.icon
            const isActive = activeStream === stream.key
            return (
              <button
                key={stream.key}
                onClick={() => setActiveStream(stream.key)}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border text-foreground hover:bg-muted"
                )}
              >
                <StreamIcon className="h-4 w-4" />
                {stream.label}
                <Badge
                  variant="secondary"
                  className={cn(
                    "ml-1 text-[10px]",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {stream.marketSize}
                </Badge>
              </button>
            )
          })}
        </div>

        {/* Stream Hero Card */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-border bg-background">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto lg:min-h-[360px]">
              <Image
                src={current.heroImage}
                alt={current.schoolName}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <Badge
                variant="outline"
                className="mb-3 w-fit text-xs text-primary border-primary/30"
              >
                {current.label} Sector
              </Badge>

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    {current.schoolName}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {current.tagline}
                  </h3>
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-muted-foreground">
                {current.description}
              </p>

              <Button size="sm" className="w-fit" asChild>
                <a href="#programs">
                  Explore Programs{" "}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mb-12">
          <h3 className="mb-6 text-center font-serif text-xl font-bold text-foreground">
            Focus Areas
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {current.focusAreas.map((area) => (
              <FocusAreaCard key={area.title} title={area.title} image={area.image} />
            ))}
          </div>
        </div>

        {/* Academic Pathways - Image Cards */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="text-center font-serif text-xl font-bold text-foreground">
              Academic Pathways
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {current.academicPathways.map((path) => (
              <AcademicPathwayCard
                key={path.degree}
                degree={path.degree}
                university={path.university}
                image={path.image}
              />
            ))}
          </div>
        </div>

        {/* Career Roles */}
        <Card className="border-border bg-background">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-lg font-bold text-foreground">
                Career Roles
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {current.careerRoles.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                >
                  <ChevronRight className="h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
