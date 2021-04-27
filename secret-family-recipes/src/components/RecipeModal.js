import React,{useState} from 'react';
import Modal from 'react-modal'
import './Modal.css'
import IngredientList from './IngredientList'
import _uniqueID from 'lodash/uniqueId'

export default function RecipeModal({modalIsOpen, setModalIsOpen}) {
    const [formValues, setFormValues] = useState({})
    const [ingredients, setIngredients] = useState([])

    const onChange = event => {
        const {name, value } = event.target
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = event => {
        event.preventDefault();
        // setModalIsOpen(false)
    }

    const addIngredient = event => {
        event.preventDefault();
        setIngredients(
            [...ingredients, {ingredientName: formValues.ingredient, ingredientId: _uniqueID('prefix-')}]
        )
        // document.querySelector('#ingredient-input').innerText = ''
        setFormValues('')
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
                    minWidth: '20em',
                    width: '30%',
                    minHeight: '15%',
                    maxHeight: '40%',
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
                    name="title"
                    type="text"
                    onChange={onChange}
                />
                </div>
                <div>
                <label>Source: </label>
                <input 
                    name="source"
                    type="text"
                    onChange={onChange}
                />
                </div>
                <div id="ingredients">
                <label>Ingredient: </label>
                <input
                    id="ingredient-input" 
                    name="ingredient"
                    type="text"
                    onChange={onChange}
                />
                <button onClick={addIngredient}>Add</button>
                <IngredientList ingredients={ingredients} setIngredients={setIngredients}/>
                </div>
                <div>
                <label>Instructions: </label>
                <input 
                    name="instruction"
                    type="textarea"
                    onChange={onChange}
                />
                </div>

                <div>
                    <label>Category: </label>
                    <input 
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