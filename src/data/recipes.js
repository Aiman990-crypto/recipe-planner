import avocadoToast from "../assets/recipes/avocado-toast.jpg";
import pancakes from "../assets/recipes/pancakes.jpg";
import caesarWrap from "../assets/recipes/caesar-wrap.jpg";
import pizza from "../assets/recipes/pizza.jpg";
import salmon from "../assets/recipes/salmon.jpg";
import brownies from "../assets/recipes/brownies.jpg";
import greekSalad from "../assets/recipes/greek-salad.jpg";
import burger from "../assets/recipes/burger.jpg";
import spaghetti from "../assets/recipes/spaghetti.jpg";
import smoothie from "../assets/recipes/smoothie.jpg";
import tacos from "../assets/recipes/tacos.jpg";
import friedRice from "../assets/recipes/fried-rice.jpg";
import clubSandwich from "../assets/recipes/club-sandwich.jpg";
import sundae from "../assets/recipes/sundae.jpg";
import stirFry from "../assets/recipes/stir-fry.jpg";
import omelette from "../assets/recipes/omelette.jpg";
import lasagna from "../assets/recipes/lasagna.jpg";
import donuts from "../assets/recipes/donuts.jpg";
import ChocolateMousse from "../assets/recipes/Chocolate Mousse.jpg";
import VeggieSpringRolls from "../assets/recipes/Veggie Spring Rolls.jpg";
import BeefStirFry from "../assets/recipes/Beef Stir Fry.jpg";
import ChocolateBananaBread from "../assets/recipes/Chocolate Banana Bread.jpg";
import PumpkinSoup from "../assets/recipes/Pumpkin Soup.jpg";
import VeggieOmelette from "../assets/recipes/Veggie Omelette.jpg";
import MangoLassi from "../assets/recipes/Mango Lassi.jpg";
import BuffaloWings from "../assets/recipes/Buffalo Wings.jpg";
import QuinoaSalad from "../assets/recipes/Quinoa Salad.jpg";
import Shakshuka from "../assets/recipes/Shakshuka.jpg";
import StuffedZucchiniBoats from "../assets/recipes/Stuffed Zucchini Boats.jpg";
import ChocolateChipCookies from "../assets/recipes/Chocolate Chip Cookies.jpg";
import ChickenTikkaSkewers from "../assets/recipes/Chicken Tikka Skewers.jpg";
import AvocadoSmoothie from "../assets/recipes/AvocadoSmoothie.jpg";
import GarlicButterShrimp from "../assets/recipes/Garlic Butter Shrimp.jpg";
import StuffedBellPeppers from "../assets/recipes/Stuffed Bell Peppers.jpg";
import BerryParfait from "../assets/recipes/Berry Parfait.jpg";
import VeggieQuesadilla from "../assets/recipes/Veggie Quesadilla.jpg";



export const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Healthy",
  "Quick Bites",
];


