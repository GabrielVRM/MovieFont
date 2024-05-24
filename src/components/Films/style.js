import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 3rem 3rem;

  margin-bottom: 3rem;

  background: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 1rem;

  h1 {
    font-size: 2.4rem;
    margin-left: 2rem;
  }
  p {
    margin-left: 2rem;
    margin-top: 1.2rem;
    line-height: 2rem;
    font-weight: 100;
  }

  div:nth-child(2) {
    margin-left: 2rem;
  }

  .tag {
    margin-top: 2rem;
    display: flex;
    align-items: start;

    border-radius: 1rem;
  }
`;
