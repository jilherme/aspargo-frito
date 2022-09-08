import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

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
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 200px;
  gap: 20px;

  div.infos-row {
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;

    img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
`;
