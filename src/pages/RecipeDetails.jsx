import React from "react";
import { useParams, Link } from "react-router-dom";
import { sampleRecipes } from "../data/recipes";
import { motion } from "framer-motion";

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = sampleRecipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center py-20 text-gray-900">Recipe not found</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.45 }}
      className="max-w-5xl mx-auto pt-10 pb-16 px-6 bg-gradient-to-b from-orange-50 to-white text-gray-900"
    >
      {/* Image */}
      <motion.img
        src={recipe.image}
        alt={recipe.title}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.06 }}
        className="w-full max-h-[500px] object-contain mx-auto rounded-3xl shadow-xl"
      />

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mt-8 mb-4 text-gray-900">
        {recipe.title}
      </h1>

      {/* Summary */}
      <p className="mb-6 text-gray-800 text-lg sm:text-xl">{recipe.summary}</p>

      {/* Meta */}
      <div className="flex flex-wrap gap-6 mb-10 text-sm sm:text-base text-gray-700">
        <span>⏱ {recipe.prepTime}</span>
        <span>🍽 Serves {recipe.servings}</span>
      </div>

      {/* Ingredients */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-800">
          {recipe.instructions.map((step, index) => (
            <li
              key={index}
              className="transition duration-300 hover:scale-[1.01] hover:text-orange-600"
            >
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        ← Back to Recipes
      </Link>
    </motion.div>
  );
};

export default RecipeDetails;
