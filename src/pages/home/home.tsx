import { useNavigate } from "react-router-dom";
import { Nerd, Pikachu } from "../../assets";
import * as s from "./styled-home";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <s.MainContainer>
      <h1>Welcome to Aspargo Frito!</h1>

      <s.Projects>
        <div className="project" onClick={() => navigate("/igo")}>
          <img src={Pikachu} />

          <span>Igo</span>
        </div>

        <div className="project" onClick={() => navigate("/augusto")}>
          <img src={Nerd} />

          <span>Augusto</span>
        </div>

        <div className="disabled">Coming soon...</div>

        <div className="disabled">Coming soon...</div>

        <div className="disabled">Coming soon...</div>

        <div className="disabled">Coming soon...</div>
      </s.Projects>
    </s.MainContainer>
  );
};
