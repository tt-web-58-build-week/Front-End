import React,{useEffect, useState} from 'react';
import Modal from 'react-modal'
import IngredientList from './IngredientList'
import InstructionList from './InstructionList'
import _uniqueID from 'lodash/uniqueId'
import * as yup from 'yup';


const INITIAL_FORM_VALUES = {
    title: '',
    source: '',
    category: ''
} 

const INITIAL_FORM_ERRORS = {
    title: '',
    source: '',
    category: ''
}


const schema = yup.object().shape({
    title: yup.string().required('required'),
    source: yup.string().required('required'),
    category: yup.string().required('required')
})

export default function RecipeModal(props) {
    const {modalIsOpen, setModalIsOpen, submit} = props
    const [formValues, setFormValues] = useState({INITIAL_FORM_VALUES})
    const [errors, setErrors] = useState({INITIAL_FORM_ERRORS})
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])

    const onChange = event => {
        const {name, value } = event.target
        setFormValues({
            ...formValues, [name]: value
        })
        console.log(event.target)
        
    }

   

    const addIngredient = event => {
        event.preventDefault();
        if(formValues.ingredient !== '' && formValues.ingredient !== undefined) {
            formValues.ingredients = [...formValues.ingredients, {ingredientName: formValues.ingredient, ingredientId: _uniqueID('prefix-')}]
        }
    }

    const addInstruction = event => {
        event.preventDefault();
        if(formValues.instruction !== '' && formValues.instruction !== undefined) {
            formValues.instructions = [...formValues.instructions, {instructionName: formValues.instruction, instructionId: _uniqueID('prefix-')}]

        }
    }

    const closeModal = () => {
        setModalIsOpen(false)
        console.log('eeeeeeeee')
        setFormValues({title: '', source: '', ingredients: [], instructions: [], category:[]})

    }


    const onSubmit = event => {
        event.preventDefault();
        schema.validate(formValues)
        .then(_ => {
        submit(formValues, ingredients, instructions)
        setModalIsOpen(false)
        setFormValues(INITIAL_FORM_VALUES);
        setErrors(INITIAL_FORM_ERRORS);
        })
        .catch(err => {
            console.log(err)
        })
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
                    backgroundColor: 'rgba(0,0,0,.7)',
                    zIndex: '100',
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
                        value={formValues.title}
                        error={errors.category}
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
                        value={formValues.source}
                        error={errors.category}
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
                    />
                    <button onClick={addInstruction} id="add-instruction-button">Add</button>
                    <InstructionList formValues={formValues} setFormValues={setFormValues}/>
                </div>

                <div>
                    <label>Category: </label>
                    <select 
                        placeholder='Dessert...' 
                        value={formValues.category}
                        error={errors.category}
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