import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import paginate from "./utils";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("beef");
  const [categorie, setCategorie] = useState([]);
  const [cateItem, setCateItem] = useState([]);

  const fetchData = () => {
    setLoading(true);
    let one = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
    let two = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const requestOne = axios.get(`${one}${searchTerm}`);
    const requestTwo = axios.get(two);
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          const { meals } = responseOne;
          const { categories } = responseTwo;

          if (meals) {
            const newMeals = meals.map((item) => {
              const { idMeal, strMeal, strMealThumb } = item;
              return {
                id: idMeal,
                name: strMeal,
                image: strMealThumb,
              };
            });
            setCategorie(paginate(newMeals));
            setLoading(false);
          } else {
            setCategorie([]);
            setLoading(false);
          }

          if (categories) {
            const newCate = categories.map((item) => {
              const { idCategory, strCategory, strCategoryThumb } = item;
              return {
                id: idCategory,
                name: strCategory,
                image: strCategoryThumb,
              };
            });
            setCateItem(newCate);
            setLoading(false);
          } else {
            setCateItem([]);
            setLoading(false);
          }
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, searchTerm, setSearchTerm, categorie, cateItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
