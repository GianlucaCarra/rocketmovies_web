import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  
  display: flex;
  gap: 10px;
  align-items: center;

  li {
    font-size: 20px;

    color: ${({ theme }) => theme.COLOR.SALMON};

    display: flex;
    align-items: center;
  }
`;