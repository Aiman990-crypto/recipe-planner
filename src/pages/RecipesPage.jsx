import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { sampleRecipes, categories } from "../data/recipes";

const RecipesPage = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = sampleRecipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-orange-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-10 text-gray-900">
        All Recipes
      </h1>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-3 border rounded-lg shadow-sm text-base sm:text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 sm:px-4 py-2 rounded-full border text-sm sm:text-base transition ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "!text-gray-700 bg-white hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
