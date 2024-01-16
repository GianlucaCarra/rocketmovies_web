import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLOR.SALMON};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLOR.BACKGROUND_800};
    border-radius: 8px;
  }

  body {
    background-color: ${({ theme }) => theme.COLOR.BACKGROUND_800};

    -webkit-font-smoothing: antialiased;
  }

  body, a, button, input, *::placeholder {
    color: ${({ theme }) => theme.COLOR.WHITE};
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 16px;

    border: none;
    box-shadow: none;
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
  
  *:focus {
    outline: none;
  }

  button {
    font-weight: 500;
  }
`;