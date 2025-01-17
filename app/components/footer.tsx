import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="#services" className="text-base text-gray-300 hover:text-white">
              Services
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="#about" className="text-base text-gray-300 hover:text-white">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="#contact" className="text-base text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="#privacy" className="text-base text-gray-300 hover:text-white">
              Privacy
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 Zach Miller Tech Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

