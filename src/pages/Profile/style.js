import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 20vh;

    background-color: ${({ theme }) => theme.COLOR.SALMON_5};

    display: flex;
    align-items: center;
    padding: 0 144px;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: -90px auto 0;
  
  .text-input {
    display: flex;
    flex-direction: column;
    gap: 24px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;

  margin: 0 auto 50px;
  height: 186px;
  width: 186px;

  > img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLOR.SALMON};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    svg {
      font-size: 20px;

      color: ${({ theme }) => theme.COLOR.GRAY_500};
    }

    input {
      display: none;
    }
  }
`;