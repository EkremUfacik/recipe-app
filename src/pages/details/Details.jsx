import { useLocation, useNavigate } from "react-router-dom";
import Container from "./style";
import { FlexD } from "./style";
import detailImg from "./../../assets/diet.svg";
import Flex from "../../components/global/Flex.styled";
import { useContext } from "react";
import { useEffect } from "react";
import { LoginContext } from "../../context/LoginProvider";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { log } = useContext(LoginContext);

  useEffect(() => {
    !log && navigate("/");
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Flex style={{ justifyContent: "space-evenly", gap: "2rem" }}>
        <h2>{state.label}</h2>
        <div>
          <img src={detailImg} alt="" style={{ width: "10rem" }} />
        </div>
      </Flex>
      <FlexD>
        <div>
          <h3>NUTRIENTS</h3>
          <p>
            {state.totalDaily.CA.label} :
            <span>{state.totalDaily.CA.quantity.toFixed(2)}</span>
          </p>

          <p>
            {state.totalDaily.CHOCDF.label} :
            <span>{state.totalDaily.CHOCDF.quantity.toFixed(2)}</span>
          </p>

          <p>
            {state.totalDaily.CHOLE.label} :
            <span>{state.totalDaily.CHOLE.quantity.toFixed(2)}</span>
          </p>

          <p>
            {state.totalDaily.ENERC_KCAL.label} :
            <span>{state.totalDaily.ENERC_KCAL.quantity.toFixed(2)}</span>
          </p>
        </div>
        <div>
          <img className="img2" src={state.image} alt="" />
        </div>

        <div style={{ textAlign: "justify" }}>
          {state.ingredientLines.map((i, index) => {
            return (
              <p>
                <span style={{ color: "blue" }}>{index + 1}</span>-{i}
              </p>
            );
          })}
        </div>
      </FlexD>
    </Container>
  );
};

export default Details;
