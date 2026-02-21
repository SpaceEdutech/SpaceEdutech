"use client"

import Image from "next/image"
import {
  GraduationCap,
  Satellite,
  Plane,
  Factory,
  Monitor,
  Landmark,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  { icon: GraduationCap, label: "Universities" },
  { icon: Satellite, label: "ISRO Ecosystem" },
  { icon: Plane, label: "Aerospace Companies" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Monitor, label: "IT Firms" },
  { icon: Landmark, label: "Government" },
]

const universityPartners = [
  { name: "IIT Madras", location: "Chennai, India", image: "/images/iit-madras.jpg", tag: "Premier Institute" },
  { name: "Kalinga University", location: "Raipur, India", image: "/images/kalinga.jpg", tag: "Academic Partner" },
  { name: "Aurora University", location: "Hyderabad, India", image: "/images/ar.jpg", tag: "Academic Partner" },
  { name: "SHAUT University", location: "India", image: "/images/sam.jpg", tag: "Research Partner" },
]

const industryPartners = [
  { name: "Tech Mahindra", location: "Pune, India", image: "/images/tech-mahindra.jpg", tag: "IT Services" },
  { name: "Google", location: "Global", image: "/images/google.jpg", tag: "Technology" },
  { name: "Infosys", location: "Bangalore, India", image: "/images/infosys.jpg", tag: "IT Services" },
  { name: "Hexagon", location: "Global", image: "/images/hexagon.jpg", tag: "Geospatial Technology" },
  { name: "Satsure", location: "Bangalore, India", image: "/images/satsure.jpg", tag: "Space Analytics" },
  { name: "RMSI", location: "Noida, India", image: "/images/rmsi.jpg", tag: "Geospatial Services" },
  { name: "Larsen & Toubro", location: "Mumbai, India", image: "/images/LT.jpg", tag: "Engineering & Construction" },
  { name: "TCS", location: "Mumbai, India", image: "/images/tcs.jpg", tag: "IT Services" }
]

const governmentPartners = [
  { name: "Survey of India", location: "Dehradun, India", image: "/images/si.jpg", tag: "National Mapping Agency" },
  { name: "ISRO Ecosystem", location: "Bangalore, India", image: "/images/isro.jpg", tag: "Space Agency" },
  { name: "Hindustan Aeronautics (HAL)", location: "Bangalore, India", image: "/images/hal.jpg", tag: "Aerospace & Defence" },
  { name: "Dept. of Science & Technology", location: "India", image: "/images/dst.jpg", tag: "Government" },
  { name: "National Skill Development Corp.", location: "New Delhi, India", image: "/images/nsdc.jpg", tag: "Skill Development" },
  { name: "Industrial Training Institute", location: "India", image: "/images/iti.jpg", tag: "Skill Development" }
]

function PartnerCard({
  name,
  location,
  image,
  tag,
}: {
  name: string
  location: string
  image: string
  tag: string
}) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Updated Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 25vw"
        />

        <Badge className="absolute left-3 top-3 bg-primary/90 text-[10px] text-primary-foreground">
          {tag}
        </Badge>
      </div>

      <CardContent className="p-4 text-center">
        <h3 className="text-sm font-bold text-foreground">{name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{location}</p>
      </CardContent>
    </Card>
  )
}

export function PartnersSection() {
  return (
    <section id="partners" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Collaborations
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Our Partners
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Collaborating with leading universities, industries & government bodies
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
            >
              <c.icon className="h-4 w-4 text-primary" />
              {c.label}
            </div>
          ))}
        </div>

        {/* University Section */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-serif text-xl font-bold text-foreground">
              University Partners
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {universityPartners.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Industry Section */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Factory className="h-5 w-5 text-primary" />
            <h3 className="font-serif text-xl font-bold text-foreground">
              Industry Partners
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industryPartners.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Government Section */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Landmark className="h-5 w-5 text-primary" />
            <h3 className="font-serif text-xl font-bold text-foreground">
              Government Partners
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {governmentPartners.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}