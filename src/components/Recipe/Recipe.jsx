/* eslint-disable react/prop-types */
const Recipe = ({ recipe, addRecipeToQueue }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="card bg-base-100 border-2">
      <figure className="px-8 pt-8">
        <img
          className="w-full md:h-52 rounded-xl"
          src={recipe_image}
          alt="recipe image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl text-gray-800 font-semibold">
          {recipe_name}
        </h2>
        <p className="text-gray-600 text-base">{short_description}</p>
        <hr />
        <div>
          <h3 className="text-lg text-gray-800 font-medium">
            Ingredients: {ingredients.length}
          </h3>
          <ul className="ml-8">
            {ingredients.map((item, index) => (
              <li className="list-disc text-gray-600" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex gap-4">
          <div>
            <i className="fa-regular fa-clock  mr-2 text-xl"></i>
            {preparing_time} minutes
          </div>
          <div>
          <i className="fa-solid fa-fire-flame-curved mr-2 text-xl"></i> {calories}
            calories
          </div>
        </div>
        <div className="card-actions">
          <button onClick={() => addRecipeToQueue(recipe)} className="btn rounded-full text-xl text-gray-800 px-8 mt-6 font-medium bg-[#0BE58A]">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
