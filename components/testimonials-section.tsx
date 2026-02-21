import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    program: "B.Voc Data Science, 2024",
    quote:
      "The practical approach and industry projects helped me land my dream job at a leading tech company!",
    initials: "PS",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Rahul Verma",
    program: "B.Voc Robotics, 2024",
    quote:
      "The hands-on robotics lab and expert mentorship transformed my career. Now working on autonomous systems!",
    initials: "RV",
    color: "bg-[#f59e0b]/10 text-[#d97706]",
  },
  {
    name: "Ananya Reddy",
    program: "B.Voc Renewable Energy, 2023",
    quote:
      "I'm now part of India's clean energy revolution. This program opened doors I never imagined!",
    initials: "AR",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Amit Kumar",
    program: "B.Voc Cyber Security, 2024",
    quote:
      "From beginner to cybersecurity professional in 3 years. The industry certifications were game-changers!",
    initials: "AK",
    color: "bg-primary/10 text-primary",
  },
]

export function TestimonialsSection() {
  return (
    <section id="stories" className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Success Stories
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Our Success Stories
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Meet the innovators building their future with SpaceEdTech
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-border bg-background transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6">
                <Quote className="mb-3 h-6 w-6 text-primary/30" />
                <p className="mb-5 text-sm italic leading-relaxed text-muted-foreground">
                  {`"${t.quote}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.program}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
