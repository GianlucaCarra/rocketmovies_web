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