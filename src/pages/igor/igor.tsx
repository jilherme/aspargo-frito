import { useNavigate } from "react-router-dom";
import { Igo } from "../../assets";
import * as s from "./styled-igor";

export const Igor = () => {
  const navigate = useNavigate();

  return (
    <s.Container>
      <header>
        <h1>Igor Haag</h1>
      </header>

      <s.Infos>
        <h2>About me</h2>

        <div className="infos-row">
          <img src={Igo} />

          <p>
            My name is Ígor Haag, I'm 22 years old, living in Araricá, Rio
            Grande do Sul. I'm working as frontend developer since 2019, having
            graduated in the same year as an electronics technician.
          </p>
        </div>
      </s.Infos>
    </s.Container>
  );
};
