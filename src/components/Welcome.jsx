import React from 'react'
import chefsImage from  "../images/chef.png";
import { Link } from 'react-router-dom';


function Welcome() {
  return (
    <section className="welcome-screen">
      <div className="background-image"></div>
      <div className="description">
         <img src={chefsImage} className="chefs-image"alt="chef icon" /> 
         <div className="description-1">
         <p> Discover 100+k premium recipes</p>
         </div>
      
     
      <button aria-label="Start Cooking" className="start-btn">
      <Link to="/recipe" className="recipe-link">Get Cooking</Link>
         <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i> 
        </button>
        </div>
    </section>
  )
}

export default Welcome