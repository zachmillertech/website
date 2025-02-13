import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Jane Doe",
    company: "Tech Innovators Inc.",
    testimonial: "Zach's expertise transformed our IT infrastructure. We've seen remarkable improvements in efficiency and security.",
    image: "https://m.media-amazon.com/images/I/71L+46v5hnL.jpg",
  },
  {
    name: "John Smith",
    company: "Global Solutions Ltd.",
    testimonial: "Working with Zach was a game-changer for our cloud strategy. His insights and implementation were invaluable.",
    image: "https://m.media-amazon.com/images/I/71L+46v5hnL.jpg",
  },
  {
    name: "Emily Brown",
    company: "NextGen Startups",
    testimonial: "Zach's SaaS optimization recommendations helped us streamline our operations and reduce costs significantly.",
    image: "https://m.media-amazon.com/images/I/71L+46v5hnL.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`Cute puppy representing ${testimonial.name}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

