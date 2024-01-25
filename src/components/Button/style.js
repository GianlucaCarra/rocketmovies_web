import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  text-align: center;

  border-radius: 10px;
  padding: 16px 32px;

  background-color: ${({ theme }) => theme.COLOR.SALMON};
  color: ${({ theme }) => theme.COLOR.BACKGROUND_800};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  
  color: ${({ theme }) => theme.COLOR.GRAY_500};

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.COLOR.GRAY_500};
  }
`;
