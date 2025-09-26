
export interface CharacterApiResponse {
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: ApiLocation
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface ApiLocation {
  name: string
  url: string
}
