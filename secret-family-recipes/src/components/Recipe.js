import React from "react";
import styled from "styled-components"
import RecipeDisplayModal from './RecipeDisplayModal'


const RecipeArticle = styled.article`
    margin:2rem;
    width: 300px;

    .dishContainer {
        position: relative;
    }

    .dishOverlay {
        position: absolute; top: 0; left: 0;
        background-color: ${pr => pr.theme.darkGray};
        height: 300px;
        width: 300px;
        z-index: 2;
        opacity: 0;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.25s ease-in-out;

        &:hover {
            opacity: 0.85;
            cursor: pointer;
            transition: all 0.15s ease-in-out;
        }
    }

    .dishOverlay div {
        font-size: 2rem;
        letter-spacing: 1px;
    }

    .dishImg {
        background-image: url("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/10/1/FN_Cuban-Baked-Chicken-Sweet-Peppers_H1_s4x3.jpg.rend.hgtvcom.406.406.suffix/1568400649361.jpeg");
        height: 300px;
        width: 300px;
    }
`

const Recipe = (prop)=>{
    const {recipe, deleteRecipe, recipeDisplayModalIsOpen,setRecipeDisplayModalIsOpen,recipeModalIsOpen,setRecipeModalIsOpen, formValues, setFormValues, initialStateValues} = prop;

    return (
        <>
            <RecipeArticle>
                <div className="dishContainer">
                    <div className="dishOverlay" onClick={()=> setRecipeDisplayModalIsOpen(true)}>
                        <div>VIEW RECIPE</div>
                    </div>
                    <div className="dishImg"></div>
                </div>
                <h3>{`${recipe.title} from ${recipe.source}`}</h3>
                <p>Ingredients: {recipe.ingredients.map(ingredient=>{
                    if(recipe.ingredients.indexOf(ingredient)!== recipe.ingredients.length-1){
                        return `${ingredient.ingredientname}, `;
                    }
                    return ingredient.ingredientname;
                })}</p>
                <button onClick={()=>deleteRecipe(recipe.recipeid)}>x</button>
            </RecipeArticle>
            <RecipeDisplayModal recipeDisplayModalIsOpen={ recipeDisplayModalIsOpen } setRecipeDisplayModalIsOpen={ setRecipeDisplayModalIsOpen } recipeModalIsOpen={ recipeModalIsOpen } setRecipeModalIsOpen={ setRecipeModalIsOpen } formValues={formValues} setFormValues={setFormValues} initialStateValues={initialStateValues}/>
        </>
    )
}

export default Recipe;