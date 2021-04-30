import React, { useState } from 'react'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import RecipeModal from './RecipeModal'
import RecipeDisplayModal from './RecipeDisplayModal'

export default function ModalTest() {

const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false)
const [recipeModalIsOpen, setRecipeModalIsOpen] = useState(false)
const [recipeDisplayModalIsOpen, setRecipeDisplayModalIsOpen] = useState(false)
const initialStateValues = {title: '', source: '', ingredients: [], instructions: [], category:[]}
const [formValues, setFormValues] = useState(initialStateValues)

    return (
        <div>
        <button onClick={()=> setLoginModalIsOpen(true)}>Open Login</button>
        <LoginModal modalIsOpen={ loginModalIsOpen } setModalIsOpen={ setLoginModalIsOpen }/>
        
        <button onClick={()=> setSignUpModalIsOpen(true)}>Open Sign Up</button>
        <SignUpModal modalIsOpen={ signUpModalIsOpen } setModalIsOpen={ setSignUpModalIsOpen }/>
        
        <button onClick={()=> setRecipeModalIsOpen(true)}>Open Recipes</button>
        <RecipeModal modalIsOpen={ recipeModalIsOpen } setModalIsOpen={ setRecipeModalIsOpen } formValues={formValues} setFormValues={setFormValues} initialStateValues={initialStateValues}/>

        <button onClick={()=> setRecipeDisplayModalIsOpen(true)}>Open Display Recipe</button>
        <RecipeDisplayModal recipeDisplayModalIsOpen={ recipeDisplayModalIsOpen } setRecipeDisplayModalIsOpen={ setRecipeDisplayModalIsOpen } recipeModalIsOpen={ recipeModalIsOpen } setRecipeModalIsOpen={ setRecipeModalIsOpen } formValues={formValues} setFormValues={setFormValues} initialStateValues={initialStateValues}/>
      </div>
    )
}