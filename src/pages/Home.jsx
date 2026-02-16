import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { sampleRecipes, categories } from "../data/recipes";
import { Link } from "react-router-dom";
import StatsSection from "../components/StatsSection";
import { blogs } from "../data/blogs";
import Lottie from "lottie-react";
import cookingAnimation from "../assets/animations/cooking.json"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion } from "framer-motion";


const testimonials = [
  { text: "I love how easy it is to plan my meals for the week!", author: "— Sarah K." },
  { text: "The recipe suggestions are spot on and save me tons of time.", author: "— Michael T." },
  { text: "Finally, a planner that actually helps me cook smarter!", author: "— Priya R." },
];






const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = sampleRecipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredRecipes = sampleRecipes.slice(0, 4);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-white min-h-screen">

{/* 🔥 HERO SECTION */}
<section className="relative py-24 px-6 text-center text-white overflow-hidden">

  {/* Background Gradient (Food Theme) */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-red-500"></div>

  {/* Soft Pattern Overlay */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 animate-fadeUp">

    {/* Left: Text & Buttons */}
    <div className="text-center md:text-left max-w-xl">
      <div className="text-6xl mb-6">🍳</div>

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        Cook Better. <br /> Plan Smarter.
      </h1>

      <p className="text-lg md:text-xl text-white/90 mb-10">
        Discover recipes you'll love, organize your weekly meals,
        and bring joy back to everyday cooking.
      </p>

      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <Link
          to="/planner"
          className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
        >
          Open Meal Planner 📅
        </Link>

       <button
  onClick={() =>
    document.getElementById("recipes")?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-black/20 backdrop-blur-md border border-white/40 px-8 py-4 rounded-full font-semibold hover:bg-black/30 transition"
>
  Explore Recipes 🍲
</button>

      </div>
    </div>

    {/* Right: Lottie Animation */}
    <div className="w-full md:w-1/2 max-w-md mx-auto">
      <Lottie
        animationData={cookingAnimation}
        loop={true}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      />
    </div>

  </div>
</section>




{/* ⭐ FEATURED SECTION */}
<section className="px-6 py-20 max-w-7xl mx-auto animate-fadeUp">
  {/* Section Heading */}
  <h2 className="text-3xl font-bold text-center mb-10">
    Featured Recipes
  </h2>

  {/* Recipe Grid with floating cards */}
  <div className="grid md:grid-cols-4 gap-6">
    {featuredRecipes.map((recipe, index) => (
      <div
        key={recipe.id}
        className="animate-float-card"
        style={{ animationDelay: `${index * 0.2}s` }} // staggered for natural effect
      >
        <RecipeCard recipe={recipe} />
      </div>
    ))}
  </div>
</section>


{/* 🌟 DISCOVER MEALS SECTION */}
<section className="relative py-24 px-6 bg-gradient-to-b from-orange-50 to-orange-100 overflow-hidden">
  
  {/* Soft background glow */}
  <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-300 opacity-20 blur-3xl rounded-full animate-pulse-slow"></div>
  <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-300 opacity-20 blur-3xl rounded-full animate-pulse-slow"></div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <motion.h2 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-extrabold text-gray-900 mb-4"
    >
      Discover Delicious Meals
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto"
    >
      Explore our curated selection of recipes. Whether you're looking for a quick breakfast, a hearty dinner, or a healthy snack, we have something for everyone.
    </motion.p>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <motion.div 
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-transform transform perspective-1000"
      >
        <div className="text-5xl mb-4">🍳</div>
        <h3 className="text-xl font-semibold mb-3">Breakfast & Brunch</h3>
        <p className="text-gray-600">
          Start your day right with quick and healthy breakfast recipes packed with flavor.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-transform transform perspective-1000"
      >
        <div className="text-5xl mb-4">🥗</div>
        <h3 className="text-xl font-semibold mb-3">Healthy Choices</h3>
        <p className="text-gray-600">
          Find meals that are nutritious, balanced, and easy to prepare for a healthier lifestyle.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-transform transform perspective-1000"
      >
        <div className="text-5xl mb-4">🍰</div>
        <h3 className="text-xl font-semibold mb-3">Desserts & Treats</h3>
        <p className="text-gray-600">
          Indulge in our delicious desserts, from chocolatey brownies to creamy ice creams.
        </p>
      </motion.div>

    </div>
  </div>
</section>




    {/* 🌟 WHY CHOOSE US */}
<section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">

  {/* Background Glow */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
      Cook Smarter, Not Harder
    </h2>

    <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
      Discover meals, stay organized, and enjoy cooking without the daily stress.
      Your kitchen companion for a calmer, tastier week.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="group p-10 rounded-2xl backdrop-blur-lg bg-white/70 border border-orange-100
        shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">

        <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-125">
          ⚡
        </div>

        <h3 className="text-2xl font-semibold mb-4">Quick Discovery</h3>

        <p className="text-gray-600 leading-relaxed">
          Instantly browse curated recipes and find something delicious
          in seconds — no endless scrolling.
        </p>

        <div className="mt-6 h-1 w-12 bg-orange-400 rounded-full mx-auto
          transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* Card 2 */}
      <div className="group p-10 rounded-2xl backdrop-blur-lg bg-white/70 border border-orange-100
        shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">

        <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-125">
          🧠
        </div>

        <h3 className="text-2xl font-semibold mb-4">Smart Planning</h3>

        <p className="text-gray-600 leading-relaxed">
          Organize your weekly meals visually with drag-and-drop simplicity.
          Planning becomes effortless.
        </p>

        <div className="mt-6 h-1 w-12 bg-orange-400 rounded-full mx-auto
          transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* Card 3 */}
      <div className="group p-10 rounded-2xl backdrop-blur-lg bg-white/70 border border-orange-100
        shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">

        <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-125">
          ❤️
        </div>

        <h3 className="text-2xl font-semibold mb-4">Save What You Love</h3>

        <p className="text-gray-600 leading-relaxed">
          Build your personal collection of favorite meals
          for quick access anytime you need inspiration.
        </p>

        <div className="mt-6 h-1 w-12 bg-orange-400 rounded-full mx-auto
          transition-all duration-500 group-hover:w-20"></div>
      </div>

    </div>
  </div>
</section>

<StatsSection />

      {/* 🔎 SEARCH + FILTER SECTION */}
      <section id="recipes" className="bg-orange-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Find Your Next Meal
        </h2>

        

        {/* Recipes Grid (Home Page Preview) */}
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {sampleRecipes.slice(0, 6).map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))}
</div>

