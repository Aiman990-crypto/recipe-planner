import weeknightImg from "../assets/blogs/weeknight.jpg";
import healthyImg from "../assets/blogs/healthy.jpg";
import dessertsImg from "../assets/blogs/desserts.jpg";

// src/data/blogs.js
export const blogs = [
  {
    id: 1,
    title: "5 Quick Weeknight Meals",
    excerpt: "Tasty dinners ready in under 30 minutes, perfect for busy evenings!",
    content: `
      <h2>Introduction</h2>
      <p>Busy evenings don’t have to mean boring or takeout meals. Here are 5 super quick, flavorful dinners that will make your weeknights stress-free and delicious!</p>

      <h3>1. Spaghetti Aglio e Olio</h3>
      <p>A simple Italian classic with garlic, olive oil, chili flakes, and parsley. It’s fast, comforting, and oh-so-delicious.</p>
      <ul>
        <li>Ingredients: Spaghetti, garlic, olive oil, chili flakes, parsley</li>
        <li>Time: 15 minutes</li>
        <li>Pro Tip: Sprinkle freshly grated Parmesan on top for a flavor punch!</li>
      </ul>

      <h3>2. Chicken Stir Fry</h3>
      <p>Colorful veggies and juicy chicken cooked in a savory sauce. Serve it over rice or noodles for a meal everyone will love.</p>
      <ul>
        <li>Ingredients: Chicken breast, bell peppers, broccoli, soy sauce, garlic, ginger</li>
        <li>Time: 20 minutes</li>
        <li>Pro Tip: Pre-chopped veggies save serious time!</li>
      </ul>

      <h3>3. Veggie Tacos</h3>
      <p>Quick, fresh, and fun! Fill your tortillas with beans, corn, avocado, and a zesty salsa.</p>
      <ul>
        <li>Ingredients: Corn tortillas, black beans, corn, avocado, salsa</li>
        <li>Time: 20 minutes</li>
        <li>Pro Tip: Add a squeeze of lime for a fresh kick.</li>
      </ul>

      <h3>4. Shrimp Fried Rice</h3>
      <p>Leftover rice? Perfect! Toss it with shrimp, veggies, and scrambled eggs for a flavorful meal in minutes.</p>
      <ul>
        <li>Ingredients: Shrimp, rice, peas, carrots, eggs, soy sauce</li>
        <li>Time: 25 minutes</li>
        <li>Pro Tip: Day-old rice works best for fluffy fried rice.</li>
      </ul>

      <h3>5. Caprese Salad with Pesto</h3>
      <p>Refreshing, light, and elegant. Juicy tomatoes, fresh mozzarella, basil, and a drizzle of pesto make a perfect side or light dinner.</p>
      <ul>
        <li>Ingredients: Tomatoes, mozzarella, basil, pesto</li>
        <li>Time: 10 minutes</li>
        <li>Pro Tip: Use ripe, juicy tomatoes for maximum flavor.</li>
      </ul>

      <h2>Wrap-Up</h2>
      <p>There you go! Five quick and tasty meals to make your weeknights easier and more enjoyable. Try them, mix things up, and have fun in the kitchen!</p>
    `,
    image: weeknightImg

  },
  {
    id: 2,
    title: "Healthy Eating Tips",
    excerpt: "Simple, practical tips to eat well without the stress!",
    content: `
      <h2>Introduction</h2>
      <p>Eating healthy doesn’t have to be complicated or boring. With a few simple tricks, you can enjoy tasty, nutritious meals every day.</p>

      <h3>1. Load Up on Veggies</h3>
      <p>Vegetables are your best friends! Add them to every meal—you’ll feel full, energized, and ready to conquer your day.</p>

      <h3>2. Stay Hydrated</h3>
      <p>Water is life! Keep a bottle handy and sip throughout the day. Your body—and brain—will thank you.</p>

      <h3>3. Plan Your Meals</h3>
      <p>Take a few minutes to plan your week. Having a roadmap makes healthy eating simple and stress-free.</p>

      <h3>4. Keep Balanced Plates</h3>
      <p>Include protein, carbs, and healthy fats in each meal. It keeps you satisfied and energized longer.</p>

      <h3>5. Snack Smart</h3>
      <p>Swap chips for nuts, fruit, or yogurt. Small swaps like this add up big time!</p>

      <h2>Extra Fun Tips</h2>
      <ul>
        <li>Experiment with herbs and spices—they’re flavor boosters without extra salt.</li>
        <li>Cook at home whenever you can—you control the ingredients and flavors.</li>
        <li>Try colorful plates—it’s as fun for your eyes as it is for your taste buds!</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Healthy eating is about making small, manageable changes. Start simple, have fun, and watch how easy and tasty it can be!</p>
    `,
     image: healthyImg
  },
  {
    id: 3,
    title: "Desserts Made Easy",
    excerpt: "Sweet treats anyone can make at home, no fuss required!",
    content: `
      <h2>Introduction</h2>
      <p>Who says desserts have to be complicated? Here are 5 easy, delicious sweets that you can make at home with minimal effort!</p>

      <h3>1. Chocolate Mug Cake</h3>
      <p>A single-serving dessert ready in just 5 minutes! Perfect for a quick chocolate fix.</p>
      <ul>
        <li>Ingredients: Flour, cocoa powder, sugar, milk, butter</li>
        <li>Tip: Toss in chocolate chips for extra indulgence.</li>
      </ul>

      <h3>2. Banana Bread</h3>
      <p>Moist, sweet, and packed with flavor. Great for breakfast or an afternoon snack.</p>
      <ul>
        <li>Ingredients: Ripe bananas, flour, sugar, eggs, butter</li>
        <li>Tip: Sprinkle nuts or chocolate chips on top for fun textures.</li>
      </ul>

      <h3>3. Fruit Tart</h3>
      <p>Light, fresh, and elegant. A buttery crust with creamy filling and vibrant fruits on top.</p>
      <ul>
        <li>Ingredients: Tart crust, cream cheese, sugar, seasonal fruits</li>
        <li>Tip: Brush fruits with honey for a beautiful shine.</li>
      </ul>

      <h3>4. No-Bake Cheesecake</h3>
      <p>Perfect for hot days or when you don’t want to use the oven. Creamy, dreamy, and quick!</p>
      <ul>
        <li>Ingredients: Cream cheese, whipped cream, sugar, graham crackers</li>
        <li>Tip: Chill for at least 2 hours for best results.</li>
      </ul>

      <h3>5. Homemade Ice Cream</h3>
      <p>Rich and creamy, with endless flavor possibilities. Simple ingredients, amazing results!</p>
      <ul>
        <li>Ingredients: Heavy cream, sugar, vanilla extract</li>
        <li>Tip: Mix in chocolate chips, nuts, or fruit for extra fun.</li>
      </ul>

      <h2>Wrap-Up</h2>
      <p>These desserts are simple, fun, and totally satisfying. Perfect for treating yourself or impressing your friends and family!</p>
    `,
    image: dessertsImg
  },
];
