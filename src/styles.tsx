import styled from 'styled-components'

export const Container = styled.main`
  max-width: 850px;
  margin: 0 auto;

  h1,
  p {
    margin-top: var(--spacing);
    text-align: center;
    color: white;
  }

  p {
    font-size: 1.2rem;
  }
`

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--spacing);
  padding: var(--spacing);

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  article {
    position: relative;
    cursor: pointer;
  }
`
