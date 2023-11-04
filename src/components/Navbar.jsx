import React from 'react';
import {Link } from 'react-router-dom';
import recipelogo from '../images/recipelogo.png'

function Navbar() {
  return (

    <nav className="nav-container">
       <img src={recipelogo}  className="recipe-logo" alt="Recipe Logo"/>
        <ul className="nav-links">
            <li className="links"><Link to="/recipe" className="recipe-link">Recipes</Link></li>
            <li className="links"><Link to="/welcome" className="Home-link">Home</Link></li>
          
        </ul>
        
    </nav>
  )
}

export default Navbar
