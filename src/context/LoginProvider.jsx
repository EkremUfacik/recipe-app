import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [log, setLog] = useState(false);

  return (
    <LoginContext.Provider value={{ log, setLog }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
