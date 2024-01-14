# Recipe App 
The `Recipe Finder` is a React-based web application that allows users to find recipes based on provided ingredients. It utilizes the Edamam API to fetch recipe data and display the results.

![Preview](./src/assets/recipeapp.png)
![Preview](./src/assets/recipeapp(2).png)

## Installation

Follow these steps to set up and run the Recipe App project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Recipe-finder.git

2. **Navigate to Project Directory:**
cd Recipe-finder

3. **Install dependencies:**
npm install

4. **Run the development server:**
npm run dev

5. **Open in Browser**
Open your browser and go to http://localhost:3000 to view the Recipe Finder.

## Requirements
Make sure you have Node.js and npm installed on your system.

This set of instructions assumes you are using npm as your package manager. If you use yarn, replace npm with yarn in the commands.

## Configuration
To configure the RecipeForm component, you need to obtain API keys from Edamam. Update the apiKey and appId variables in the component with your own keys.
const apiKey = import.meta.env.VITE_API_KEY;
const appId = import.meta.env.VITE_APPLICATION_ID;

## Technologies Used
- React
- JavaScript (ES6+)
- CSS
- HTML

