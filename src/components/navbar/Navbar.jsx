import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginProvider";
import Nav, { Div, Hamburger, Menu, NavLink } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { setLog } = useContext(LoginContext);
  const navigate = useNavigate();

  const logout = () => {
    setLog(false);
    navigate("/login");
  };
  return (
    <Nav show={show}>
      <Menu>
        <NavLink to="/">
          <i>EKREM U /</i> <span>RECIPE</span>{" "}
        </NavLink>
        <Hamburger>
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </Hamburger>
      </Menu>

      <Div onClick={() => setShow(!show)}>
        <NavLink to="about">ABOUT</NavLink>

        <a href="https://github.com/EkremUfacik" target="blank">
          GITHUB
        </a>

        <p onClick={logout}>LOGOUT</p>
      </Div>
    </Nav>
  );
};

export default Navbar;
