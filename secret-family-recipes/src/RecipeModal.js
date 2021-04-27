import React,{useState} from 'react';
import Modal from 'react-modal'
import './RecipeModal.css'

export default function RecipeModal(props) {
    const {modalIsOpen, setModalIsOpen} = props
    const [formValues, setFormValues] = useState({})

    const onChange = event => {
        const {name, value } = event.target
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setModalIsOpen(false)
    }

    const addIngredient = event => {
        event.preventDefault();
        const ingredients = document.querySelector('#ingredients')
        const newIngredient = React.createElement('input', [],[])
        console.log(newIngredient)
        // ingredients.appendChild(newIngredient)
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
                    name="title"
                    type="text"
                    onChange={onChange}
                />
                <button onClick={addIngredient}>YEE</button>
                </div>
                <div>
                <label>Instructions: </label>
                <input 
                    name="title"
                    type="text"
                    onChange={onChange}
                />
                </div>

                <div>
                    <label>Category: </label>
                    <input 
                        name="Category"
                        type="text"
                        onChange={onChange}
                    />
                </div>
                <button id='submit-button'>Submit Recipe</button>
            </form>
        </Modal>
    )
}