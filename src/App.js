import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MealPlanner from "./pages/MealPlanner";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RecipeDetails from "./pages/RecipeDetails";
import ScrollToTop from "./components/ScrollToTop";
import RecipesPage from "./pages/RecipesPage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ This now works because Router is in index.js
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* 🔥 HEADER */}
      <header className="p-9 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white shadow-md">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-2xl !text-white md:text-3xl font-extrabold tracking-wide">
            🍳 Recipe Planner
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-lg md:text-base font-medium">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/favorites" className="nav-item">Favorites</Link>
            <Link to="/planner" className="nav-item">Planner</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact Us</Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-6 flex flex-col gap-4 text-lg font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link>
            <Link to="/planner" onClick={() => setMenuOpen(false)}>Planner</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </nav>
        )}
      </header>

      {/* 🔥 Animated Routes */}
      <main>
         <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/planner" element={<MealPlanner />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
