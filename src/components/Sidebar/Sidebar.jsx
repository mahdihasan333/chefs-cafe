/* eslint-disable react/prop-types */
const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      {/* Want to Cook Table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">
          Want to Cook: {recipeQueue.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {handleRemove(recipe.recipe_id) 
                    calculateTimeAndCalories(recipe.preparing_time, recipe.calories)}}
                    className="btn rounded-full text-gray-800 px-2 py-1 my-2 font-medium bg-[#0BE58A]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Currently Cooking Table */}
      <div className="overflow-x-auto mt-8">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">
          Currently Cooking: {preparedRecipe.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <th></th>
              <th className="text-sm font-normal">Total Time = {totalTime}</th>
              <th className="text-sm font-normal">Total Calories = {totalCalories}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
