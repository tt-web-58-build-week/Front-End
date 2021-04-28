import React,{useState} from 'react';
import Modal from 'react-modal'
import IngredientList from './IngredientList'
import InstructionList from './InstructionList'
import _uniqueID from 'lodash/uniqueId'

export default function RecipeModal({modalIsOpen, setModalIsOpen}) {
    const [formValues, setFormValues] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])

    const onChange = event => {
        const {name, value } = event.target
        setFormValues({...formValues, [name]: value})
        console.log(event.target)
    }

    const onSubmit = event => {
        event.preventDefault();
        // setModalIsOpen(false)
    }

    const addIngredient = event => {
        event.preventDefault();
        if(formValues.ingredient !== '' && formValues.ingredient !== undefined) {
            setIngredients(
                [...ingredients, {ingredientName: formValues.ingredient, ingredientId: _uniqueID('prefix-')}]
            )
        }
        document.querySelector('#ingredient-input').value = ''

        setFormValues('')
    }

    const addInstruction = event => {
        event.preventDefault();
        if(formValues.instruction !== '' && formValues.instruction !== undefined) {
            setInstructions(
                [...instructions, {instructionName: formValues.instruction, instructionId: _uniqueID('prefix-')}]
            )
        }
        document.querySelector('#instruction-input').value = ''
        // setFormValues('')
    }

    return (
        <Modal isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        portalClassName='modal'
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
                        onChange={onChange}
                    />
                    <button onClick={addIngredient}>Add</button>
                    <IngredientList ingredients={ingredients} setIngredients={setIngredients}/>
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
                    <button onClick={addInstruction}>Add</button>
                    <InstructionList instructions={instructions} setInstructions={setInstructions}/>
                </div>

                <div>
                    <label>Category: </label>
                    <input
                        placeholder='Dessert...' 
                        name="category"
                        type="text"
                        onChange={onChange}
                    />
                </div>
                <button id='submit-button'>Submit Recipe</button>
            </form>
        </Modal>
    )
}