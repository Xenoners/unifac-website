import { createClient } from 'next-sanity'
import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const isConfigured =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

async function safeFetch<T>(query: string): Promise<T | null> {
  if (!isConfigured) return null
  try {
    return await client.fetch<T>(query)
  } catch {
    return null
  }
}

export async function getTeamMembers() {
  return safeFetch<{ name: string; role: string; photo: SanityImageSource | null }[]>(
    `*[_type == "teamMember"] | order(order asc) { name, role, photo }`
  )
}

export async function getClubs() {
  return safeFetch<{
    name: string
    fullName: string
    category: string
    founded: string
    colors: string
    description: string
    logo: SanityImageSource | null
  }[]>(
    `*[_type == "club"] | order(name asc) { name, fullName, category, founded, colors, description, logo }`
  )
}

export async function getActivities() {
  return safeFetch<{
    title: string
    period: string
    tag: string
    description: string
    image: SanityImageSource | null
  }[]>(
    `*[_type == "activity"] | order(order asc) { title, period, tag, description, image }`
  )
}

export async function getPartners() {
  return safeFetch<{
    name: string
    type: string
    description: string
    logo: SanityImageSource | null
    website: string | null
  }[]>(
    `*[_type == "partner"] | order(order asc) { name, type, description, logo, website }`
  )
}
