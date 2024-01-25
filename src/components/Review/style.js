import { styled } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLOR.SALMON_5};
  
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 24px;

  h1 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  > footer {
    display: flex;
    gap: 8px;
    overflow: scroll;

    margin-top: 15px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Description = styled.p`
  margin-top: 15px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 

  color: ${({ theme }) => theme.COLOR.GRAY_300};

  font-family: 'Roboto', sans-serif;
`;