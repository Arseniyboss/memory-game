import { ShuffledCard } from '@/types'
import { CardFrontImage, CardBackImage } from './styles'

type Props = {
  card: ShuffledCard
  flipped: boolean
  handleChoice: (card: ShuffledCard) => void
}

const Card = ({ card, flipped, handleChoice }: Props) => {
  const handleClick = () => {
    handleChoice(card)
  }
  return (
    <article>
      <CardFrontImage $flipped={flipped} src={card.img} alt='' />
      <CardBackImage
        src='/img/cover.png'
        alt=''
        width={300}
        height={300}
        $flipped={flipped}
        onClick={handleClick}
      />
    </article>
  )
}

export default Card
