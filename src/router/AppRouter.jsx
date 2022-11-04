import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginProvider";
import About from "../pages/about/About";

const AppRouter = () => {
  const { log } = useContext(LoginContext);
  return (
    <BrowserRouter>
      {log && <Navbar />}
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="login" index element={<Login />} />
        <Route path="details" element={<Details />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
