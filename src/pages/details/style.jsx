import styled from "styled-components";
import Flex from "../../components/global/Flex.styled";

const Container = styled.div`
  /* margin-top: 5rem; */
  padding-bottom: 3rem;
  height: 100%;
  min-height: 90.8vh;
  padding-top: 5rem;
  text-align: center;
  background-color: #b8ded1;
  & .img2 {
    border-radius: 10px;
  }
`;

export const FlexD = styled(Flex)`
  background-color: #bab6b6aa;
  border: 2px solid grey;
  padding: 1rem;
  margin: 0 auto;
  width: 90%;
  gap: 2rem;
  & div {
    flex: 1;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export default Container;
