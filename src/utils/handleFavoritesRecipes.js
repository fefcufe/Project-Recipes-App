export const handleButtonFavorite = (setIsFavorite, isFavorite, newRecipe) => {
  const currentFavorites = !isFavorite;
  setIsFavorite(currentFavorites);

  const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  if (currentFavorites === false) {
    /* setIsFavorite(true); */
    const filterFavoriteList = favoriteList
      .filter(({ id }) => id !== newRecipe.idMeal);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filterFavoriteList));
  } else {
    favoriteList.push({ id: newRecipe.idMeal, ...newRecipe });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteList));
  }
};

export const handleButtonFavoriteDrinks = (setIsFavorite, isFavorite, newRecipe) => {
  const currentFavorites = !isFavorite;
  setIsFavorite(currentFavorites);

  const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  if (currentFavorites === false) {
    /* setIsFavorite(true); */
    const filterFavoriteList = favoriteList
      .filter(({ id }) => id !== newRecipe.idDrink);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filterFavoriteList));
  } else {
    favoriteList.push({ id: newRecipe.idDrink, ...newRecipe });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteList));
  }
};

export const ReloadPage = (id, setIsFavorite) => {
  const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (storage) {
    const existFavoriteRecipe = storage.some((recipe) => recipe.id === id);
    setIsFavorite(existFavoriteRecipe);
  }
};
