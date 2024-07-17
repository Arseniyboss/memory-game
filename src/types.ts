export type Card = {
  src: string
  matched: boolean
}

export interface ShuffledCard extends Card {
  id: string
}

export type Choice = Card | null
