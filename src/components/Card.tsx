import { Card as CardProps } from '@/types'
import { useGameContext } from '@/GameContext'
import { CardFrontImage, CardBackImage } from './styles'

type Props = {
  card: CardProps
}

const Card = ({ card }: Props) => {
  const { handleChoice, isFlipped } = useGameContext()
  return (
    <article>
      <CardFrontImage $flipped={isFlipped(card)} src={card.img} alt="" />
      <CardBackImage
        src="/img/cover.png"
        alt=""
        width={300}
        height={300}
        $flipped={isFlipped(card)}
        onClick={() => handleChoice(card)}
      />
    </article>
  )
}

export default Card
