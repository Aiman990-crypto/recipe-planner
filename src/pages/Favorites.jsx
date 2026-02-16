import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { getFavorites } from "../utils/localStorage";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  if (favorites.length === 0) {
    return <p className="p-6 text-center text-gray-500">No favorites yet!</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {favorites.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Favorites;
