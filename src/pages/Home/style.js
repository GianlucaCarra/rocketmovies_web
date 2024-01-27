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
  padding-right: 16px;
  overflow-y: scroll;

  height: 75vh;

  .title {
    display: flex;
    justify-content: space-between;

    margin-bottom: 40px;
  }

  
`;

export const NewButton = styled.a`
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