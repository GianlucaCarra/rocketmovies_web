import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR.RED};
  color: ${({ theme }) => theme.COLOR.WHITE};
  padding: 10px;
  animation: appear 1s;

  span {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      display: none;
    }
  }
`;