"use client"

import Image from "next/image"
import { TrendingUp, ChevronRight, Rocket, Satellite, Globe } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/* -------------------- DATA -------------------- */

const marketIndicators = [
  { label: "Global Geospatial Market", value: "$100B+" },
  { label: "Global Geo-AI Analytics Market", value: "$470B+" },
  { label: "India Geospatial-AI Market", value: "$12.75B+" },
]

const streams = [
  {
    key: "upstream",
    label: "Upstream",
    icon: Rocket,
    schoolName: "School of Space Manufacturing",
    tagline: "Engineering Orbital Infrastructure",
    marketSize: "$250–300 Billion",
    description:
      "Satellite manufacturing & launch systems focused on spacecraft design, subsystem integration, launch systems, and orbital infrastructure.",
    heroImage: "/images/main1.jpg",
    focusAreas: [
      { title: "Satellite Subsystem Integration", image: "/images/Satellite-Subsystem-Integration.jpg" },
      { title: "Aerospace Structural Systems", image: "/images/Aerospace-Structural-Systems.jpg" },
      { title: "Payload Integration & Validation", image: "/images/Payload-Integration-&-Validation.jpg" },
    ],
    academicPathways: [
      {
        degree: "B.Voc – Space Manufacturing",
        university: "Kalinga University",
        image: "/images/B.Voc-space-manufacturing.jpg",
      },
      {
        degree: "B.Voc – Manufacturing",
        university: "Kalinga University",
        image: "/images/B.Voc-Manufacturing.jpg",
      },
    ],
    careerRoles: [
      "Space Manufacturing Engineer",
      "Satellite Integration Engineer",
      "Launch Systems Engineer",
      "Aerospace Production Specialist",
    ],
  },
  {
    key: "midstream",
    label: "Midstream",
    icon: Satellite,
    schoolName: "School of Satellite Communication",
    tagline: "Sustaining Global Connectivity",
    marketSize: "$300–350 Billion",
    description:
      "Satellite communication and ground infrastructure including mission control, signal processing, and secure global connectivity.",
    heroImage: "/images/midstream.jpg",
    focusAreas: [
      { title: "Ground Station Engineering", image: "/images/Ground-Station-Engineering.jpg" },
      { title: "Mission Control Systems", image: "/images/mcs.jpg" },
      { title: "Network & Signal Processing", image: "/images/Network-&-Signal-Processing.jpg" },
    ],
    academicPathways: [
      {
        degree: "B.Voc – Satellite Communication Technology",
        university: "Aurora University, Hyderabad",
        image: "/images/B.Voc-Satillite-Communication-Technology.jpg",
      },
    ],
    careerRoles: [
      "Satellite Operations Engineer",
      "Telecom Systems Architect",
      "Network Infrastructure Specialist",
    ],
  },
  {
    key: "downstream",
    label: "Downstream",
    icon: Globe,
    schoolName: "School of Remote Sensing, GIS & Geo-AI",
    tagline: "Intelligence from Orbit",
    marketSize: "$400–450 Billion",
    description:
      "Transforms satellite data into insights using GIS, Geo-AI, digital twins, climate intelligence, and spatial analytics.",
    heroImage: "/images/Main Image.jpg",
    focusAreas: [
      { title: "GIS & Spatial Analytics", image: "/images/GIS-&Spatial-Analytics.jpg" },
      { title: "Geo-AI & Machine Learning", image: "/images/Geo-AI-&-Machine-Learning.jpg" },
      { title: "Digital Twin Ecosystems", image: "/images/Digital-Twin-Ecosystems.jpg" },
    ],
    academicPathways: [
      {
        degree: "M.Sc – Remote Sensing & GIS",
        university: "SHAUTS University",
        image: "/images/rsg.jpg",
      },
      {
        degree: "M.Tech – Remote Sensing & GIS",
        university: "SHAUTS University",
        image: "/images/rsg.jpg",
      },
      {
        degree: "Ph.D – Remote Sensing & GIS(Full-Time)",
        university: "SHAUTS University",
        image: "/images/rsg.jpg",
      },
      {
        degree: "Ph.D – Remote Sensing & GIS(Part-Time)",
        university: "SHAUTS University",
        image: "/images/rsg.jpg",
      },
      {
        degree: "B.Voc – Data Science",
        university: "Kalinga University",
        image: "/images/B.Voc-Data-Science.jpg",
      },
    ],
    careerRoles: [
      "Geo-AI Engineer",
      "Spatial Data Scientist",
      "Digital Twin Architect",
      "Remote Sensing Specialist",
    ],
  },
]

