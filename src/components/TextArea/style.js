import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 18rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border: none;
  resize: none;

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 100;
  }
`;
