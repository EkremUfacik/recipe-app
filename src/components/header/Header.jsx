import { useRef } from "react";
import HeaderDiv, { HeaderForm } from "./style";

const Header = ({ setMeal, setQuerry }) => {
  const inputQuerry = useRef();
  const inputMeal = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuerry(inputQuerry.current.value);
    setMeal(inputMeal.current.value);
  };

  return (
    <HeaderDiv>
      <h1>Recipe App</h1>
      <HeaderForm onSubmit={handleSubmit}>
        <input type="text" ref={inputQuerry} />
        <button type="submit">Search</button>
        <select name="meal" id="meal" ref={inputMeal}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
      </HeaderForm>
    </HeaderDiv>
  );
};

export default Header;
