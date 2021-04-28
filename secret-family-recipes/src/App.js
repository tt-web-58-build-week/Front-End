import React, { useState } from 'react'
import About from "./components/About";
import Company from "./components/Company";
import Recipe from "./components/Recipe";
import Nav from "./components/NavBar";
import LoginModal from './components/LoginModal'
import SignUpModal from './components/SignUpModal'
import RecipeModal from './components/RecipeModal'
import Modal from 'react-modal'
import './App.css'
import 'react-fontawesome'
import { Route, Switch } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import { MOCK_DATA as data} from './mockData/mockData';
import axios from "axios";
  // const [ourFavoriteRecipes, setOurFavoriteRecipes] = useState(MOCK_DATA);

  // axios.get(url)
  // .then(res=>{
  //   setOurFavoriteRecipes(res.data);
  // })
  // .catch(error=>{
  //   console.log("Something went wrong");
  // })
Modal.setAppElement('#root')

function App() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false)
  const [recipeModalIsOpen, setRecipeModalIsOpen] = useState(false)
  return (
    <Switch>
       <section>
      <div>
        <button onClick={()=> setLoginModalIsOpen(true)}>Open Login</button>
        <LoginModal modalIsOpen={ loginModalIsOpen } setModalIsOpen={ setLoginModalIsOpen }/>
        <button onClick={()=> setSignUpModalIsOpen(true)}>Open Sign Up</button>
        <SignUpModal modalIsOpen={ signUpModalIsOpen } setModalIsOpen={ setSignUpModalIsOpen }/>
        <button onClick={()=> setRecipeModalIsOpen(true)}>Open Recipes</button>
        <RecipeModal modalIsOpen={ recipeModalIsOpen } setModalIsOpen={ setRecipeModalIsOpen }/>
      </div>
      <div>
        <Company/>
      </div>
      <div>
        <Nav/>
        <About/>
        {/* <section>
            <h2>Some of our favorite recipes</h2>
            {
              ourFavoriteRecipes.map(recipe=>{
                return <Recipe key={recipe.recipeid} recipe={recipe}/>
              })
            }
        </section> */}
      </div>
    </section>
    </Switch>

    
  );
}

export default App;
