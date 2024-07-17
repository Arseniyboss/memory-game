import { useState, useEffect } from 'react'
import { Card as CardType, ShuffledCard, Choice } from './types'
import { getShuffledCards } from './utils'
import { initialCards } from './cards'
import { Container, Heading, CardContainer } from './styles'
import Card from './components/Card'

const App = () => {
  const [cards, setCards] = useState<ShuffledCard[]>([])
  const [choiceOne, setChoiceOne] = useState<Choice>(null)
  const [choiceTwo, setChoiceTwo] = useState<Choice>(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = getShuffledCards(initialCards)
    setCards(shuffledCards)
  }

  const resetTurn = () => {
    setDisabled(false)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  const handleChoice = (card: CardType) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    if (!choiceOne || !choiceTwo) return
    setDisabled(true)
    if (choiceOne.src === choiceTwo.src) {
      const updatedCards = cards.map((card) => {
        return card.src === choiceOne.src ? { ...card, matched: true } : card
      })
      setCards(updatedCards)
      resetTurn()
      return
    }
    const timeout = setTimeout(() => resetTurn(), 1000)
    return () => clearTimeout(timeout)
  }, [choiceOne, choiceTwo, cards])

  useEffect(() => {
    const isGameOver = cards.every((card) => card.matched)
    if (!isGameOver) return
    const timeout = setTimeout(() => shuffleCards(), 3000)
    return () => clearTimeout(timeout)
  }, [cards])
  return (
    <Container>
      <Heading>Memory Game</Heading>
      <CardContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
            handleChoice={handleChoice}
          />
        ))}
      </CardContainer>
    </Container>
  )
}

export default App
