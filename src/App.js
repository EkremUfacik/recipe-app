import AppRouter from "./router/AppRouter";
import LoginProvider from "./context/LoginProvider";
import { GlobalStyles } from "./components/global/Global.styled";

function App() {
  return (
    <LoginProvider>
      <GlobalStyles />
      <AppRouter />
    </LoginProvider>
  );
}

export default App;
