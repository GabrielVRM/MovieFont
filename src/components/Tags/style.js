import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.6rem;
  padding: 1.4rem 1.4rem;
  border-radius: 0.5rem;
  margin-left: 2rem;

  display: inline-flex;
  gap: 1.4rem;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.WHITE};

  ${({ active }) =>
    active &&
    `
    background-color: transparent;
    border-style: dashed;
    color:#948F99;

    
    `}
`;
