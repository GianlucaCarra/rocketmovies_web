import { styled } from "styled-components";

import backgroundImg from "../../assets/cinema.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  
`;

export const Form = styled.form`
  padding: 0 145px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 24px;
  }

  > h1 {
    font-size: 48px;
    font-weight: 800;
    color: ${({ theme }) => theme.COLOR.SALMON};
  }

  > span {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLOR.GRAY_200};
  }

  > h2 {
    margin: 48px 0;
  }

  > :last-child {
    margin-top: 42px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;