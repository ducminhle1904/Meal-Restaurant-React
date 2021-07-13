import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

function SingleMealPage() {
  const { id } = useParams();
  const [singleMeal, setSingleMeal] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [readMore, setReadMore] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    async function getMeal() {
      try {
        const response = await axios.get(`${url}${id}`);
        const meal = response.data;
        const { meals } = meal;
        if (meals) {
          const {
            idMeal: id,
            strMeal: name,
            strCategory: category,
            strArea: area,
            strInstructions: instructions,
            strMealThumb: image,
            strYoutube: youtube,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,

            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
            strMeasure16,
            strMeasure17,
            strMeasure18,
            strMeasure19,
            strMeasure20,
          } = meals[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
          ];

          const measure = [
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
            strMeasure16,
            strMeasure17,
            strMeasure18,
            strMeasure19,
            strMeasure20,
          ];
          const ingredientsResult = ingredients.filter((e) => e);
          const measureResult = measure.filter((e) => e !== " ");
          const newMeals = {
            name,
            category,
            area,
            instructions,
            image,
            youtube,
            ingredientsResult,
            measureResult,
          };

          setSingleMeal(newMeals);
        } else {
          setSingleMeal(null);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    getMeal();
  }, [id]);
  if (!singleMeal) {
    return <h2 className="section-title">no meal to display</h2>;
  } else {
    const {
      name,
      category,
      area,
      instructions,
      image,
      youtube,
      ingredientsResult,
      measureResult,
    } = singleMeal;
    return (
      <section className="section-center">
        <Link
          to="/"
          style={{
            marginLeft: 10,
            marginTop: 10,
            position: "absolute",
            top: -40,
            left: -65,
            color: "white",
          }}
        >
          <AiOutlineClose />
        </Link>
        <div className="meal-info">
          <div className="meal-image">
            <img src={image} alt="" />
            <a
              href={youtube}
              className="btn"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 30, display: "inline-block" }}
            >
              Video Instructions
            </a>
          </div>
          <div className="meal-details">
            <h3>{name}</h3>
            <h4>
              <span>Category:</span> {category}
            </h4>
            <h4>
              <span>Country:</span> {area}
            </h4>
            <p>
              <span>Instructions:</span>{" "}
              {readMore ? instructions : `${instructions.substring(0, 200)}...`}
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : "  read more"}
              </button>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleMealPage;
