import React, { useEffect, useRef, useState } from "react";

const useReveal = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const About = () => {
  const [headerRef, headerVisible] = useReveal();
  const [cardsRef, cardsVisible] = useReveal();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-100 py-24 px-6">

      {/* 🌈 Soft Floating Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-30 animate-floatSlow"></div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* 🔥 Heading */}
        <div
          ref={headerRef}
          className={`transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            About Recipe Planner
          </h1>

          <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
            Recipe Planner was built to make cooking simple, organized, and enjoyable.
            No more daily stress of deciding what to eat — just discover, plan, and cook.
          </p>
        </div>

        {/* ✨ Feature Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            {
              title: "Discover Recipes",
              text: "Explore curated meals across categories like healthy, quick bites, and comforting dinners.",
              delay: "delay-[0ms]",
            },
            {
              title: "Plan Your Week",
              text: "Drag and drop meals into your weekly planner and stay organized.",
              delay: "delay-[200ms]",
            },
            {
              title: "Save Favorites",
              text: "Keep track of meals you love and cook them anytime without searching again.",
              delay: "delay-[400ms]",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-orange-100
              transform transition-all duration-700 ${card.delay}
              ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }
              hover:-translate-y-4 hover:shadow-2xl hover:scale-[1.02]
              group`}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-orange-500 transition">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
