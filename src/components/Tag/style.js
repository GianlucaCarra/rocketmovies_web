import styled from "styled-components";

export const Container = styled.span`
  padding: 8px 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLOR.GRAY_500};

  color: ${({ theme }) => theme.COLOR.WHITE};
  font-family: 'Roboto', sans-serif;

  width: fit-content;
  white-space: nowrap; 
`;