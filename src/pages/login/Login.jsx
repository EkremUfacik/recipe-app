import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginProvider";
import { Container } from "./style";
import logImg from "./../../assets/meal2.svg";
import Form from "./style";

const Login = () => {
  const navigate = useNavigate();
  const { setLog } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLog(true);
    navigate("/");
  };

  return (
    <Container>
      <Form action="" onSubmit={handleSubmit}>
        <div>
          <img src={logImg} style={{ width: "130px" }} alt="" />
        </div>
        <h1>RECIPE APP</h1>
        <input type="email" required />
        <input type="password" name="" id="" required />
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

export default Login;
