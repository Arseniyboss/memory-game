export type Card = {
  img: string
  matched: boolean
}

export interface ShuffledCard extends Card {
  id: string
}

export type Choice = ShuffledCard | null
