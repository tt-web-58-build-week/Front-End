import React,{useEffect, useState} from 'react';
import Modal from 'react-modal'
import IngredientList from './IngredientList'
import InstructionList from './InstructionList'
import _uniqueID from 'lodash/uniqueId'
import { object } from 'yup';

export default function RecipeModal({modalIsOpen, setModalIsOpen}) {
    const [formValues, setFormValues] = useState({title: '', source: '', ingredients: [], instructions: [], category:[]})
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [textValue, setTextValue] = useState({})

    const ingredientInput = document.querySelector('#ingredient-input')
    function enterButtonCheckIngredients(event) {
        if(document.activeElement === ingredientInput) {
            if(event.key === 'Enter') {
                event.preventDefault()
                console.log(document.activeElement)
                document.querySelector('#add-ingredient-button').click()
            }
        }
    }

    // const instructionInput = document.querySelector('#instruction-input')
    function enterButtonCheckInstructions(event) {
        if(event.key === 'Enter') {
            event.preventDefault()
            document.querySelector('#add-instruction-button').click()
        }
    }

    const changeText = event => {
        const {name, value} = event.target
        setTextValue({...textValue, [name]: value})
        
        // console.log(textValue)
     }

    const onChange = event => {
        const {name, value } = event.target
        // if(name === 'ingredient' || name === 'instruction')
        setFormValues({...formValues, [name]: value})
        // console.log(event.target)
        // console.log(ingredientInput)

    }

    const onSubmit = event => {
        event.preventDefault();
        // setFormValues(formValues)
        console.log(formValues)
        // setFormValues({title: '', source: '', ingredients: [], instructions: [], category:[]})
        // setModalIsOpen(false)
    }

    const addIngredient = event => {
        event.preventDefault();
        if(textValue.ingredient !== '' && textValue.ingredient !== undefined) {
            setIngredients(
                [...ingredients, {ingredientName: textValue.ingredient, ingredientId: _uniqueID('prefix-')}]
            )
            formValues.ingredients=([...ingredients, {ingredientName: textValue.ingredient, ingredientId: _uniqueID('prefix-')}])
            console.log(formValues)
        }
        document.querySelector('#ingredient-input').value = ''
        setTextValue({...textValue, ingredient: ''})
    }

    const addInstruction = event => {
        event.preventDefault();
        if(textValue.instruction !== '' && textValue.instruction !== undefined) {
            setInstructions(
                [...instructions, {instructionName: textValue.instruction, instructionId: _uniqueID('prefix-')}]
            )
            formValues.instructions=([...instructions, {instructionName: textValue.instruction, instructionId: _uniqueID('prefix-')}])
            console.log([...instructions, {instructionName: textValue.instruction, instructionId: _uniqueID('prefix-')}])
        }
        document.querySelector('#instruction-input').value = ''
        // setFormValues('')
        setTextValue({...textValue, instruction: ''})
    }

    return (
        <Modal isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
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
            <button style={{float: 'right'}} onClick={()=> setModalIsOpen(false)}>X</button>
            <h2>Add Recipe</h2>
            <br/>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label>
                    <input
                        placeholder='Chocolate Chip Cookies...' 
                        name="title"
                        type="text"
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Source: </label>
                    <input 
                        placeholder='Grandma Carolyn...'
                        name="source"
                        type="text"
                        onChange={onChange}
                    />
                </div>

                <div id="ingredients">
                    <label>Ingredient: </label>
                    <input
                        placeholder='1 cup of sugar...'
                        id="ingredient-input" 
                        name="ingredient"
                        type="text"
                        onChange={changeText}
                        onKeyPress={enterButtonCheckIngredients}
                    />
                    <button onClick={addIngredient} id="add-ingredient-button">Add</button>
                    <IngredientList ingredients={ingredients} setIngredients={setIngredients}/>
                </div>

                <div>
                    <label>Instruction: </label>
                    <input
                        placeholder='Heat oven to 375°...' 
                        id="instruction-input" 
                        name="instruction"
                        type="text"
                        onChange={changeText}
                        onKeyPress={enterButtonCheckInstructions}
                    />
                    <button onClick={addInstruction} id="add-instruction-button">Add</button>
                    <InstructionList instructions={instructions} setInstructions={setInstructions}/>
                </div>

                <div>
                    <label>Category: </label>
                    <select 
                        placeholder='Dessert...' 
                        name="category"
                        type="text"
                        onChange={onChange}>
                            <option value="" disabled></option>
                            <option value="Mexican">Mexican</option>
                            <option value="Italian">Italian</option>
                            <option value="BBQ">BBQ</option>
                            <option value="Thai">Thai</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Egyptian">Egyptian</option>
                            <option value="Hawaiian">Hawaiian</option>
                            <option value="Chuck Norris Fuel">Chuck Norris Fuel</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Dessert">Dessert</option>
                            <option value="French">French</option>
                        
                    </select>
                </div>
                <button id='submit-button'>Submit Recipe</button>
            </form>
        </Modal>
    )
}