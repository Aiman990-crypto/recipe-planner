import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose} // clicking outside closes modal
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full max-h-full overflow-auto relative shadow-xl"
        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-red-500 font-bold text-lg"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title & Image */}
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full rounded mb-4"
          />
        )}

        {/* Summary */}
        {recipe.summary && <p className="text-gray-700 dark:text-gray-300 mb-4">{recipe.summary}</p>}

        {/* Prep Time & Servings */}
        {(recipe.prepTime || recipe.servings) && (
          <p className="text-gray-500 mb-4">
            {recipe.prepTime && <>Prep Time: {recipe.prepTime} | </>}
            {recipe.servings && <>Servings: {recipe.servings}</>}
          </p>
        )}

        {/* Ingredients */}
        {recipe.ingredients?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Instructions */}
        {recipe.instructions?.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeModal;
