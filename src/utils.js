const paginate = (meals) => {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(meals.length / itemsPerPage);

  const newMeals = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return meals.slice(start, start + itemsPerPage);
  });

  return newMeals;
};

export default paginate;
