import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

// Sample sponsor data - in a real application, this would come from a database or API
const sponsors = {
  platinum: [
    { id: 1, name: "Platinum Sponsor 1", logo: "/placeholder.svg?height=120&width=240", website: "#" },
    { id: 2, name: "Platinum Sponsor 2", logo: "/placeholder.svg?height=120&width=240", website: "#" },
  ],
  gold: [
    { id: 3, name: "Gold Sponsor 1", logo: "/placeholder.svg?height=100&width=200", website: "#" },
    { id: 4, name: "Gold Sponsor 2", logo: "/placeholder.svg?height=100&width=200", website: "#" },
    { id: 5, name: "Gold Sponsor 3", logo: "/placeholder.svg?height=100&width=200", website: "#" },
  ],
  silver: [
    { id: 6, name: "Silver Sponsor 1", logo: "/placeholder.svg?height=80&width=160", website: "#" },
    { id: 7, name: "Silver Sponsor 2", logo: "/placeholder.svg?height=80&width=160", website: "#" },
    { id: 8, name: "Silver Sponsor 3", logo: "/placeholder.svg?height=80&width=160", website: "#" },
    { id: 9, name: "Silver Sponsor 4", logo: "/placeholder.svg?height=80&width=160", website: "#" },
  ],
  bronze: [
    { id: 10, name: "Bronze Sponsor 1", logo: "/placeholder.svg?height=60&width=120", website: "#" },
    { id: 11, name: "Bronze Sponsor 2", logo: "/placeholder.svg?height=60&width=120", website: "#" },
    { id: 12, name: "Bronze Sponsor 3", logo: "/placeholder.svg?height=60&width=120", website: "#" },
    { id: 13, name: "Bronze Sponsor 4", logo: "/placeholder.svg?height=60&width=120", website: "#" },
    { id: 14, name: "Bronze Sponsor 5", logo: "/placeholder.svg?height=60&width=120", website: "#" },
    { id: 15, name: "Bronze Sponsor 6", logo: "/placeholder.svg?height=60&width=120", website: "#" },
  ],
  partners: [
    { id: 16, name: "Media Partner 1", logo: "/placeholder.svg?height=80&width=160", website: "#", type: "Media" },
    {
      id: 17,
      name: "Technology Partner 1",
      logo: "/placeholder.svg?height=80&width=160",
      website: "#",
      type: "Technology",
    },
    {
      id: 18,
      name: "Community Partner 1",
      logo: "/placeholder.svg?height=80&width=160",
      website: "#",
      type: "Community",
    },
    {
      id: 19,
      name: "Education Partner 1",
      logo: "/placeholder.svg?height=80&width=160",
      website: "#",
      type: "Education",
    },
  ],
}

export default function SponsorsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-tedRed">Sponsors & Partners</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Supporters</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're grateful to the organizations that make TEDx Ajou Tashkent possible. Their support enables us to bring
            ideas worth spreading to our community.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-xl font-semibold text-gray-900 text-center">Platinum Sponsors</h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none">
            {sponsors.platinum.map((sponsor) => (
              <div key={sponsor.id} className="flex flex-col items-center group">
                <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl p-6 bg-white">
                  <Image
                    className="max-h-24 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={240}
                    height={120}
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-base font-medium text-gray-900">{sponsor.name}</p>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center text-sm text-tedRed hover:text-tedRed/80"
                  >
                    Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-xl font-semibold text-gray-900 text-center">Gold Sponsors</h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none">
            {sponsors.gold.map((sponsor) => (
              <div key={sponsor.id} className="flex flex-col items-center group">
                <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl p-6 bg-white">
                  <Image
                    className="max-h-20 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={200}
                    height={100}
                  />
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-xl font-semibold text-gray-900 text-center">Silver Sponsors</h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none">
            {sponsors.silver.map((sponsor) => (
              <div key={sponsor.id} className="flex flex-col items-center group">
                <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl p-4 bg-white">
                  <Image
                    className="max-h-16 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={160}
                    height={80}
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-gray-900">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-xl font-semibold text-gray-900 text-center">Bronze Sponsors</h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {sponsors.bronze.map((sponsor) => (
              <div key={sponsor.id} className="flex flex-col items-center">
                <div className="relative overflow-hidden rounded-lg shadow-md p-3 bg-white">
                  <Image
                    className="max-h-12 w-full object-contain"
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                  />
                </div>
                <p className="mt-3 text-xs font-medium text-gray-900">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mx-auto mt-24 max-w-7xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Partners</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sponsors.partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                  <Image
                    className="h-16 w-auto object-contain"
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={160}
                    height={80}
                  />
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center rounded-full bg-tedRed/10 px-2.5 py-0.5 text-xs font-medium text-tedRed">
                    {partner.type} Partner
                  </span>
                  <h4 className="mt-2 text-lg font-semibold text-gray-900">{partner.name}</h4>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-tedRed hover:text-tedRed/80"
                  >
                    Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 md:mt-48">
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-gray-900 to-black px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Become a Sponsor or Partner
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Support ideas worth spreading and connect with our community of innovators, thinkers, and change-makers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild className="bg-white text-tedRed hover:bg-gray-100">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download Sponsorship Package
                </a>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
