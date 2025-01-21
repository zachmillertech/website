import { Button } from "@/components/ui/button"
import ContactModal from './contact-modal'

export default function Hero() {
  return (
    <div className="bg-gray-50 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://m.media-amazon.com/images/I/71L+46v5hnL.jpg')",
          opacity: 0.75
        }}
        aria-hidden="true"
      ></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Tech got you in wrinkes?</span> // tech wrinkes slowing you down? Tech wrinkes driving you barking mad? 
          <span className="block text-blue-600">The <style class="strikethrough">bark</style> buck stops with my highly solution-focused Tech Consulting Services.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
          </div>
        </div>
      </div>
    </div>
  )
}

