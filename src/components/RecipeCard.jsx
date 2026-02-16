import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites, saveFavorites } from "../utils/localStorage";


const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate(); // 🔥 used to go to details page
  const [isFavorite, setIsFavorite] = useState(false);

  // Load favorite state
  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.some((fav) => fav.id === recipe.id));
  }, [recipe.id]);

  // Toggle favorite without navigating
  const toggleFavorite = (e) => {
    e.stopPropagation(); // 🛑 prevents card click navigation

    const favorites = getFavorites();
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    } else {
      updatedFavorites = [...favorites, recipe];
    }

    saveFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
  };

  // Navigate to Recipe Details Page
  const openRecipe = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div
      onClick={openRecipe}
      className="relative bg-white rounded-2xl overflow-hidden shadow-md 
                 hover:shadow-2xl hover:-translate-y-2 transition duration-300 
                 cursor-pointer"
    >
      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover transition duration-500 hover:scale-105"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{recipe.title}</h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-3">
          {recipe.summary}
        </p>
      </div>

      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-3 right-3 p-2 rounded-full text-xl transition ${
          isFavorite
            ? "bg-red-500 text-white scale-110"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </div>
  );
};

export default RecipeCard;
