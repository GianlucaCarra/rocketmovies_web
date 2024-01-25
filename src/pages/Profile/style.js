import { styled } from "styled-components";

export const Container = styled.main`
   .head {
    height: 20vh;
    background-color: ${({ theme }) => theme.COLOR.SALMON_5};

    max-width: 1120px;
    margin: 0 auto;
  }
`;