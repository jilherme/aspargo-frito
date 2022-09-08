// import "./global-style.css";
import AppRoutes from "./routes/routes";
import GlobalStyle, { Main } from "./styles/global-style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
}

export default App;
