import { useGameContext } from './GameContext'
import { Container, CardContainer } from './styles'
import Card from './components/Card'

const App = () => {
  const { cards, turns } = useGameContext()
  return (
    <Container>
      <h1>Memory Game</h1>
      <p>Turns: {turns}</p>
      <CardContainer>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardContainer>
    </Container>
  )
}

export default App
