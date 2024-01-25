import styled from "styled-components";

export const Container = styled.div`
  height: 56px;
  width: min(100%, 630px);

  border-radius: 10px;

  font-size: 16px;

  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_700};
  color: ${({ theme }) => theme.COLOR.WHITE};

  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLOR.GRAY_300};
    margin-left: 14px;
  }

  > input {
    padding: 18px;

    background-color: transparent;
    border: none;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLOR.GRAY_300};
      font-size: 16px;
    }
  }
`;
