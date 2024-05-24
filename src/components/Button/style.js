import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 2rem;

  &:disabled {
    opacity: 0.6;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div > a {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
