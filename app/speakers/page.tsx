import Image from "next/image"

// Sample speaker data - in a real application, this would come from a database or API
const speakers = [
  {
    id: 1,
    name: "Mamura Yuldasheva",
    role: "IELTS Specialist | Educational Consultant",
    bio: `Mamura Yuldasheva is a trailblazing educator renowned as Uzbekistan’s "First Lady Niner"- one of the rare professionals to achieve a perfect IELTS 9. With academic credentials including both a Bachelor’s and an MBA from the United States, she brings deep expertise in English, IELTS, Math, SAT, and GMAT preparation, all delivered through modern American teaching methodologies.`,
    imageUrl: "/mamurayuldosheva.jpg",
    topic: "The Future of Ethical AI",
  },
  {
    id: 2,
    name: "Mamura Yuldasheva",
    role: "IELTS Specialist | Educational Consultant",
    bio: `Mamura Yuldasheva is a trailblazing educator renowned as Uzbekistan’s "First Lady Niner"- one of the rare professionals to achieve a perfect IELTS 9. With academic credentials including both a Bachelor’s and an MBA from the United States, she brings deep expertise in English, IELTS, Math, SAT, and GMAT preparation, all delivered through modern American teaching methodologies.`,
    imageUrl: "/mamurayuldosheva.jpg",
    topic: "The Future of Ethical AI",
  },
  {
    id: 3,
    name: "Mamura Yuldasheva",
    role: "IELTS Specialist | Educational Consultant",
    bio: `Mamura Yuldasheva is a trailblazing educator renowned as Uzbekistan’s "First Lady Niner"- one of the rare professionals to achieve a perfect IELTS 9. With academic credentials including both a Bachelor’s and an MBA from the United States, she brings deep expertise in English, IELTS, Math, SAT, and GMAT preparation, all delivered through modern American teaching methodologies.`,
    imageUrl: "/mamurayuldosheva.jpg",
    topic: "The Future of Ethical AI",
  },
  {
    id: 4,
    name: "Mamura Yuldasheva",
    role: "IELTS Specialist | Educational Consultant",
    bio: `Mamura Yuldasheva is a trailblazing educator renowned as Uzbekistan’s "First Lady Niner"- one of the rare professionals to achieve a perfect IELTS 9. With academic credentials including both a Bachelor’s and an MBA from the United States, she brings deep expertise in English, IELTS, Math, SAT, and GMAT preparation, all delivered through modern American teaching methodologies.`,
    imageUrl: "/mamurayuldosheva.jpg",
    topic: "The Future of Ethical AI",
  },
  {
    id: 5,
    name: "Mamura Yuldasheva",
    role: "IELTS Specialist | Educational Consultant",
    bio: `Mamura Yuldasheva is a trailblazing educator renowned as Uzbekistan’s "First Lady Niner"- one of the rare professionals to achieve a perfect IELTS 9. With academic credentials including both a Bachelor’s and an MBA from the United States, she brings deep expertise in English, IELTS, Math, SAT, and GMAT preparation, all delivered through modern American teaching methodologies.`,
    imageUrl: "/mamurayuldosheva.jpg",
    topic: "The Future of Ethical AI",
  },
  {
    id: 6,
    name: "Mamura Yuldasheva",
    role: "IELTS Specialist | Educational Consultant",
    bio: `Mamura Yuldasheva is a trailblazing educator renowned as Uzbekistan’s "First Lady Niner"- one of the rare professionals to achieve a perfect IELTS 9. With academic credentials including both a Bachelor’s and an MBA from the United States, she brings deep expertise in English, IELTS, Math, SAT, and GMAT preparation, all delivered through modern American teaching methodologies.`,
    imageUrl: "/mamurayuldosheva.jpg",
    topic: "The Future of Ethical AI",
  },
]

export default function SpeakersPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Speakers</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the innovative thinkers and doers who will be sharing their ideas worth spreading at TEDx Ajou
            Tashkent.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {speakers.map((speaker) => (
            <li key={speaker.id}>
              <Image
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={speaker.imageUrl || "/placeholder.svg"}
                alt={speaker.name}
                width={400}
                height={400}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{speaker.name}</h3>
              <p className="text-base leading-7 text-tedRed">{speaker.role}</p>
              <p className="mt-2 text-base leading-7 text-gray-600 line-clamp-4">{speaker.bio}</p>
              <p className="mt-4 text-sm font-semibold leading-6 text-gray-900">Talk: {speaker.topic}</p>
            </li>
          ))}
        </ul>
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Become a Speaker</h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Do you have an idea worth spreading? We&apos;re always looking for passionate speakers with unique perspectives
            and innovative ideas.
          </p>
          <div className="mt-8 flex">
            <a
              href="#"
              className="rounded-md bg-tedRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tedRed/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tedRed"
            >
              Apply to Speak
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
