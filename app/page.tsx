// import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Clock, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 z-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="block text-tedRed">TEDx</span>
            <span className="block">Ajou Tashkent</span>
          </h1>
          <p className="mt-6 text-lg leading-8 max-w-xl">
            Ideas worth spreading. Join us for an inspiring day of talks, performances, and connections.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-tedRed hover:bg-tedRed/90 text-white">
              <Link href="/contact">Register Now</Link>
            </Button>
            <Button asChild  className="bg-tedRed hover:bg-tedRed/90 text-white">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-3">
            <div className="flex items-center">
              <CalendarDays className="h-6 w-6 text-tedRed mr-2" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-tedRed mr-2" />
              <span>10:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-tedRed mr-2" />
              <span>Ajou University in Tashkent</span>
            </div>
          </div>
        </div>
      </section>

      {/* About TEDx Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-tedRed">About</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is TEDx?</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TEDx is a program of local, self-organized events that bring people together to share a TED-like
              experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and
              connection in a small group.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-tedRed text-tedRed hover:bg-tedRed/10">
                <Link href="/about">Learn more about TEDx</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-tedRed">Speakers</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Speakers</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet our lineup of innovative thinkers and doers who will share their ideas worth spreading.
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold tracking-tight text-tedRed text-center mt-5">Coming Soon..</p>
            <p className="mt-7 text-gray-700">Speakers list will be released on May 2</p>
          </div>
          {/* <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((speaker) => (
              <article key={speaker} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={`/mamurayuldosheva.png`}
                    alt={`Speaker ${speaker}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full rounded-2xl bg-gray-100 object-cover"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2023-03-16" className="text-gray-500">
                      Coming Soon
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-tedRed">
                      <span>Mamura Yuldasheva</span>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Speaker bio will be announced soon. Stay tuned for updates on our exciting lineup of speakers.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild className="bg-tedRed hover:bg-tedRed/90">
              <Link href="/speakers">View All Speakers</Link>
            </Button>
          </div>*/}
        </div> 
      </section>

      {/* Location Section with Map */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-tedRed">Location</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Event Venue</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us at Ajou University in Tashkent for this inspiring event.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.4217372631542!2d69.33892359999999!3d41.27792500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f7e492a66c1%3A0x77427ccd87b4ed9!2sAjou%20University%20in%20Tashkent!5e0!3m2!1sru!2s!4v1744230467005!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ajou University in Tashkent location"
              ></iframe>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">Ajou University in Tashkent</h3>
              <p className="mt-4 text-lg text-gray-600">
              Republic of Uzbekistan , Tashkent city,
              <br />
              Yashnabad district, Asalobod street,
              <br /> 113
              and 113A, 100204.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-tedRed mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Located in the heart of Tashkent, Ajou University provides a modern venue with state-of-the-art
                    facilities for our TEDx event.
                  </p>
                </div>

                <div className="flex items-center mt-6">
                  <Button asChild className="bg-tedRed hover:bg-tedRed/90 text-white">
                    <a
                      href="https://ajou.uz/en/site/contact?#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Get Directions
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-tedRed/90 via-tedRed to-tedRed/90">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to be inspired?</span>
            <span className="block text-white/90 text-xl mt-2">Register now for TEDx Ajou Tashkent.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button asChild className="bg-white text-tedRed hover:bg-gray-100">
                <Link href="/contact">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
