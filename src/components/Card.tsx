import { Card as CardType } from '@/types'
import { CardFrontImage, CardBackImage } from './styles'

type Props = {
  card: CardType
  flipped: boolean
  disabled: boolean
  handleChoice: (card: CardType) => void
}

const Card = ({ card, flipped, disabled, handleChoice }: Props) => {
  const handleClick = () => {
    if (disabled) return
    handleChoice(card)
  }
  return (
    <article>
      <CardFrontImage $flipped={flipped} src={card.src} alt='' />
      <CardBackImage
        src='/img/cover.png'
        alt=''
        $flipped={flipped}
        onClick={handleClick}
      />
    </article>
  )
}

export default Card
