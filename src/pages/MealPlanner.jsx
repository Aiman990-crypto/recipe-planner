import React, { useState } from "react";
import { sampleRecipes } from "../data/recipes";
import {
  DndContext,
  closestCenter,
  useDraggable,
  useDroppable,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/* ---------------- DRAGGABLE RECIPE ---------------- */
const DraggableRecipe = ({ recipe }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: recipe.id.toString(),
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="p-5 sm:p-4 bg-white rounded-xl shadow-md cursor-grab active:cursor-grabbing
        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-orange-100 touch-none"
    >
      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{recipe.title}</h4>
    </div>
  );
};

/* ---------------- DAY COLUMN ---------------- */
const DayColumn = ({ day, meals }) => {
  const { setNodeRef, isOver } = useDroppable({ id: day });

  return (
    <div
      ref={setNodeRef}
      className={`rounded-xl p-4 min-h-[260px] transition-all duration-300 border-2
        ${
          isOver
            ? "bg-green-50 border-green-400 scale-[1.02]"
            : "bg-white border-dashed border-gray-200"
        }`}
    >
      <h3 className="font-bold mb-3 text-center text-orange-600 text-sm sm:text-base">{day}</h3>

      {meals.length === 0 && (
        <p className="text-xs sm:text-sm text-gray-400 text-center">
          Drop meal here 🍽️
        </p>
      )}

      {meals.map((meal, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-green-400 to-green-200
            p-2 rounded-md mb-2 text-sm shadow hover:scale-[1.02] transition"
        >
          {meal?.title}
        </div>
      ))}
    </div>
  );
};

/* ---------------- MAIN PLANNER ---------------- */
const MealPlanner = () => {
  const [planner, setPlanner] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  // Sensors for desktop + mobile
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const recipe = sampleRecipes.find((r) => r.id.toString() === active.id);
    if (!recipe) return;

    setPlanner((prev) => ({
      ...prev,
      [over.id]: [...prev[over.id], recipe],
    }));
  };

  const clearPlanner = () => {
    setPlanner({
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Weekly Meal Planner
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Drag recipes into your week and organize meals effortlessly.
            </p>
          </div>

          {/* Recipe Bank */}
          <div className="mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-orange-600">
              Choose Your Meals
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {sampleRecipes.map((recipe) => (
                <DraggableRecipe key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>

          {/* Week Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {daysOfWeek.map((day) => (
              <DayColumn key={day} day={day} meals={planner[day]} />
            ))}
          </div>

          {/* Controls */}
          <div className="text-center mt-12">
            <button
              onClick={clearPlanner}
              className="bg-gradient-to-r from-red-500 to-orange-500
                text-white px-8 py-3 rounded-full font-semibold
                hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Clear Planner
            </button>
          </div>

        </div>
      </div>
    </DndContext>
  );
};

export default MealPlanner;
