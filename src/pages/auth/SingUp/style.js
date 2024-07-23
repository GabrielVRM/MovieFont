import styled from 'styled-components'
import Sing from '../../../assets/Sing.png'

export const Container = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);

  @media (max-width: 730px) {
    display: grid;
    height: 100vh;

    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

export const Form = styled.form`
  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    line-height: 3.5rem;
    letter-spacing: 0.1rem;
    font-size: 3.6rem;
  }

  > P {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 3rem;
  }

  > h2 {
    margin-bottom: 1.6rem;
  }
`

export const SingInContent = styled.div`
  place-content: center;
  place-self: center;

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`

export const SingInImage = styled.div`
  background: url(${Sing}) no-repeat center center;
  background-size: cover;
  @media (max-width: 730px) {
    display: none;
  }
`
