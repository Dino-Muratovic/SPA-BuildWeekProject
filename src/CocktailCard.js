import React from 'react';



const CocktailCard = (props) => {
//  console.log(`props inside the individual card`, props)

 const getProp = props.cocktailArray;
 

    return (
        <section> 
            
                {/* // select the properties we want to display inside of the card */}
               <div className="intro">
                    <h2>{getProp.strDrink}</h2>
                    <p>{getProp.strCategory}</p>
               </div>

               <div className="img">
                    <img alt="cocktail-drink"src={getProp.strDrinkThumb}></img>
                </div>  

                <div className="recipe">

                    <div className="ingredients">
                        <h3>Ingredients</h3>                    
                            <p>{getProp.strIngredient1}</p> 
                            <p>{getProp.strIngredient2}</p>
                            <p>{getProp.strIngredient3}</p>
                            <p>{getProp.strIngredient4}</p>
                            <p>{getProp.strIngredient5}</p>
                    </div>

                    <div className="measures">
                        <h3>Measures</h3> 
                            <p>{getProp.strMeasure1}</p>   
                            <p>{getProp.strMeasure2}</p>   
                            <p>{getProp.strMeasure3}</p>   
                            <p>{getProp.strMeasure4}</p>   
                            <p>{getProp.strMeasure5}</p>  
                    </div>                                 
                        
                    <h3>Instructions</h3>
                        <p>Type of glass: {getProp.strGlass}</p>
                        <p>{getProp.strInstructions}</p>
                    </div> 
                </section>
    )
}

export default CocktailCard;