import React,{useState} from 'react';
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
                        value={formValues.title}
                        error={errors.category}
                        name="title"
                        type="text"
                        onChange={onChange}
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
                        value={formValues.category}
                        error={errors.category}
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