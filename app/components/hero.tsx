import { Button } from "@/components/ui/button"
import ContactModal from './contact-modal'

export default function Hero() {
  return (
    <div className="bg-gray-50 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?puppy,7')",
          opacity: 0.3
        }}
        aria-hidden="true"
      ></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Transform Your</span>
          <span className="block text-blue-600">Digital Footprint</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <ContactModal />
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

