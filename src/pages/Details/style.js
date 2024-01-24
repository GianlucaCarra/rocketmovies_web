import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header" 
  "content";

  > main {
    grid-area: content;
    padding: 50px 0;
    overflow: hidden;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  width: fit-content;
  padding-right: 16px;
  overflow-y: scroll;

  height: 75vh;
`;

export const Title = styled.div`
  display: flex;

  gap: 20px;
  align-items: center;
  margin: 24px 0 0 0;

  h1 {
    max-width: 400px;
    word-wrap: break-word;
  }
`;

export const Infos = styled.div`
  display: flex;

  gap: 20px;
  align-items: center;
  margin: 24px 0 40px 0;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 16px;
    width: 16px;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLOR.GRAY_400};
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 16px;

    color: ${({ theme }) => theme.COLOR.SALMON};
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 40px;
`;