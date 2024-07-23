import styled from 'styled-components'

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
`
