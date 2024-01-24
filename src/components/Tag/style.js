import { styled } from "styled-components";

export const Container = styled.div`
  padding: 8px 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLOR.GRAY_500};

  > span {
    color: ${({ theme }) => theme.COLOR.WHITE};
    font-family: 'Roboto', sans-serif;
  }
`;