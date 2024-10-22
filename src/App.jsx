import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes/OurRecipes";

const App = () => {
  return (
    <div className="w-10/12 mx-auto px-4">
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;