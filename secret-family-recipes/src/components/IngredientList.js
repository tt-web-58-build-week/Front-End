import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ingredients, setIngredients}) {
    console.log(ingredients)
    return (
        <div className="ingredientList">
            <ul className="ingredient-list">
                {ingredients.map((element, index) => (
                    <Ingredient ingredientName={element.ingredientName} key={index} ingredient={element} ingredients={ingredients} setIngredients={setIngredients}/>    
                ))}
            </ul>
        </div>
    )
}