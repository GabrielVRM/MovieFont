import styled from "styled-components";

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
`;
