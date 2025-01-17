'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface ContactFormProps {
  onSubmitSuccess?: () => void
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to your server or a service like Formspree
    // For this example, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    })

    if (onSubmitSuccess) {
      onSubmitSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Input type="text" id="name" name="name" required className="mt-1" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Input type="email" id="email" name="email" required className="mt-1" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <Textarea id="message" name="message" required className="mt-1" />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

