import type { ServiceIconName } from '../components/ServiceIcon'
import services from '../data/services.json'

export type ServiceItem = {
  name: string
  price: string
  duration?: string
  info?: string
}

export const serviceCategories = Object.entries(services) as [
  string,
  ServiceItem[],
][]

const categoryCards: {
  key: keyof typeof services
  title: string
  description: string
  icon: ServiceIconName
}[] = [
  {
    key: 'arckezelések',
    title: 'ARCKEZELÉSEK',
    description:
      'Személyre szabott arckezelések minden bőrtípusra, a THALGO különleges hatóanyagaival.',
    icon: 'face',
  },
  {
    key: 'testkezelések',
    title: 'TESTKEZELÉSEK',
    description: 'Testkezelések a bőr megújításáért és a tökéletes kikapcsolódásért.',
    icon: 'body',
  },
  {
    key: 'szemöldök-szempilla',
    title: 'SZEMÖLDÖK-SZEMPILLA',
    description:
      'Szempilla- és szemöldökformázás a természetes szépség kiemeléséért.',
    icon: 'eye',
  },
  {
    key: 'szőrtelenítés',
    title: 'SZŐRTELENÍTÉS',
    description: 'Kíméletes szőrtelenítés az sima, ápolt bőrért.',
    icon: 'wax',
  },
  {
    key: 'smink',
    title: 'SMINK',
    description: 'Alkalmi és nappali smink a természetes ragyogás kiemeléséért.',
    icon: 'makeup',
  },
]

export function categoryTitle(key: string) {
  return key.replaceAll('-', ' ').toUpperCase()
}

export { categoryCards }
