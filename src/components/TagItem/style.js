import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLOR.BACKGROUND_700};
  color: ${({ theme }) => theme.COLOR.WHITE};

  padding: 16px;
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLOR.GRAY_300}` : "none"};
  border-radius: 10px;

  > input {
    height: 24px;
    background: transparent;
    border: none;
    width: fit-content;

    font-family: 'Roboto', sans-serif;

    &::placeholder {
      color: ${({ theme }) => theme.COLOR.GRAY_300};
    }
  }

  > button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLOR.SALMON};
    
    > svg {
      font-size: 22px;
    }
  }
`;