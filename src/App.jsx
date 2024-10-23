import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes/OurRecipes";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipes) => previousRecipes.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe already exists in the queue.");
    }
  };


  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
      {/* Recipe Cards Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar Section */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;
