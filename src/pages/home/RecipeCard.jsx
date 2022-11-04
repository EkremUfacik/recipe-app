import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card, { FlexHome } from "./style";

const RecipeCard = ({ meal, querry }) => {
  const [content, setContent] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  useEffect(() => {
    const url = `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
    setLoad(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setError(true);
        }
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.log(err))
      .finally(() => setLoad(false));
    // eslint-disable-next-line
  }, [querry, meal]);
  console.log(error);

  console.log(content);
  return (
    <>
      {load && <h2>Loading...</h2>}
      {error && <p>Something went wrong!</p>}
      <FlexHome>
        {content?.hits.map((h, i) => {
          return (
            <Card key={i}>
              <h2>{h.recipe.label}</h2>
              <div>
                <img src={h.recipe.image} alt="" />
              </div>

              <button onClick={() => navigate("details", { state: h.recipe })}>
                Details
              </button>
            </Card>
          );
        })}
      </FlexHome>
    </>
  );
};

export default RecipeCard;
