import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Shield, Zap, Cog, Mail, Globe } from 'lucide-react'

const services = [
  {
    title: "SaaS Configuration",
    description: "Optimize your software-as-a-service solutions for maximum efficiency and productivity.",
    icon: Cloud,
  },
  {
    title: "Security Solutions",
    description: "Protect your digital assets with cutting-edge security measures and best practices.",
    icon: Shield,
  },
  {
    title: "Performance Optimization",
    description: "Boost your systems' performance for faster, more responsive digital experiences.",
    icon: Zap,
  },
  {
    title: "Troubleshooting",
    description: "Resolve technical issues quickly to minimize downtime and maximize productivity.",
    icon: Cog,
  },
  {
    title: "Email Hosting",
    description: "Secure and reliable email hosting solutions for your business communications.",
    icon: Mail,
  },
  {
    title: "Web Hosting",
    description: "Fast and dependable web hosting to keep your online presence always available.",
    icon: Globe,
  },
]

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Tech Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            From SaaS configuration to security, we offer a wide range of services to manage and optimize your digital footprint.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <service.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="mt-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

