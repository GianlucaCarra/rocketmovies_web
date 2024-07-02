import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_800};
  display: grid;
  place-items: center;

  #loader {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    
    border: 2px solid ${({ theme }) => theme.COLOR.BACKGROUND_800};
    border-top: 2px solid ${({ theme }) => theme.COLOR.WHITE};
    border-radius: 50%;

    animation: spin .6s linear infinite;
    transform-origin: center;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;