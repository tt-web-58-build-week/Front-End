import React,{useEffect, useState} from 'react';
import Modal from 'react-modal'
import IngredientList from './IngredientList'
import InstructionList from './InstructionList'
import _uniqueID from 'lodash/uniqueId'
import { object } from 'yup';

export default function RecipeModal({modalIsOpen, setModalIsOpen, formValues, setFormValues, initialStateValues}) {

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

    function enterButtonCheckInstructions(event) {
        if(event.key === 'Enter') {
            event.preventDefault()
            document.querySelector('#add-instruction-button').click()
        }
    }

    const changeText = event => {
        const {name, value} = event.target
        setTextValue({...textValue, [name]: value})
     }

    const onChange = event => {
        const {name, value } = event.target
        setFormValues({...formValues, [name]: value})
        console.log(formValues)
    }

    const onSubmit = event => {
        event.preventDefault();
        let form_data = new FormData();
        for ( let key in formValues ) {
            form_data.append(key, formValues[key]);
            // console.log(formValues)
            // console.log(key)
            // console.log(formValues[key])
        }
        console.log(formValues)
        document.querySelectorAll('input').innerText = ''
        setFormValues(initialStateValues)
        closeModal()
    }

    const addIngredient = event => {
        event.preventDefault();
        if(formValues.ingredient !== '' && formValues.ingredient !== undefined) {
            formValues.ingredients = [...formValues.ingredients, {ingredientName: formValues.ingredient, ingredientId: _uniqueID('prefix-')}]
        }
        document.querySelector('#ingredient-input').value = ''
        setTextValue({...textValue, ingredient: ''})
    }

    const addInstruction = event => {
        event.preventDefault();
        if(formValues.instruction !== '' && formValues.instruction !== undefined) {
            formValues.instructions = [...formValues.instructions, {instructionName: formValues.instruction, instructionId: _uniqueID('prefix-')}]

        }
        document.querySelector('#instruction-input').value = ''
        setTextValue({...textValue, instruction: ''})
    }

    const closeModal = () => {
        setModalIsOpen(false)
        console.log('eeeeeeeee')
        setFormValues({title: '', source: '', ingredients: [], instructions: [], category:[]})

    }

    return (
        <Modal isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        portalClassName='modal'
        id="recipeModal"
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
            <h2>Recipe</h2>
            <br/>
            <form>
                <div>
                    <label>Title: </label>
                    <input
                        placeholder='Chocolate Chip Cookies...' 
                        name="title"
                        type="text"
                        onChange={onChange}
                        value={formValues.title}
                    />
                </div>
                <div>
                    <label>Source: </label>
                    <input 
                        placeholder='Grandma Carolyn...'
                        name="source"
                        type="text"
                        onChange={onChange}
                        value={formValues.source}
                    />
                </div>

                <div id="ingredients">
                    <label>Ingredient: </label>
                    <input
                        placeholder='1 cup of sugar...'
                        id="ingredient-input" 
                        name="ingredient"
                        type="text"
                        onChange={onChange}
                        onKeyPress={enterButtonCheckIngredients}
                    />
                    <button onClick={addIngredient} id="add-ingredient-button">Add</button>
                    <IngredientList formValues={formValues} setFormValues={setFormValues}/>
                </div>

                <div>
                    <label>Instruction: </label>
                    <input
                        placeholder='Heat oven to 375°...' 
                        id="instruction-input" 
                        name="instruction"
                        type="text"
                        onChange={onChange}
                        onKeyPress={enterButtonCheckInstructions}
                    />
                    <button onClick={addInstruction} id="add-instruction-button">Add</button>
                    <InstructionList formValues={formValues} setFormValues={setFormValues}/>
                </div>

                <div>
                    <label>Category: </label>
                    <select 
                        placeholder='Dessert...' 
                        name="category"
                        type="text"
                        value={formValues.category}
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
                <button id='submit-button' onClick={onSubmit}>Submit Recipe</button>
            </form>
        </Modal>
    )
}