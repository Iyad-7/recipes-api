const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const filePath = path.join(__dirname, "data", "recipes.json");

app.use(cors());
app.use(express.json());

// Read recipes
const getRecipes = () => {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]");
  } catch {
    return [];
  }
};

// Save recipes
const saveRecipes = (recipes) => {
  fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2));
};

// GET all recipes
app.get("/api/recipes", (req, res) => {
  res.json(getRecipes());
});

// POST new recipe
app.post("/api/recipes", (req, res) => {
  const { title, ingredients, instructions, cookTime, difficulty } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ error: "Title, ingredients, and instructions are required." });
  }

  const recipes = getRecipes();
  const newRecipe = {
    id: Date.now(),
    title,
    ingredients,
    instructions,
    cookTime: cookTime || "",
    difficulty: difficulty || "medium",
  };

  recipes.push(newRecipe);
  saveRecipes(recipes);

  res.status(201).json(newRecipe);
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
