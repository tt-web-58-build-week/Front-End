import React from "react";
import styled from "styled-components"
import RecipeDisplayModal from './RecipeDisplayModal'

const DeleteBtn = styled.button`
    z-index=999;
    margin-left:-1.25rem;
    margin-top:-1rem;
    height:3rem;
    width:3rem;
    border-radius:50%;

    &:hover {
        background-color:#fb3640;
        transition: all 0.5s ease-in;
    }
    transition:all 1s ease-out;
`
const DeleteDiv = styled.div`
    display:flex;
    justify-content:center;
`

const RecipeArticle = styled.article`
    margin:2rem;
`

const Recipe = (prop)=>{
    const {recipe, deleteRecipe, recipeDisplayModalIsOpen,setRecipeDisplayModalIsOpen,recipeModalIsOpen,setRecipeModalIsOpen, formValues, setFormValues, initialStateValues} = prop;

    return (
        <>
            <RecipeArticle>
                <DeleteDiv>
                    <a onClick={()=> setRecipeDisplayModalIsOpen(true)}>
                        <img src="https://via.placeholder.com/300"></img>
                    </a>
                    <DeleteBtn onClick={()=>deleteRecipe(recipe.recipeid)}>x</DeleteBtn>
                </DeleteDiv>
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