import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { log } = useContext(LoginContext);
  return <div>{log ? <Outlet /> : <Navigate to="login" />}</div>;
};

export default PrivateRouter;
