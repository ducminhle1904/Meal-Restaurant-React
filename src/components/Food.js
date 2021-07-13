import React from "react";
import { useGlobalContext } from "../context";
import SingleMeal from "./SingleMeal";

function Food() {
  const { useCallback } = React;
  const { categorie, loading, cateItem, searchTerm, setSearchTerm } =
    useGlobalContext();
  const [page, setPage] = React.useState(0);
  const [category, setCategory] = React.useState([]);
  const [active, setActive] = React.useState(null);
  React.useEffect(() => {
    if (loading) return;
    setCategory(categorie[page]);
  }, [loading, page, categorie]);

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = categorie.length - 1;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > categorie.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const MenuItem = ({ name, onclick, isActive, id }) => (
    <button
      onClick={useCallback(() => onclick(id), [id, onclick])}
      className={`${isActive ? "active" : ""}`}
    >
      {name}
    </button>
  );
  return (
    <section className="food">
      <div className="container">
        <div className="row">
          <div className="food_menu">
            <div className="food_menu-title">
              <span className="subtitle">Select you meal</span>
              <h3>
                Popular <strong className="text-primary">Foods</strong>
              </h3>
            </div>
            <ul>
              {cateItem.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      setSearchTerm(item.name);
                    }}
                    disabled={loading}
                  >
                    <MenuItem
                      {...item}
                      onclick={setActive}
                      isActive={active === item.id}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="food_item">
            <h3 className="food_item-title">{searchTerm.toUpperCase()}</h3>
            <div className="food_item-image">
              {category.map((item) => {
                return <SingleMeal key={item.id} {...item} />;
              })}
            </div>
            <div className="food_item-btn">
              <button
                disabled={loading}
                className="prev-btn"
                onClick={prevPage}
              >
                &lt;
              </button>
              <button
                disabled={loading}
                className="next-btn"
                onClick={nextPage}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Food;
