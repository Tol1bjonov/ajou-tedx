"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-tedRed">Contact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions about TEDx Ajou Tashkent? Want to get involved? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-8 text-center">
            <Mail className="h-10 w-10 text-tedRed" />
            <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Email</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">info@tedxajoutashkent.org</p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-8 text-center">
            <Phone className="h-10 w-10 text-tedRed" />
            <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Phone</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">+998 71 207-65-25</p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-8 text-center">
            <MapPin className="h-10 w-10 text-tedRed" />
            <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Location</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Ajou University in Tashkent
              <br />
              Tashkent, Uzbekistan
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="rounded-lg bg-white shadow-lg">
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <Textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button type="submit" className="bg-tedRed hover:bg-tedRed/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
              {isSubmitted && (
                <div className="mt-4 rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Thank you for your message! We&apos;ll get back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
