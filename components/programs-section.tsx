import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const bvocPrograms = [
  { title: "B.Voc Space Manufacturing", desc: "Satellite assembly, space-grade materials, and orbital infrastructure", image: "/images/B.Voc Space Manufacturing.jpg" },
  { title: "B.Voc Satellite Communication", desc: "Communication architecture, ground stations, and signal processing", image: "/images/sc.jpg" },
  { title: "B.Voc Robotics", desc: "Master automation, AI-driven robotics, and intelligent systems design", image: "/images/B.Voc Robotics.jpg" },
  { title: "B.Voc Manufacturing", desc: "Advanced manufacturing techniques and Industry 4.0 technologies", image: "/images/B.Voc Manufacturing.jpg" },
  { title: "B.Voc Automobile", desc: "Specialize in automotive engineering and EV technology", image: "/images/B.Voc Automobile.jpg" },
  { title: "B.Voc Construction Technology", desc: "Modern construction methods and project management", image: "/images/ct.jpg" },
  { title: "B.Voc Refrigeration & AC", desc: "HVAC systems and climate control solutions", image: "/images/B.Voc Refrigeration & AC.jpg" },
  { title: "B.Voc Tool & Die Making", desc: "Precision engineering and CNC machining", image: "/images/B.Voc Tool &Die Making.jpg" },
  { title: "B.Voc Fire & Safety", desc: "Fire prevention and industrial safety management", image: "/images/sf.jpg" },
  { title: "B.Voc Renewable Energy", desc: "Solar, wind, and sustainable energy solutions", image: "/images/B.Voc Renewable Energy.jpg" },
  { title: "B.Voc Electrical", desc: "Electrical systems and smart grid technologies", image: "/images/B.Voc Electrical.jpg" },
  { title: "B.Voc Information Technology", desc: "Modern IT infrastructure and software solutions", image: "/images/B.Voc Information Technology.jpg" },
  { title: "B.Voc Software Development", desc: "Full-stack development and modern frameworks", image: "/images/sd.jpg" },
  { title: "B.Voc Data Science", desc: "AI, machine learning, and advanced analytics", image: "/images/B.Voc Data Science.jpg" },
  { title: "B.Voc Cyber Security", desc: "Ethical hacking and advanced security protocols", image: "/images/B.Voc Cyber Security.jpg" },
]

const pgPrograms = [
  { title: "M.Sc in Remote Sensing & GIS", desc: "Advanced geospatial analysis and satellite technology", duration: "2 Years", badge: "Master's Degree", image: "/images/M.Sc in Remote Sensing & GIS.jpg" },
  { title: "M.Tech in Remote Sensing & GIS", desc: "Technical expertise in geospatial systems", duration: "2 Years", badge: "Master's Degree", image: "/images/M.Tech in Remote Sensing & GIS.jpg" },
  { title: "PG Diploma in Remote Sensing & GIS", desc: "Specialized postgraduate diploma program", duration: "1 Year", badge: "PG Diploma", image: "/images/PG Diploma in Remote Sensing and GIS.jpg" },
  { title: "Ph.D Full-Time", desc: "Full-time doctoral research in advanced technologies", duration: "3–5 Years", badge: "Doctoral Program", image: "/images/Ph.D Full Time.jpg" },
  { title: "Ph.D Part-Time", desc: "Part-time doctoral research for working professionals", duration: "4–6 Years", badge: "Doctoral Program", image: "/images/Ph.D Part-Time.jpg" },
]

function ProgramCard({
  title,
  desc,
  image,
  duration,
  badge: badgeText,
}: {
  title: string
  desc: string
  image: string
  duration: string
  badge: string
}) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
      
      {/* ✅ Image Section Updated */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground">
          {badgeText}
        </Badge>
      </div>

      <CardContent className="flex flex-col p-5">
        <h3 className="mb-1.5 text-base font-bold text-foreground">{title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {desc}
        </p>
        <div className="mb-4 flex items-center gap-2">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </span>
        </div>
        <Button size="sm" variant="outline" className="w-full" asChild>
          <a href="#enquiry">Apply Now</a>
        </Button>
      </CardContent>
    </Card>
  )
}

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* B.Voc Programs */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Undergraduate
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            B.Voc Programs
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            3-Year Industry-focused undergraduate programs from Kalinga
            University
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bvocPrograms.map((p) => (
            <ProgramCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              image={p.image}
              duration="3 Years"
              badge="Kalinga University"
            />
          ))}
        </div>

        {/* PG & Doctoral */}
        <div className="mx-auto mb-12 mt-24 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Advanced Degrees
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Postgraduate & Doctoral Programs
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Advanced degrees in Remote Sensing, GIS, and Research
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pgPrograms.map((p) => (
            <ProgramCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              image={p.image}
              duration={p.duration}
              badge={p.badge}
            />
          ))}
        </div>

      </div>
    </section>
  )
}