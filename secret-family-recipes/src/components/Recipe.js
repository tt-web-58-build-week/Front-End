import React from "react";
import styled from "styled-components"
import RecipeDisplayModal from './RecipeDisplayModal'


const RecipeArticle = styled.article`
    margin:2rem;
`

const Recipe = (prop)=>{
    const {recipe, deleteRecipe, recipeDisplayModalIsOpen,setRecipeDisplayModalIsOpen,recipeModalIsOpen,setRecipeModalIsOpen, formValues, setFormValues, initialStateValues} = prop;

    return (
        <>
            <RecipeArticle>
                <div>
                    <a onClick={()=> setRecipeDisplayModalIsOpen(true)}>
                        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/10/1/FN_Cuban-Baked-Chicken-Sweet-Peppers_H1_s4x3.jpg.rend.hgtvcom.406.406.suffix/1568400649361.jpeg"></img>
                    </a>
                    <button onClick={()=>deleteRecipe(recipe.recipeid)}>x</button>
                </div>
                <h3>{`${recipe.title} from ${recipe.source}`}</h3>
                <p>Ingredients: {recipe.ingredients.map(ingredient=>{
                    if(recipe.ingredients.indexOf(ingredient)!== recipe.ingredients.length-1){
                        return `${ingredient.ingredientname}, `;
                    }
                    return ingredient.ingredientname;
                })}</p>
            </RecipeArticle>
            <RecipeDisplayModal recipeDisplayModalIsOpen={ recipeDisplayModalIsOpen } setRecipeDisplayModalIsOpen={ setRecipeDisplayModalIsOpen } recipeModalIsOpen={ recipeModalIsOpen } setRecipeModalIsOpen={ setRecipeModalIsOpen } formValues={formValues} setFormValues={setFormValues} initialStateValues={initialStateValues}/>
        </>
    )
}

export default Recipe;