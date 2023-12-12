
/*  //Basic Recipe Structure for general idea
let recipes = [];

let recipe = {
    recipeName: "",
    recipeImage: "",
    recipeDifficulty: "",
    servings: "",
    ingredients: [],
    instructions: [],
    prepTime: "",
    cookTime: "",
}
*/

class Recipe {
    constructor(recipeName, recipeImage, recipeDifficulty, servings, ingredients, instructions, prepTime, cookTime){
        this.recipeName = recipeName;
        this.recipeImage = recipeImage;
        this.recipeDifficulty = recipeDifficulty;
        this.servings = servings;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
    }
}

let recipes = [];

//prebuilt chili recipe

let chiliIngredients = [];

let ingredient = {
    ingredientName: "tbsp. cooking oil",
    ingredientAmnt: 2
}
chiliIngredients.push(ingredient);

let chiliInstructions = [
    "Heat cooking oil in 2 quart skillet.",
    "Saute onions and peppers for 5 minutes.",
    "Add spices and stir for 30 seconds.",
    "Add meat and cook until browned. Approximately 15 minutes.",
    "Pour contents of skillet into 3 quart crock pot.",
    "Rinse beans and place in crockpot.",
    "Open and pour Tomato puree and sauce into crock pot.",
    "Cover crockpot and cook on low for 6 hours.",
    "Serve into individual bowls and top with sour cream and cheese."
];




let chiliPrep = {
    time: 25,
    unit: "minutes"
}

let chiliCookTime = {
    time: 6,
    unit: "hours"
}



let chiliRecipe = new Recipe (
    "Crockpot Chili",
    "images/chili.jpg",
    "Medium",
    6,
    chiliIngredients,
    chiliInstructions,
    chiliPrep,
    chiliCookTime
);

recipes.push(chiliRecipe);
localStorage.setItem("recipes", JSON.stringify(recipes));
console.log(localStorage);


