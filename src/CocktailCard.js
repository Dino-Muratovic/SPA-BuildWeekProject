import React from 'react';



const CocktailCard = (props) => {
 console.log(`props inside the individual card`, props)

 const getProp = props.cocktailArray;
    return (
        <section> 
            
                {/* // select the properties we want to display inside of the card */}
               
               <h2> {getProp.strIngredient2}</h2>
               <img alt="cocktail"src={getProp.strDrinkThumb}></img>
                
            
     
        </section>
    )
}

export default CocktailCard;