{/* "View All Recipes" button */}
<div className="text-center mt-8">
  <Link
    to="/recipes"
    className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
  >
    View All Recipes 🍲
  </Link>
</div>

      </section>
   <section className="relative py-24 px-6 bg-gradient-to-b from-orange-50 to-white overflow-hidden">

  {/* Soft background glow for style */}
  <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-200 blur-3xl opacity-20 rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10 text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
      From Our Blog
    </h2>
    <p className="text-gray-600 text-lg md:text-xl">
      Get inspired with our latest articles, tips, and guides for smarter cooking and meal planning.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">

    {blogs.map((blog) => (
      <Link
        key={blog.id}
        to={`/blog/${blog.id}`}
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3"
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70"></div>
        </div>

        {/* Content */}
        <div className="p-7">
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-orange-500 transition-colors duration-300">
            {blog.title}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Read More */}
          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold">
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </span>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 w-0 bg-orange-400 transition-all duration-500 group-hover:w-full"></div>
      </Link>
    ))}

  </div>
</section>



     {/* 🍲 COOKING CTA SECTION */}
<section className="relative py-24 px-6 text-center text-white overflow-hidden">
  
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-red-500"></div>

  {/* Decorative Overlay */}
  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto">
    <div className="text-5xl mb-4">👩‍🍳</div>

    <h2 className="text-4xl font-extrabold mb-4">
      Let’s Turn Ideas Into Delicious Meals
    </h2>

    <p className="text-lg mb-8 text-white/90">
      Discover new flavors, organize your week, and enjoy stress-free cooking.
      Your kitchen journey starts right here.
    </p>

    <Link to="/planner">
  <button className="bg-white text-orange-500 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
    Start Planning Your Week 🍽️
  </button>
</Link>
  </div>
</section>

{/* ⭐ Testimonials Carousel */}

<section className="bg-orange-50 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>

    <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="mySwiper"
    >
      {testimonials.map((t, index) => (
        <SwiperSlide
          key={index}
          className="w-80 animate-float-card"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition">
            <p className="text-gray-600 mb-4">{t.text}</p>
            <h4 className="font-semibold">{t.author}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


<section className="py-20 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center mb-10">
    <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
  </div>

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div>
      <h4 className="font-semibold mb-2">Can I save my favorite recipes?</h4>
      <p className="text-gray-600">Yes! You can easily save any recipe to your personal collection for quick access.</p>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Is the meal planner free?</h4>
      <p className="text-gray-600">Absolutely. Our basic planner and recipe access are completely free to use.</p>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Can I search by dietary preferences?</h4>
      <p className="text-gray-600">Yes, you can filter recipes by categories like vegan, vegetarian, gluten-free, and more.</p>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Do you provide weekly meal plans?</h4>
      <p className="text-gray-600">Yes, you can generate weekly meal plans with just a few clicks in the planner.</p>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white
 text-gray-300 py-6 text-center">
        &copy; {new Date().getFullYear()} Recipe Planner — By Aiman Mishal
      </footer>
    </div>
  );
};

export default Home;
