import { Card } from './types'

type Cards = Omit<Card, 'id'>[]

export const cards: Cards = [
  { img: '/img/helmet.png', matched: false },
  { img: '/img/potion.png', matched: false },
  { img: '/img/ring.png', matched: false },
  { img: '/img/scroll.png', matched: false },
  { img: '/img/shield.png', matched: false },
  { img: '/img/sword.png', matched: false },
]
