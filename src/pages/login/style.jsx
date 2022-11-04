import styled from "styled-components";
import Flex from "../../components/global/Flex.styled";

export const Container = styled(Flex)`
  height: 100vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Form = styled.form`
  background-color: #00ffff31;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 35rem;
  height: 35rem;
  gap: 2rem;
  border-radius: 50%;
  & input {
    width: 20rem;
    padding: 8px;
    font-size: 20px;
  }

  & button {
    padding: 10px 30px;
    background-color: #d39494;
    border-radius: 10px;
    border: none;
    font-size: 1.1rem;
  }
`;

export default Form;
