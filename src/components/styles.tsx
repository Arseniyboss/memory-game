import styled from 'styled-components'

type Props = {
  $flipped: boolean
}

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border: 2px solid white;
  border-radius: 0.25rem;
  transition: all ease-in 0.2s;
`

export const CardFrontImage = styled(CardImage)<Props>`
  position: absolute;
  transition-delay: ${({ $flipped }) => $flipped && '0.2s'};
  transform: ${({ $flipped }) => !$flipped && 'rotateY(90deg)'};
`

export const CardBackImage = styled(CardImage)<Props>`
  transition-delay: ${({ $flipped }) => !$flipped && '0.2s'};
  transform: ${({ $flipped }) => $flipped && 'rotateY(90deg)'};
`
