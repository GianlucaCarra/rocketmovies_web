import styled from "styled-components";

export const Container = styled.input`
  height: 56px;
  width: min(100%, 630px);

  padding: 18px;
  border-radius: 10px;

  font-size: 16px;

  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_700};
  color: ${({ theme }) => theme.COLOR.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLOR.GRAY_300};
    font-size: 16px;
  }
`;
