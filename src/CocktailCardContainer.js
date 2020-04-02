import React from 'react';
import CocktailCard from './CocktailCard';




const CocktailCardContainer = (props) => {
    // console.log(`props inside CocktailCardContainer`, props.data)


    return (
        <section>        
        {props.data.map((cocktail,index) => {
            // console.log(`this is cocktail -->`, cocktail)
           
            return (
            //  Pass down the entire object to the child element in this case CocktailCard
                <CocktailCard 
                cocktailArray={cocktail}
                key={cocktail.idDrink}
                />    
            )
        })}
        </section>
    )
}

export default CocktailCardContainer;