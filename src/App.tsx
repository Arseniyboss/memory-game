import { useState, useEffect } from 'react'
import { ShuffledCard, Choice } from './types'
import { getShuffledCards } from './utils'
import { initialCards } from './cards'
import { Container, Heading, CardContainer } from './styles'
import Card from './components/Card'

const App = () => {
  const [cards, setCards] = useState<ShuffledCard[]>([])
  const [choiceOne, setChoiceOne] = useState<Choice>(null)
  const [choiceTwo, setChoiceTwo] = useState<Choice>(null)
  const [disabled, setDisabled] = useState(false)

  const isFlipped = (card: ShuffledCard) => {
    return card === choiceOne || card === choiceTwo || card.matched
  }

  const shuffleCards = () => {
    const shuffledCards = getShuffledCards(initialCards)
    setCards(shuffledCards)
  }

  const flipMatchingCards = () => {
    const updatedCards = cards.map((card) => {
      return card.img === choiceOne?.img ? { ...card, matched: true } : card
    })
    setCards(updatedCards)
    resetTurn()
  }

  const resetTurn = () => {
    setDisabled(false)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  const handleChoice = (card: ShuffledCard) => {
    if (disabled || card.matched || choiceOne?.id === card.id) return
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    if (!choiceOne || !choiceTwo) return
    setDisabled(true)
    if (choiceOne.img === choiceTwo.img) {
      return flipMatchingCards()
    }
    const timeout = setTimeout(() => resetTurn(), 1000)
    return () => clearTimeout(timeout)
  }, [choiceOne, choiceTwo, cards])

  useEffect(() => {
    const isGameOver = cards.every((card) => card.matched)
    if (isGameOver) {
      const timeout = setTimeout(() => shuffleCards(), 3000)
      return () => clearTimeout(timeout)
    }
  }, [cards])
  return (
    <Container>
      <Heading>Memory Game</Heading>
      <CardContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            flipped={isFlipped(card)}
            handleChoice={handleChoice}
          />
        ))}
      </CardContainer>
    </Container>
  )
}

export default App
