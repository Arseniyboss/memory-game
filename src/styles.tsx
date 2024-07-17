import styled from 'styled-components'

export const Container = styled.main`
  max-width: 850px;
  margin: 0 auto;
`

export const Heading = styled.h1`
  font-size: 2.3rem;
  margin-top: 1.5rem;
  text-align: center;
  color: #fff;
`

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  article {
    position: relative;
    cursor: pointer;
  }
`
