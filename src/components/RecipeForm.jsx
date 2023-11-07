import React,{useState , useEffect}  from 'react';
import Navbar from './Navbar';
import LoadingSpinner from './LoadingSpinner';


function RecipeForm() {
 const [recipe , setRecipes] = useState('');
 const [ingredients , setIngredients]= useState(['chicken', 'tortilla']);
 const [loading , setLoading] = useState(true);

  const apiKey= import.meta.env.VITE_API_KEY;
  const appId= import.meta.env.VITE_APPLICATION_ID;

  const fetchRecipes = () =>{
    fetch(`https://api.edamam.com/search?q=${ingredients}&app_id=${appId}&app_key=${apiKey}`)
  .then(response => response.json())
  .then((data) =>  {setRecipes(data.hits),
    setLoading(false)
  }) 
  .catch((error) => {
    console.error('Error:', error),
    setLoading(false);
  })
 
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
    fetchRecipes();
  }
  useEffect(() => {
    fetchRecipes();
  } , [])


  return (
  <div >
      <Navbar />
    <form onSubmit={handleSubmit} className='recipes'>
      <label>
        Ingredients you have:
        <input
          type="text"
          aria-label="Ingredients input field"
         placeholder={ingredients}
          onChange = {(e) => setIngredients(e.target.value.split(','))}
        />
      </label>
      <button type="submit" className="submit-btn" aria-label="submit the button">Find Recipes</button>
    </form>

{ loading ? <LoadingSpinner /> : recipe.length > 0 && ( 
   <div className="recipes-container">
    {recipe.map((item,index) =>  (
      <div key={index} className="recipe-display">
      <div className="image-container">
      <img src={item.recipe.image} className="recipe-image" alt="recipe's image" />
       <i className="fa-solid fa-heart " style={{ color: "#b62020"}}></i>
       </div>

      <div className="recipe-content">
      <h2>{item.recipe.label}</h2>
      <p>{item.recipe.totalTime} mins
      <i className="fa fa-clock " style={{ color: "#ffffff" }}></i>
      </p>
      <button className="url-btn"aria-label="View recipes" >
       <a href={item.recipe.url} target="_blank" className="RecipeUrl-link" title="View the recipe">View Recipe » 
       </a>
        </button>
     </div>
    </div>
))}
 </div>
  )}
  </div>
  )}

export default RecipeForm;
