import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';
// import Foods from './pages/Foods';
// import Drinks from './pages/Drinks';
// import Explore from './pages/Explore';
// import Profile from './pages/Profile';
// import FavoriteRecipes from './pages/FavoriteRecipes';
// import FoodExploreIngredients from './pages/FoodExploreIngredients';
// import FoodExploreNationalities from './pages/FoodExploreNationalities';
// import DrinksExploreIngredients from './pages/DrinksExploreIngredients';
// import FoodsExplore from './pages/FoodsExplore';
// import DrinksExplore from './pages/DrinksExplore';
// import FoodProgress from './pages/FoodProgress';
// import DrinkProgress from './pages/DrinkProgress';

// import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route
            exact
            path="/foods/:id" // id-da-receita
            render={ (props) => <Foods { ...props } /> }
          />
          <Route
            exact
            path="/drinks/:id" // id-da-receita
            render={ (props) => <Drinks { ...props } /> }
          />
          <Route
            exact
            path="/foods/:id/in-progress" // id-da-receita
            render={ (props) => <FoodProgress { ...props } /> }
          />
          <Route
            exact
            path="/drinks/:id/in-progress" // id-da-receita
            render={ (props) => <DrinkProgress { ...props } /> }
          />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="explore/foods" component={ FoodsExplore } />
          <Route exact path="explore/drinks" component={ DrinksExplore } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ FoodExploreIngredients }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ DrinksExploreIngredients }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ FoodExploreNationalities }
          />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ RecipesDone } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } /> */}
      </Switch>
    </RecipesProvider>
  );
}

export default App;
