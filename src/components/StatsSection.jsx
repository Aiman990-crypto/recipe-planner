import React, { useEffect, useState } from "react";

const Stat = ({ number, label, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation time
    const increment = number / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transition-transform duration-500 hover:-translate-y-2 text-center">
      <h3 className={`text-4xl font-extrabold mb-2 ${color || "text-orange-500"}`}>
        {count}+
      </h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-200 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-green-200 blur-3xl opacity-15 rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Trusted by Food Lovers Everywhere
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          See how our meal planner helps thousands organize their week and save time in the kitchen.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
        <Stat number={50} label="Curated Recipes" color="text-red-400" />
        <Stat number={7} label="Days Planned Ahead" color="text-green-400" />
        <Stat number={100} label="Drag & Drop Meals" color="text-orange-400" />
        <Stat number={24} label="Hours Saved Monthly" color="text-yellow-400" />
      </div>
    </section>
  );
};

export default StatsSection;
