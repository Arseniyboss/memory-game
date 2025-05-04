import { cards } from './cards'

export const getShuffledCards = () => {
  const shuffledCards = [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: crypto.randomUUID() }))
  return shuffledCards
}
