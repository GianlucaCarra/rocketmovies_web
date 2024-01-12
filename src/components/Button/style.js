import styled from "styled-components";

export const Container = styled.button`
  height: 56px;
  width: 100%;

  text-align: center;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLOR.SALMON};
  color: ${({ theme }) => theme.COLOR.BACKGROUND_800};
`;