export const sampleRecipes = [
  {
    id: 1,
    title: "Avocado Toast",
    category: "Breakfast",
    image: avocadoToast,
    summary: "Creamy avocado on toasted sourdough topped with chili flakes.",
    prepTime: "10 mins",
servings: 2,
ingredients: [
  "2 bread slices",
  "1 ripe avocado",
  "Salt",
  "Chili flakes",
  "1 tsp olive oil"
],
instructions: [
  "Toast the bread.",
  "Mash avocado with salt.",
  "Spread on toast.",
  "Add chili flakes and olive oil.",
  "Serve fresh."
]

  },
  {
    id: 2,
    title: "Pancake Stack",
    category: "Breakfast",
    image: pancakes,
    summary: "Fluffy pancakes served with maple syrup and berries.",
    prepTime: "20 mins",
servings: 4,
ingredients: [
  "1 cup flour",
  "1 egg",
  "1 cup milk",
  "1 tbsp sugar",
  "1 tsp baking powder",
  "Butter"
],
instructions: [
  "Mix all ingredients into smooth batter.",
  "Heat butter in pan.",
  "Pour batter and cook both sides.",
  "Stack and serve with syrup."
]

  },
  {
    id: 3,
    title: "Chicken Caesar Wrap",
    category: "Lunch",
    image: caesarWrap,
    summary: "Grilled chicken wrapped with lettuce, parmesan and Caesar dressing.",
    prepTime: "15 mins",
servings: 2,
ingredients: [
  "2 tortillas",
  "Grilled chicken",
  "Lettuce",
  "Caesar dressing",
  "Parmesan"
],
instructions: [
  "Place chicken and lettuce on tortilla.",
  "Add dressing and parmesan.",
  "Wrap tightly and slice."
]

  },
  {
    id: 4,
    title: "Margherita Pizza",
    category: "Dinner",
    image: pizza,
    summary: "Classic pizza with tomato sauce, mozzarella and basil.",
    prepTime: "30 mins",
servings: 3,
ingredients: [
  "Pizza dough",
  "Tomato sauce",
  "Mozzarella",
  "Basil",
  "Olive oil"
],
instructions: [
  "Spread sauce on dough.",
  "Add mozzarella.",
  "Bake at 220°C for 12–15 mins.",
  "Top with basil and olive oil."
]

  },
  {
    id: 5,
    title: "Grilled Salmon",
    category: "Healthy",
    image: salmon,
    summary: "Omega-rich salmon served with roasted vegetables.",
    prepTime: "20 mins",
servings: 2,
ingredients: [
  "2 salmon fillets",
  "Salt & pepper",
  "Lemon juice",
  "Olive oil"
],
instructions: [
  "Season salmon.",
  "Grill 4–5 mins each side.",
  "Drizzle lemon before serving."
]

  },
  {
    id: 6,
    title: "Chocolate Brownies",
    category: "Dessert",
    image: brownies,
    summary: "Fudgy chocolate brownies with a gooey center.",
    prepTime: "25 mins",
servings: 6,
ingredients: [
  "1/2 cup butter",
  "1 cup sugar",
  "2 eggs",
  "Cocoa powder",
  "Flour"
],
instructions: [
  "Mix ingredients.",
  "Pour into pan.",
  "Bake at 180°C for 20 mins."
]

  },
  {
    id: 7,
    title: "Greek Salad",
    category: "Healthy",
    image: greekSalad,
    summary: "Fresh cucumbers, olives, feta cheese and olive oil.",
    prepTime: "10 mins",
servings: 2,
ingredients: [
  "Cucumber",
  "Tomatoes",
  "Olives",
  "Feta cheese",
  "Olive oil"
],
instructions: [
  "Chop vegetables.",
  "Add feta and olives.",
  "Drizzle olive oil."
]

  },
  {
    id: 8,
    title: "Beef Burger",
    category: "Lunch",
    image: burger,
    summary: "Juicy beef patty with lettuce, tomato and cheese.",
    prepTime: "25 mins",
servings: 2,
ingredients: [
  "Burger buns",
  "Beef patties",
  "Lettuce",
  "Tomato",
  "Cheese"
],
instructions: [
  "Grill patties.",
  "Assemble burger with toppings.",
  "Serve hot."
]

  },
  {
    id: 9,
    title: "Spaghetti Bolognese",
    category: "Dinner",
    image: spaghetti,
    summary: "Classic Italian pasta with rich meat sauce.",
    prepTime: "35 mins",
servings: 4,
ingredients: [
  "Spaghetti",
  "Minced beef",
  "Tomato sauce",
  "Onion",
  "Garlic"
],
instructions: [
  "Boil spaghetti.",
  "Cook beef with onion.",
  "Add sauce and simmer.",
  "Mix and serve."
]

  },
  {
    id: 10,
    title: "Fruit Smoothie ",
    category: "Breakfast",
    image: smoothie,
    summary: "Blended fruits topped with granola and seeds.",
    prepTime: "5 mins",
servings: 1,
ingredients: [
  "Frozen fruits",
  "Milk",
  "Granola",
  "Seeds"
],
instructions: [
  "Blend fruits and milk.",
  "Pour into bowl.",
  "Top with granola."
]

  },
  {
    id: 11,
    title: "Tacos",
    category: "Quick Bites",
    image: tacos,
    summary: "Street-style tacos filled with chicken and salsa.",
    prepTime: "15 mins",
servings: 3,
ingredients: [
  "Taco shells",
  "Chicken",
  "Salsa",
  "Lettuce"
],
instructions: [
  "Cook chicken.",
  "Fill shells with ingredients.",
  "Add salsa and serve."
]

  },
  {
    id: 12,
    title: "Fried Rice",
    category: "Dinner",
    image: friedRice,
    summary: "Quick stir-fried rice with veggies and egg.",
    prepTime: "15 mins",
servings: 3,
ingredients: [
  "Cooked rice",
  "Egg",
  "Vegetables",
  "Soy sauce"
],
instructions: [
  "Scramble egg.",
  "Add veggies and rice.",
  "Stir fry with soy sauce."
]

  },
  {
    id: 13,
    title: "Club Sandwich",
    category: "Quick Bites",
    image: clubSandwich,
    summary: "Triple-layer sandwich packed with flavor.",
    prepTime: "10 mins",
servings: 2,
ingredients: [
  "Toast bread",
  "Chicken",
  "Lettuce",
  "Mayo"
],
instructions: [
  "Layer ingredients between bread.",
  "Cut into triangles."
]

  },
  {
    id: 14,
    title: "Ice Cream Sundae",
    category: "Dessert",
    image: sundae,
    summary: "Vanilla ice cream topped with chocolate syrup.",
    prepTime: "5 mins",
servings: 2,
ingredients: [
  "Vanilla ice cream",
  "Chocolate syrup",
  "Nuts",
  "Cherry"
],
instructions: [
  "Scoop ice cream.",
  "Add toppings.",
  "Serve immediately."
]

  },
  {
    id: 15,
    title: "Chicken Stir Fry",
    category: "Healthy",
    image: stirFry,
    summary: "Lean chicken tossed with fresh vegetables.",
    prepTime: "20 mins",
servings: 3,
ingredients: [
  "Chicken strips",
  "Mixed vegetables",
  "Soy sauce",
  "Garlic"
],
instructions: [
  "Cook chicken.",
  "Add vegetables.",
  "Stir fry with sauce."
]

  },
  {
    id: 16,
    title: "Omelette",
    category: "Breakfast",
    image: omelette,
    summary: "Protein-packed omelette with herbs and cheese.",
    prepTime: "10 mins",
servings: 1,
ingredients: [
  "2 eggs",
  "Salt",
  "Cheese",
  "Herbs"
],
instructions: [
  "Beat eggs.",
  "Cook in pan.",
  "Add cheese and fold."
]

  },
  {
    id: 17,
    title: "Lasagna",
    category: "Dinner",
    image: lasagna,
    summary: "Layered pasta baked with cheese and meat sauce.",
    prepTime: "45 mins",
servings: 5,
ingredients: [
  "Lasagna sheets",
  "Meat sauce",
  "Cheese",
  "White sauce"
],
instructions: [
  "Layer sheets, sauces, and cheese.",
  "Repeat layers.",
  "Bake 30 mins."
]

  },
  {
    id: 18,
    title: "Donuts",
    category: "Dessert",
    image: donuts,
    summary: "Soft glazed donuts perfect with coffee.",
    prepTime: "30 mins",
     servings: 6,
ingredients: [
  "Flour",
  "Sugar",
  "Milk",
  "Yeast",
  "Oil for frying"
],
instructions: [
  "Prepare dough.",
  "Shape donuts.",
  "Fry until golden.",
  "Add glaze."
]
  },
  {
  id: 19,
  title: "Caprese Salad",
  category: "Healthy",
  image: greekSalad, // you can replace with a new image if you have one
  summary: "Fresh tomatoes, mozzarella, and basil with balsamic glaze.",
  prepTime: "10 mins",
  servings: 2,
  ingredients: [
    "2 tomatoes",
    "100g mozzarella",
    "Fresh basil leaves",
    "Olive oil",
    "Balsamic glaze"
  ],
  instructions: [
    "Slice tomatoes and mozzarella.",
    "Layer with basil leaves.",
    "Drizzle olive oil and balsamic glaze.",
    "Serve fresh."
  ]
},
{
  id: 20,
  title: "Veggie Quesadilla",
  category: "Quick Bites",
  image: VeggieQuesadilla, // replace with a proper image
  summary: "Grilled tortillas stuffed with cheese and sautéed veggies.",
  prepTime: "15 mins",
  servings: 2,
  ingredients: [
    "2 tortillas",
    "1 cup shredded cheese",
    "1/2 cup bell peppers, sliced",
    "1/2 cup onions, sliced",
    "1 tbsp olive oil"
  ],
  instructions: [
    "Heat oil in pan and sauté vegetables.",
    "Place veggies and cheese on tortilla and fold.",
    "Grill both sides until golden.",
    "Serve with salsa."
  ]
},
{
  id: 21,
  title: "Berry Parfait",
  category: "Dessert",
  image: BerryParfait, // replace with a new image
  summary: "Layers of yogurt, granola, and fresh berries.",
  prepTime: "5 mins",
  servings: 1,
  ingredients: [
    "1 cup yogurt",
    "1/2 cup granola",
    "1/2 cup mixed berries",
    "Honey (optional)"
  ],
  instructions: [
    "Layer yogurt, granola, and berries in a glass.",
    "Repeat layers if desired.",
    "Drizzle honey on top.",
    "Serve immediately."
  ]
},
{
  id: 22,
  title: "Stuffed Bell Peppers",
  category: "Dinner",
  image: StuffedBellPeppers, // replace with a new image
  summary: "Bell peppers stuffed with rice, vegetables, and spices.",
  prepTime: "35 mins",
  servings: 4,
  ingredients: [
    "4 bell peppers",
    "1 cup cooked rice",
    "1/2 cup diced tomatoes",
    "1/2 cup corn",
    "Spices, salt, pepper"
  ],
  instructions: [
    "Cut tops off bell peppers and remove seeds.",
    "Mix rice, vegetables, and spices.",
    "Stuff mixture into peppers.",
    "Bake at 180°C for 20 mins.",
    "Serve hot."
  ]
},
{
  id: 23,
  title: "Garlic Butter Shrimp",
  category: "Dinner",
  image: GarlicButterShrimp, // replace with shrimp image
  summary: "Juicy shrimp sautéed in garlic butter and herbs.",
  prepTime: "15 mins",
  servings: 2,
  ingredients: [
    "200g shrimp, peeled",
    "2 tbsp butter",
    "2 garlic cloves, minced",
    "Salt & pepper",
    "Lemon juice"
  ],
  instructions: [
    "Melt butter in a pan and sauté garlic.",
    "Add shrimp and cook until pink.",
    "Season with salt, pepper, and lemon juice.",
    "Serve warm."
  ]
},
{
  id: 24,
  title: "Avocado Smoothie",
  category: "Breakfast",
  image: AvocadoSmoothie, // replace if needed
  summary: "Creamy avocado smoothie with banana and milk.",
  prepTime: "5 mins",
  servings: 1,
  ingredients: [
    "1 ripe avocado",
    "1 banana",
    "1 cup milk",
    "Honey to taste",
    "Ice cubes"
  ],
  instructions: [
    "Blend all ingredients until smooth.",
    "Serve chilled."
  ]
},
{
  id: 25,
  title: "Chicken Tikka Skewers",
  category: "Quick Bites",
  image: ChickenTikkaSkewers, // replace if needed
  summary: "Grilled chicken marinated in yogurt and spices.",
  prepTime: "30 mins",
  servings: 3,
  ingredients: [
    "300g chicken chunks",
    "2 tbsp yogurt",
    "1 tsp garam masala",
    "1 tsp chili powder",
    "Salt"
  ],
  instructions: [
    "Marinate chicken in yogurt and spices for 15 mins.",
    "Thread onto skewers and grill until cooked.",
    "Serve with mint chutney."
  ]
},
{
  id: 26,
  title: "Veggie Omelette",
  category: "Breakfast",
  image: VeggieOmelette, // replace if needed
  summary: "Fluffy omelette filled with fresh vegetables.",
  prepTime: "10 mins",
  servings: 1,
  ingredients: [
    "2 eggs",
    "1/4 cup bell peppers, diced",
    "1/4 cup tomatoes, diced",
    "Salt & pepper",
    "Olive oil"
  ],
  instructions: [
    "Whisk eggs and season with salt & pepper.",
    "Sauté vegetables in a pan.",
    "Pour eggs over vegetables and cook until set.",
    "Fold and serve hot."
  ]
},
{
  id: 27,
  title: "Chocolate Chip Cookies",
  category: "Dessert",
  image: ChocolateChipCookies, // replace if needed
  summary: "Classic cookies with melty chocolate chips.",
  prepTime: "25 mins",
  servings: 12,
  ingredients: [
    "1 cup flour",
    "1/2 cup butter",
    "1/2 cup sugar",
    "1 egg",
    "1/2 cup chocolate chips"
  ],
  instructions: [
    "Mix all ingredients into dough.",
    "Scoop onto baking tray.",
    "Bake at 180°C for 12–15 mins.",
    "Cool and serve."
  ]
},
{
  id: 28,
  title: "Shakshuka",
  category: "Breakfast",
  image: Shakshuka, // replace with proper image
  summary: "Eggs poached in a spicy tomato sauce with herbs.",
  prepTime: "20 mins",
  servings: 2,
  ingredients: [
    "4 eggs",
    "1 can tomatoes",
    "1 onion, diced",
    "1 bell pepper, diced",
    "Spices: paprika, cumin, chili"
  ],
  instructions: [
    "Sauté onion and bell pepper.",
    "Add tomatoes and spices, simmer 10 mins.",
    "Crack eggs into sauce and cover, cook until set.",
    "Serve with bread."
  ]
},
{
  id: 29,
  title: "Quinoa Salad",
  category: "Healthy",
  image: QuinoaSalad, // replace with quinoa salad image
  summary: "Refreshing salad with quinoa, cucumber, tomatoes, and herbs.",
  prepTime: "15 mins",
  servings: 2,
  ingredients: [
    "1 cup cooked quinoa",
    "1/2 cucumber, diced",
    "1/2 cup cherry tomatoes, halved",
    "Olive oil & lemon juice",
    "Salt & pepper"
  ],
  instructions: [
    "Mix all ingredients in a bowl.",
    "Season with olive oil, lemon juice, salt, and pepper.",
    "Serve chilled."
  ]
},
{
  id: 30,
  title: "Buffalo Wings",
  category: "Quick Bites",
  image: BuffaloWings, // replace with wings image
  summary: "Spicy buffalo chicken wings with a tangy sauce.",
  prepTime: "30 mins",
  servings: 4,
  ingredients: [
    "12 chicken wings",
    "2 tbsp hot sauce",
    "1 tbsp butter",
    "Salt & pepper"
  ],
  instructions: [
    "Season wings and bake until crispy.",
    "Melt butter and mix with hot sauce.",
    "Toss wings in sauce and serve hot."
  ]
},
{
  id: 31,
  title: "Mango Lassi",
  category: "Breakfast",
  image: MangoLassi, // replace with lassi image
  summary: "Sweet and creamy mango yogurt smoothie.",
  prepTime: "5 mins",
  servings: 1,
  ingredients: [
    "1 cup mango pulp",
    "1/2 cup yogurt",
    "1/2 cup milk",
    "Sugar or honey to taste",
    "Ice cubes"
  ],
  instructions: [
    "Blend all ingredients until smooth.",
    "Serve chilled."
  ]
},
{
  id: 32,
  title: "Stuffed Zucchini Boats",
  category: "Dinner",
  image: StuffedZucchiniBoats, // replace with zucchini image
  summary: "Zucchini filled with veggies, quinoa, and cheese.",
  prepTime: "30 mins",
  servings: 2,
  ingredients: [
    "2 zucchinis, halved",
    "1/2 cup cooked quinoa",
    "1/2 cup diced tomatoes",
    "1/4 cup shredded cheese",
    "Herbs and spices"
  ],
  instructions: [
    "Scoop out zucchini centers.",
    "Mix veggies and quinoa, stuff into zucchini.",
    "Top with cheese and bake 15-20 mins.",
    "Serve hot."
  ]
},
{
  id: 33,
  title: "Chocolate Mousse",
  category: "Dessert",
  image: ChocolateMousse, // replace with mousse image
  summary: "Light and airy chocolate mousse with whipped cream.",
  prepTime: "15 mins",
  servings: 2,
  ingredients: [
    "100g dark chocolate",
    "2 eggs, separated",
    "2 tbsp sugar",
    "Whipped cream for topping"
  ],
  instructions: [
    "Melt chocolate and cool slightly.",
    "Whip egg whites with sugar until stiff peaks form.",
    "Fold egg yolks into chocolate, then egg whites gently.",
    "Chill and top with whipped cream."
  ]
},
{
  id: 34,
  title: "Veggie Spring Rolls",
  category: "Quick Bites",
  image: VeggieSpringRolls,
  summary: "Crispy rolls filled with fresh veggies and served with dip.",
  prepTime: "20 mins",
  servings: 4,
  ingredients: [
    "Rice paper wrappers",
    "Shredded carrots",
    "Cucumber strips",
    "Lettuce",
    "Soy sauce or peanut sauce"
  ],
  instructions: [
    "Soften rice paper in water.",
    "Place veggies on wrapper and roll tightly.",
    "Serve with dipping sauce."
  ]
},
{
  id: 35,
  title: "Beef Stir Fry",
  category: "Dinner",
  image: BeefStirFry, 
  summary: "Tender beef with vegetables in savory stir fry sauce.",
  prepTime: "25 mins",
  servings: 2,
  ingredients: [
    "200g beef strips",
    "1 cup mixed vegetables",
    "2 tbsp soy sauce",
    "1 tbsp olive oil",
    "1 tsp garlic, minced"
  ],
  instructions: [
    "Heat oil and sauté garlic.",
    "Add beef and cook until browned.",
    "Add vegetables and soy sauce, stir fry 5-7 mins.",
    "Serve hot."
  ]
},
{
  id: 36,
  title: "Pumpkin Soup",
  category: "Healthy",
  image: PumpkinSoup, 
  summary: "Warm, creamy pumpkin soup with spices and herbs.",
  prepTime: "30 mins",
  servings: 3,
  ingredients: [
    "2 cups pumpkin, cubed",
    "1 onion, chopped",
    "2 cups vegetable stock",
    "1/2 cup cream",
    "Salt, pepper, nutmeg"
  ],
  instructions: [
    "Sauté onion until soft.",
    "Add pumpkin and stock, simmer until tender.",
    "Blend until smooth, stir in cream.",
    "Season and serve warm."
  ]
},
{
  id: 37,
  title: "Chocolate Banana Bread",
  category: "Dessert",
  image: ChocolateBananaBread, 
  summary: "Moist banana bread with chocolate chunks.",
  prepTime: "50 mins",
  servings: 6,
  ingredients: [
    "2 ripe bananas",
    "1/2 cup sugar",
    "1/2 cup butter",
    "1 cup flour",
    "1/2 cup chocolate chips",
    "1 tsp baking soda"
  ],
  instructions: [
    "Mash bananas and mix with sugar and butter.",
    "Add flour, baking soda, and chocolate chips.",
    "Bake at 180°C for 35-40 mins.",
    "Cool and serve."
  ]
}


];
