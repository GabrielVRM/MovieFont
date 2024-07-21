import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 8rem 25rem;

  div:nth-child(2) {
    gap: 1rem;
    display: flex;

    align-items: center;

    > h1 {
      font-size: 4.6rem;
      font-weight: 100;

      margin: 2rem 2rem 2rem 0;
    }
  }

  .paragraph {
    display: flex;
    align-items: center;
    gap: 2rem;

    > img {
      object-fit: cover;
      width: 3rem;
      border-radius: 50%;
    }
  }
  div:last-child {
    margin-top: 3rem;
    line-height: 3.2rem;
    font-size: 1.8rem;
    text-align: justify;
    font-weight: 100;
  }

  .tag {
    display: flex;
    margin-left: 1rem;
    align-items: start;
    margin-bottom: 3rem;

    border-radius: 1rem;
  }

  .btn {
    width: 20%;
    margin: 0 auto;
    margin-top: 15rem;

    &:hover {
      transition: 1s;
      transform: scale(1);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
      }

      70% {
        transform: scale(1);
      }

      100% {
        transform: scale(0.95);
      }
    }
  }
`
