import { Button } from "@/components/ui/button"
import ContactModal from './contact-modal'

export default function Hero() {
  return (
    <div className="bg-gray-50 relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://m.media-amazon.com/images/I/71L+46v5hnL.jpg')",
          opacity: 1
        }}
        aria-hidden="true"
      ></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Tech got you in wrinkles?</span>
          <span className="block text-blue-600">The </span><span className="strikethrough">bark</span> buck stops here.</span>
        Transform your digital paw print.</h2>
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



import React from "react"

export default function Hero() {
  return (
    <div className="bg-gray-50 relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8" style={{
          backgroundImage: "url('https://m.media-amazon.com/images/I/71L+46v5hnL.jpg')",
          opacity: 1
        }}
        aria-hidden="true">
         <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline bg-primary text-primary-foreground px-2">Tech got you in wrinkles?</span>{" "}
          <span className="block text-indigo-600 xl:inline">
            The <span className="line-through">bark</span> buck stops here.
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Discover the power of our application and boost your productivity.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

