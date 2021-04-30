import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({formValues, setFormValues}) {
    return (
        <div className="ingredientList">
            <ul>
                { formValues.ingredients.length > 0 ? 

                    formValues.ingredients.map((element, index) =>
                        <Ingredient ingredientName={element.ingredientName} key={index} ingredient={element} formValues={formValues} setFormValues={setFormValues}/>    
                    ) : <div></div> 
                }
            </ul>
        </div>
    )
}