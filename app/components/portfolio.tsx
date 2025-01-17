import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform Optimization",
    description: "Improved load times by 40% and increased conversion rates by 25%",
    image: "https://geniusvets.s3.amazonaws.com/gv-dog-breeds/chinese-shar-pei-1.jpg",
  },
  {
    title: "Cloud Migration for Financial Services",
    description: "Seamlessly migrated legacy systems to AWS, reducing operational costs by 30%",
    image: "https://geniusvets.s3.amazonaws.com/gv-dog-breeds/chinese-shar-pei-1.jpg",
  },
  {
    title: "Cybersecurity Overhaul",
    description: "Implemented robust security measures, preventing potential data breaches",
    image: "https://geniusvets.s3.amazonaws.com/gv-dog-breeds/chinese-shar-pei-1.jpg",
  },
]

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`Cute puppy representing ${project.title}`}
                width={300}
                height={200}
                className="rounded-md mb-4"
              />
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

