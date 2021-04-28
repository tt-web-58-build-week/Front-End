import React from "react";


const Recipe = (prop)=>{
    const {recipe} = prop;

    return (
        <article>
            <a>
                <img src="https://via.placeholder.com/300"></img>
            </a>
            <h3>{`${recipe.title} from ${recipe.source}`}</h3>
            <p>Ingredients: {recipe.ingredients.map(ingredient=>{
                if(recipe.ingredients.indexOf(ingredient)!== recipe.ingredients.length-1){
                    return `${ingredient.ingredientname}, `;
                }
                return ingredient.ingredientname;
            })}</p>
        </article>
    )
}

export default Recipe;