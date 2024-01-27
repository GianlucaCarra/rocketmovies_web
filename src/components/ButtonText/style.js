import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;

  gap: 8px;
  
  color: ${({ theme }) => theme.COLOR.SALMON};

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.COLOR.SALMON};
  }

  &:hover {
    cursor: pointer;
  }
`;
