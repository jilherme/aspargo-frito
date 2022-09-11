import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 40px;

    h1 {
      font-size: 4rem;
      font-weight: normal;
      font-family: Sundries;
      color: #d88aa3;
      padding: 1rem;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  gap: 1.5rem;
  background-color: white;

  div.infos-row {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    max-width: 1200px;

    img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 767px) {
    div.infos-row {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;
