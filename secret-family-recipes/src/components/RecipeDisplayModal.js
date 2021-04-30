import React,{useEffect, useState} from 'react';
import Modal from 'react-modal'
import IngredientList from './IngredientList'
import InstructionList from './InstructionList'
import _uniqueID from 'lodash/uniqueId'
import { object } from 'yup';

export default function RecipeDisplayModal({recipeDisplayModalIsOpen, setRecipeDisplayModalIsOpen, recipeModalIsOpen, setRecipeModalIsOpen, formValues, setFormValues}) {
    const dummyData = {
    title: 'Your Cookies',
    source: 'Mamas Cookies',
    ingredients: [{ingredientName: 'flour', ingredientId: 'prefix-1'},
        {ingredientName: 'salt', ingredientId: 'prefix-2'},
        {ingredientName: 'chocolate', ingredientId: 'prefix-3'}],
    instructions: [{instructionName: 'step1', instructionId: 'prefix-4'},
        {instructionName: 'step2', instructionId: 'prefix-5'}, 
        {instructionName: 'step3', instructionId: 'prefix-6'}],
    category: 'Pizza'   
}

    const edit = (event) => {
        console.log('yessir')
        setFormValues(dummyData)
        setRecipeDisplayModalIsOpen(false)
        setRecipeModalIsOpen(true)
    }


    return (
        <Modal isOpen={recipeDisplayModalIsOpen} 
        onRequestClose={() => setRecipeDisplayModalIsOpen(false)}
        portalClassName='modal'
        onKeyPress={(e) => {e.key === 'Enter' && e.preventDefault()}}
        style={
            {
                overlay: {
                    backgroundColor: 'rgba(0,0,0,.7)'
                },
                content: {
                    margin: 'auto',
                    color: 'orange',
                    minWidth: '15em',
                    maxWidth: '22em',
                    minHeight: '15%',
                    maxHeight: '40%',
                    // overflow: 'hidden',
                },
            }
        }>
            <button style={{float: 'right'}} onClick={()=> setRecipeDisplayModalIsOpen(false)}>X</button>
            <h2>Add Recipe</h2>
            <br/>
            <div>
                <h2>{dummyData.title}</h2>
                <h2>{dummyData.source}</h2>
                <h2>{dummyData.ingredients[0].ingredientName}</h2>
                <h2>{dummyData.instructions[0].ingredientName}</h2>
                <h2>{dummyData.category}</h2>
                
                <button onClick={(event) => edit(event)}>EDIT BUTTON</button>
            </div>
        </Modal>
    )
}