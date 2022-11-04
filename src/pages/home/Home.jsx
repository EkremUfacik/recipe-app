import { useState } from "react";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeContainer, Img } from "./style";
import menuImg from "../../assets/home.svg";

const Home = () => {
  const [querry, setQuerry] = useState("");
  const [meal, setMeal] = useState("");

  return (
    <HomeContainer>
      <Img src={menuImg} />
      <Header setQuerry={setQuerry} setMeal={setMeal} />

      {querry && <RecipeCard meal={meal} querry={querry} />}
    </HomeContainer>
  );
};

export default Home;
