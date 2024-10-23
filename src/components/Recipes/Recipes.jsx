/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({addRecipeToQueue}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);


    return (
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} addRecipeToQueue={addRecipeToQueue}></Recipe>)
            }
        </div>
    );
};

export default Recipes;