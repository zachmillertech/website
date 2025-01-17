import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import Portfolio from './components/portfolio'
import BlogPreview from './components/blog-preview'
import Testimonials from './components/testimonials'
import ContactForm from './components/contact-form'
import Footer from './components/footer'
import AnimatedSection from './components/animated-section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <BlogPreview />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>
      </AnimatedSection>
      <Footer />
    </main>
  )
}

