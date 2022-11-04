import styled from "styled-components";

const HeaderDiv = styled.header`
  text-align: center;
  padding: 1rem;
  /* padding-top: 8rem; */
  & h1 {
    font-size: 40px;
    font-weight: 400;
    color: #822a05;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  & input {
    height: 2.5rem;
    background-color: aquamarine;
    border: 1px solid green;
    font-size: 18px;
    width: 30%;
    min-width: 15rem;
    max-width: 20rem;
    text-indent: 1rem;
  }
  & button {
    height: 2.5rem;
    width: 6rem;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    color: #626dd2;
    background-color: #a5e53e;
    cursor: pointer;
  }
  & select {
    background-color: aquamarine;
    width: 7rem;
    font-size: 16px;
    text-align: center;
    height: 2.5rem;
  }
`;

export default HeaderDiv;
