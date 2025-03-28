import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoDbi from '@/images/clients/dbi/dbi-logo-text-light.svg'
import logoDbiDark from '@/images/clients/dbi/dbi-logo-text-dark.svg'
import logoPavo from '@/images/clients/pavo/pavo-logo-text-light.svg'
import logoGasvin from '@/images/clients/gasvin/gasvin-logo-text-light.svg'
import logoNagapara from '@/images/clients/nagapara/nagapara-logo-text-light.svg'
import imageResult from '@/images/result.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['DBI', logoDbi],
  ['Pavo', logoPavo],
  ['Gasvin', logoGasvin],
  ['Nagapara', logoNagapara],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-indigo-800 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We&apos;ve partnered with countless innovative minds to bring Web3,
            blockchain, and crypto solutions to life.
          </h2>
          <div className="h-px flex-auto bg-neutral-100" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    className="h-full w-full"
                    unoptimized
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing Technology for a Decentralized Future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe Web3, blockchain, and crypto are key to a brighter,
          decentralized future. With new opportunities come challenges, and
          that’s where we step in. At Mudapedia, we create solutions that help
          businesses and individuals succeed in this digital world.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you find and take advantage of new opportunities in Web3, blockchain, and crypto."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve innovating and transforming
          existing ideas into Web3, blockchain, and crypto solutions we’re full
          of endless possibilities.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageResult}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Create Crypto Token">
              We specialize in crafting custom tokens tailored to your project’s
              needs, built on the latest blockchain technology.
            </ListItem>
            <ListItem title="Create Web3 (Design or Code)">
              From stunning designs to seamless code, we create Web3 experiences
              that stand out and function flawlessly.
            </ListItem>
            <ListItem title="Create Regular Websites">
              Need a solid website? We build responsive, user-friendly websites
              that are both functional and visually appealing.
            </ListItem>
            <ListItem title="Web3, Blockchain, & Crypto Social Media Management">
              We help you grow your Web3 presence with expert strategies for
              social media, ensuring you stand out in the blockchain space.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            The pace in the Web3, Blockchain, and Crypto Industries.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a startup at the heart of Web3, blockchain, and crypto, where
            technology and creativity come together. Our team builds innovative
            solutions that help businesses grow in the world of
            decentralization.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'DBIDark', logo: logoDbiDark }}
      >
        The team at Mudapedia goes above and beyond, delivering seamless Web3,
        blockchain, and crypto solutions making complex technology feel
        effortless.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
