import { useNavigate } from "react-router-dom";
import * as s from "./styled-augusto";

export const Augusto = () => {
  const navigate = useNavigate();

  return (
    <s.Container>
      <h1>Augusto</h1>
    </s.Container>
  );
};
