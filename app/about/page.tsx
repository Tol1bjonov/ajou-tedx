import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About TEDx</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              In the spirit of ideas worth spreading, TED has created a program called TEDx.
            </p>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-tedRed">About</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is TEDx?</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  TEDx is a program of local, self-organized events that bring people together to share a TED-like
                  experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and
                  connection. These local, self-organized events are branded TEDx, where x = independently organized TED
                  event.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  The TED Conference provides general guidance for the TEDx program, but individual TEDx events are
                  self-organized. (Subject to certain rules and regulations.)
                </p>
                <div className="mt-10">
                  <Link
                    href="https://www.ted.com/about/programs-initiatives/tedx-program"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-tedRed hover:bg-tedRed/90">Learn More About TEDx</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tedxevent.png"
                alt="TEDx event"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About TED section */}
      <div className="overflow-hidden bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-tedRed">About</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is TED?</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in
                  California 30 years ago, TED has grown to support its mission with multiple initiatives.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  The two annual TED Conferences invite the world&apos;s leading thinkers and doers to speak for 18 minutes
                  or less. Many of these talks are then made available, free, at TED.com.
                </p>
                <div className="mt-10">
                  <Link href="https://www.ted.com/about/our-organization" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-tedRed hover:bg-tedRed/90">Learn More About TED</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative lg:order-last">
              <Image
                src="/tedconference.png"
                alt="TED conference"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TEDx Ajou Tashkent section */}
      <div className="overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-tedRed">About</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">TEDx Ajou Tashkent</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TEDx Ajou Tashkent is an independently organized TEDx event operated under license from TED. Our mission
              is to bring together thinkers, innovators, and creators from Tashkent and beyond to share ideas worth
              spreading.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">Our Vision</dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    To create a platform where innovative ideas can flourish and inspire positive change in our
                    community and beyond.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">Our Mission</dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    To bring together diverse perspectives and ideas that challenge conventional thinking and inspire
                    action.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">Our Values</dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Innovation, diversity, inclusivity, and the power of ideas to create positive change in the world.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
