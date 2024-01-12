import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;

  padding: 24px 0;
  display: flex;
  gap: 64px;
  
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLOR.GRAY_400};
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.COLOR.SALMON};

  font-size: 28px;
  font-weight: 700;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  gap: 9px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    > strong {
      color: ${({ theme }) => theme.COLOR.WHITE};
      font-size: 16px;
      line-height: 20px;
    }

    > a {
      color: ${({ theme }) => theme.COLOR.GRAY_300};
      font-size: 16px
    }
  }

  > img {
    height: 64px;
    width: 64px;
    
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLOR.GRAY_400};
  }
`;
