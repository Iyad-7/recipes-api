# 🍳 Recipe API

A simple Node.js + Express REST API for storing and retrieving recipes.  
This project allows users to add recipes (via POST) and view all stored recipes (via GET).  

---

## 🚀 How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Iyad-7/recipes-api.git
   cd recipe-api


Deployed API URL:https://recipe-api-iyad.onrender.com

API Endpoint Documentation

📌 Endpoints
GET /api/recipes

Fetch all recipes.
Example Response

[
  {
    "id": 1694892077310,
    "title": "Spaghetti Carbonara",
    "ingredients": "Spaghetti, Eggs, Bacon, Parmesan, Black Pepper",
    "instructions": "Boil pasta. Fry bacon. Mix with eggs and cheese. Combine with pasta.",
    "cookTime": "20 minutes",
    "difficulty": "medium"
  }
]

POST /api/recipes

Add a new recipe.

Required: title, ingredients, instructions

Optional: cookTime, difficulty

Example Request

{
  "title": "Pancakes",
  "ingredients": "Flour, Milk, Eggs, Sugar",
  "instructions": "Mix and fry",
  "cookTime": "15 minutes"
}

