import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { Card, Choice } from '@/types'
import { getShuffledCards } from '@/utils'

type GameContextType = {
  cards: Card[]
  turns: number
  isFlipped: (card: Card) => boolean
  handleChoice: (card: Card) => void
}

type Props = {
  children: ReactNode
}

const GameContext = createContext<GameContextType | null>(null)

// TODO: disable clicking on cards after the game is over

export const GameContextProvider = ({ children }: Props) => {
  const [cards, setCards] = useState<Card[]>(() => getShuffledCards())
  const [choiceOne, setChoiceOne] = useState<Choice>(null)
  const [choiceTwo, setChoiceTwo] = useState<Choice>(null)
  const [turns, setTurns] = useState<number>(12)
  const [isTurnActive, setIsTurnActive] = useState<boolean>(false)

  const isFlipped = (card: Card) => {
    return card === choiceOne || card === choiceTwo || card.matched
  }

  const isGameWon = () => {
    return cards.every((card) => card.matched)
  }

  const isGameLost = () => {
    const unmatchedCards = cards.filter((card) => !card.matched)
    const unmatchedPairs = unmatchedCards.length / 2
    return unmatchedPairs > turns
  }

  const flipMatchingCards = () => {
    const updatedCards = cards.map((card) => {
      return card.img === choiceOne?.img ? { ...card, matched: true } : card
    })
    setCards(updatedCards)
    resetTurn()
  }

  const resetTurn = () => {
    setTurns((turns) => turns - 1)
    setIsTurnActive(false)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  const resetGame = () => {
    const shuffledCards = getShuffledCards()
    setCards(shuffledCards)
    setTurns(12)
  }

  const handleChoice = (card: Card) => {
    if (isTurnActive || isGameLost() || card.matched || choiceOne?.id === card.id) return
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const handleGameOver = () => {
    resetGame()
    if (isGameWon()) {
      alert('You Win!')
    }
    if (isGameLost()) {
      alert('Game Over!')
    }
  }

  useEffect(() => {
    if (!choiceOne || !choiceTwo) return
    setIsTurnActive(true)
    if (choiceOne.img === choiceTwo.img) {
      return flipMatchingCards()
    }
    const timeout = setTimeout(resetTurn, 1000)
    return () => clearTimeout(timeout)
  }, [choiceOne, choiceTwo, cards])

  useEffect(() => {
    if (isGameLost() || isGameWon()) {
      const timeout = setTimeout(handleGameOver, 1000)
      return () => clearTimeout(timeout)
    }
  }, [cards, turns])

  const value = {
    cards,
    turns,
    isFlipped,
    handleChoice,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGameContext = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGameContext must be used within a GameContextProvider')
  }
  return context
}
