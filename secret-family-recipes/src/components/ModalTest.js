import React, { useState } from 'react'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import RecipeModal from './RecipeModal'

export default function ModalTest() {

const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false)
const [recipeModalIsOpen, setRecipeModalIsOpen] = useState(false)

    return (
        <div>
        <button onClick={()=> setLoginModalIsOpen(true)}>Open Login</button>
        <LoginModal modalIsOpen={ loginModalIsOpen } setModalIsOpen={ setLoginModalIsOpen }/>
        
        <button onClick={()=> setSignUpModalIsOpen(true)}>Open Sign Up</button>
        <SignUpModal modalIsOpen={ signUpModalIsOpen } setModalIsOpen={ setSignUpModalIsOpen }/>
        
        <button onClick={()=> setRecipeModalIsOpen(true)}>Open Recipes</button>
        <RecipeModal modalIsOpen={ recipeModalIsOpen } setModalIsOpen={ setRecipeModalIsOpen }/>
      </div>
    )
}