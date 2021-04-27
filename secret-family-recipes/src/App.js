import React, {useState} from "react";
import About from "./components/About";
import Company from "./components/Company";
import Recipe from "./components/Recipe";
import Nav from "./components/NavBar";
import {Route, Switch, Link} from "react-router-dom";
import axios from "axios";


const MOCK_DATA = [
  {
      recipeid: 1,
      source: 'example',
      title: 'Recipe1',
      categories: [{categoryid: 1, name: 'example1'}, {categoryid: 2, name: 'example2'}],
      ingredients: [{ingredientid: 1, ingredientname: 'example1'}, {ingredientid: 2, ingredientname: 'example2'}, {ingredientid: 3, ingredientname: 'example3'}, {ingredientid: 4, ingredientname: 'example4'}],
      instructions: [{instructionsid: 1, instructionDetails: 'sample instructions 1'}, {instructionsid: 2, instructionDetails: 'sample instructions 2'}],
      user: {email: 'jeff@jeff.jeff', password: '1234', passwordNoEncrypt: '1234', userid: 1, username: 'jeff'}
  },
  {
      recipeid: 2,
      source: 'example',
      title: 'Recipe2',
      categories: [{categoryid: 1, name: 'example1'}, {categoryid: 2, name: 'example2'}],
      ingredients: [{ingredientid: 1, ingredientname: 'example1'}, {ingredientid: 2, ingredientname: 'example2'}, {ingredientid: 3, ingredientname: 'example3'}, {ingredientid: 4, ingredientname: 'example4'}],
      instructions: [{instructionsid: 1, instructionDetails: 'sample instructions 1'}, {instructionsid: 2, instructionDetails: 'sample instructions 2'}],
      user: {email: 'jeff@jeff.jeff', password: '1234', passwordNoEncrypt: '1234', userid: 1, username: 'jeff'}
  },
  {
      recipeid: 3,
      source: 'example',
      title: 'Recipe3',
      categories: [{categoryid: 1, name: 'example1'}, {categoryid: 2, name: 'example2'}],
      ingredients: [{ingredientid: 1, ingredientname: 'example1'}, {ingredientid: 2, ingredientname: 'example2'}, {ingredientid: 3, ingredientname: 'example3'}, {ingredientid: 4, ingredientname: 'example4'}],
      instructions: [{instructionsid: 1, instructionDetails: 'sample instructions 1'}, {instructionsid: 2, instructionDetails: 'sample instructions 2'}],
      user: {email: 'jeff@jeff.jeff', password: '1234', passwordNoEncrypt: '1234', userid: 1, username: 'jeff'}
  },
  {
      recipeid: 4,
      source: 'example',
      title: 'Recipe4',
      categories: [{categoryid: 1, name: 'example1'}, {categoryid: 2, name: 'example2'}],
      ingredients: [{ingredientid: 1, ingredientname: 'example1'}, {ingredientid: 2, ingredientname: 'example2'}, {ingredientid: 3, ingredientname: 'example3'}, {ingredientid: 4, ingredientname: 'example4'}],
      instructions: [{instructionsid: 1, instructionDetails: 'sample instructions 1'}, {instructionsid: 2, instructionDetails: 'sample instructions 2'}],
      user: {email: 'jeff@jeff.jeff', password: '1234', passwordNoEncrypt: '1234', userid: 1, username: 'jeff'}
  }
];

function App() {
  const [ourFavoriteRecipes, setOurFavoriteRecipes] = useState(MOCK_DATA);

  // axios.get(url)
  // .then(res=>{
  //   setOurFavoriteRecipes(res.data);
  // })
  // .catch(error=>{
  //   console.log("Something went wrong");
  // })

  return (

    <section>
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
    
  );
}

export default App;
