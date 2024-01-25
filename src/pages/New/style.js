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

  > h1 {
    margin: 24px 0 40px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > div {
    display: flex;
    gap: 40px;
  }
`;

export const Textarea = styled.textarea`
  height: 200px;
  width: 100%;

  padding: 18px;
  border-radius: 10px;

  font-size: 16px;

  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_700};
  color: ${({ theme }) => theme.COLOR.WHITE};

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLOR.GRAY_300};
    font-size: 16px;
  }

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLOR.BACKGROUND_700};
  }

  &::-webkit-scrollbar-thumb {
    border: 6px solid ${({ theme }) => theme.COLOR.BACKGROUND_700};
  }
`;

export const AddTag = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > section {
    flex-wrap: wrap;

    border-radius: 8px;
    padding: 16px;
    
    background-color: ${({ theme }) => theme.COLOR.BACKGROUND_900};
  }
`;