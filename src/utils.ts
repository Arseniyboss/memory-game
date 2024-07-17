import { Card } from './types'

export const getShuffledCards = (cards: Card[]) => {
  const shuffledCards = [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: crypto.randomUUID() }))
  return shuffledCards
}