/* -------------------- SMALL CARDS -------------------- */

function FocusAreaCard({ title, image }: { title: string; image: string }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-44">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-3 left-3 text-sm font-semibold text-white">
          {title}
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
    <Card className="overflow-hidden">
      <div className="relative h-36">
        <Image src={image} alt={degree} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-3 left-3 text-xs text-white">
          {university}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm font-semibold">{degree}</p>
      </CardContent>
    </Card>
  )
}

/* -------------------- MAIN SECTION -------------------- */

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Space Value Chain
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl">
            About SpaceTech Academy
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            SpaceTech Academy is a Centre of Excellence in Space Manufacturing, Satellite Communications, Geospatial Intelligence, and Geo-AI, 
            focused on higher education and professional skilling.
            Aligned with India’s Indian Space Policy (2023), Indian Geospatial Policy (2021), and NEP 2020 Education Policy
            We prepare industry-ready talent across the full space value chain.    
            In partnership with UGC-approved universities (D.Voc.B,Voc,BSC.B.Tech.M.Tech and Ph.D.), we deliver flexible online and hybrid programs integrated with applied labs, internships, real-world projects, and placement support—bridging education with industry.
            Learn. Build. Launch. Lead.
           </p>
                 </div>
        {/* Market Indicators */}
        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {marketIndicators.map((item) => (
            <Card key={item.label}>
              <CardContent className="flex items-center gap-3 p-5">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-lg font-bold">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 🔘 STREAM BUTTONS */}
        <div className="mb-20 flex flex-wrap justify-center gap-3">
          {streams.map((stream) => {
            const Icon = stream.icon
            return (
              <a
                key={stream.key}
                href={`#${stream.key}`}
                className="flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold hover:bg-muted"
              >
                <Icon className="h-4 w-4 text-primary" />
                {stream.label}
                <Badge variant="secondary" className="ml-1 text-[10px]">
                  {stream.marketSize}
                </Badge>
              </a>
            )
          })}
        </div>

        {/* STREAM SECTIONS */}
        {streams.map((stream) => {
          const Icon = stream.icon

          return (
            <div
              key={stream.key}
              id={stream.key}
              className="mb-24 scroll-mt-32"
            >
              {/* Hero */}
              <div className="mb-12 grid overflow-hidden rounded-2xl border lg:grid-cols-2">
                <div className="relative h-64 lg:min-h-[360px]">
                  <Image
                    src={stream.heroImage}
                    alt={stream.schoolName}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8 lg:p-12">
                  <Badge className="mb-3">{stream.label} Sector</Badge>

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {stream.schoolName}
                      </p>
                      <h3 className="text-2xl font-bold">
                        {stream.tagline}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-4 text-muted-foreground">
                    {stream.description}
                  </p>

                  <Badge variant="secondary">
                    Market Size: {stream.marketSize}
                  </Badge>
                </div>
              </div>

              {/* Focus Areas */}
              <h3 className="mb-6 text-center text-xl font-bold">
                Focus Areas
              </h3>
              <div className="mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {stream.focusAreas.map((area) => (
                  <FocusAreaCard key={area.title} {...area} />
                ))}
              </div>

              {/* Academic Pathways */}
              <h3 className="mb-6 text-center text-xl font-bold">
                Academic Pathways
              </h3>
              <div className="mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {stream.academicPathways.map((path) => (
                  <AcademicPathwayCard key={path.degree} {...path} />
                ))}
              </div>

              {/* Career Roles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold">Career Roles</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {stream.careerRoles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-3 rounded-lg border p-4"
                      >
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <p className="text-sm font-semibold">{role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}
