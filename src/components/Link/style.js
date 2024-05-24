import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.COLORS.ROSE};
`;

export const LinkReact = styled(Link)`
  color: white;
  background: transparent;
`;
