import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
  
  background-color: ${({ theme }) => theme.COLOR.RED};
  padding: 10px;

  color: ${({ theme }) => theme.COLOR.WHITE};
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`;