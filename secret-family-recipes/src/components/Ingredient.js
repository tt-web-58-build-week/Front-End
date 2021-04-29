import React from 'react'
import styled from 'styled-components'

const IngredientItem = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-wrap: wrap;
`

const IngredientDescription = styled.li`
    width: 185px;
    margin: 3px 15px;
`

const DeleteButton = styled.button`
    max-height: 60%;
`

export default function Ingredient({ingredientName, ingredient, formValues, setFormValues}) {



    const deleteItem = (event) => {
        event.preventDefault()
        // setIngredients(ingredients.filter((el) => el.ingredientId !== ingredient.ingredientId))
        console.log(formValues.ingredients)
        let example = formValues.ingredients.filter((el) => el.ingredientId !== ingredient.ingredientId)
        console.log(example)
        setFormValues({...formValues, ingredients: example})
        // console.log(ingredient)
    }

    return (
        <IngredientItem>
            <IngredientDescription className="ingredient-item">{ingredientName}</IngredientDescription>
            <DeleteButton onClick={deleteItem}className="trash-btn">Delete</DeleteButton>
        </IngredientItem>
    )
}