import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 15px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLOR.GRAY_500};

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: ${({ theme }) => theme.COLOR.WHITE};
`;