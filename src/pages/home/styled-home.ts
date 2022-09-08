import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;

  h1 {
    font-family: Sundries;
    font-size: 64px;
    text-align: center;
    font-weight: normal;
    color: #f4989c;

    margin-top: 50px;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  gap: 40px;
  justify-content: center;

  div.project {
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      position: absolute;
      color: #f4989c;
      font-size: 32px;
      text-shadow: 0 0 2px #000;
      font-family: Sundries;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  div.disabled {
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    /* background: #dac4f7; */
    background: #d6f6dd;
    cursor: not-allowed;
    border-radius: 5px;
    color: #f4989c;
    font-size: 20px;
    font-family: Sundries;
  }
`;
