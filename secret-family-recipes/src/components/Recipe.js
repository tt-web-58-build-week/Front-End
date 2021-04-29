import React from "react";
import styled from "styled-components";

const DeleteBtn = styled.button`
    z-index=999;
    margin-left:-1.25rem;
    margin-top:-1rem;
    height:3rem;
    width:3rem;
    border-radius:50%;

    &:hover {
        background-color:#810000;
        transition: all 0.5s ease-in;
    }
    transition:all 1s ease-out;
`
const DeleteDiv = styled.div`
    display:flex;
    justify-content:center;
`

const Recipe = (prop)=>{
    const {recipe, deleteRecipe} = prop;

    return (
        <article>
            <DeleteDiv>
                <a>
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
        </article>
    )
}

export default Recipe;