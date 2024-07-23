import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    transform: scale(0.95);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.95);
  }
`

export const Container = styled.div`
  width: 100%;

  padding: 8rem 25rem;

  .title {
    display: flex;

    justify-content: space-between;
    align-items: center;

    Button {
      width: 20.7rem;
      font-size: 1.6rem;
    }

    > h1 {
      font-size: 3.5rem;
      font-weight: 100;
    }

    Icon {
      color: red;
    }
  }
  .films {
    margin-bottom: 3rem;
  }

  @media (max-width: 915px) {
    width: 100%;

    padding: 8rem 8rem;
  }

  @media (max-width: 480px) {
    width: 100%;

    padding: 6rem 2rem;

    .title {
      > h1 {
        font-size: 2.8rem;
        font-weight: 100;
      }

      Button {
        width: 12.7rem;
        font-size: 1.6rem;
        &:hover {
          transition: 1s;
          transform: scale(1);
          animation: ${pulse} 2s infinite;
        }
      }
    }
  }
`
