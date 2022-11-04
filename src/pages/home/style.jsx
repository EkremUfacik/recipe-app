import styled from "styled-components";
import Flex from "../../components/global/Flex.styled";

export const HomeContainer = styled.div`
  min-height: 90.8vh;
  height: 100%;
  background-color: #3b9197;
  text-align: center;
  padding-bottom: 2rem;
`;

export const Img = styled.img`
  width: 15rem;
  margin-top: 1rem;
`;

export const FlexHome = styled(Flex)`
  margin-top: 2rem;
  gap: 2rem;
`;

const Card = styled.div`
  text-align: center;
  border: 2px solid black;
  width: 25rem;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 2px black;
  padding: 14px;
  background-color: #c1a89e;
  & h2 {
    height: 4rem;
    padding-top: 10px;
  }
  & img {
    margin: 10px;
    border-radius: 10px;
  }

  & button {
    padding: 5px 20px;
    font-size: 16px;
    border-radius: 10px;
    background-color: #a76448;
  }
`;

export default Card;
