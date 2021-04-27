import React from 'react'

export default function Ingredient({ingredientName, ingredient, ingredients, setIngredients}) {

    const deleteItem = () => {
        setIngredients(ingredients.filter((el) => el.ingredientId !== ingredient.ingredientId))
        // console.log(ingredient)
    }

    return (
        <div className="ingredient">
            {console.log(ingredient)}
            <li className="ingredient-item">{ingredientName}</li>
            <button onClick={deleteItem}className="trash-btn">Delete</button>
        </div>
    )
}