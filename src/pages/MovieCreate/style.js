import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 8rem 40rem;

  height: 100vh;
  overflow-y: auto;

  .inputs {
    display: flex;
    align-items: center;
    gap: 10rem;
    margin-bottom: 3rem;
  }

  > h1 {
    font-size: 4.6rem;
    font-weight: 100;

    margin: 2rem 2rem 2rem 0;
  }
  h2 {
    font-size: 2rem;
    font-weight: 100;
    margin: 0.5rem;
    margin-bottom: 2rem;
  }
  .tag {
    background-color: #0d0c0f;
    padding: 1rem;
    border-radius: 0.8rem;
  }

  .buttons {
    display: flex;
    margin-top: 3rem;
    gap: 10rem;
  }

  Button:first-child {
    background-color: #0d0c0f;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  @media (max-width: 1600px) {
    padding: 8rem 20rem;
  }

  @media (max-width: 1020px) {
    padding: 8rem 10rem;
  }
`;
