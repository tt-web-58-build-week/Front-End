import React, { useState } from 'react';
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import { MOCK_DATA as data} from './mockData/mockData';


import axios from "axios";


function App() {
  // const [ourFavoriteRecipes, setOurFavoriteRecipes] = useState(MOCK_DATA);
  const [recipeModalIsOpen, setRecipeModalIsOpen] = useState(false)

  const [recipeToDelete, setRecipeToDelete] = useState(null);
  const [searchValue, setSearchValue] = useState("");
 
  const updateSearchValue = (value)=>{
      setSearchValue(value);
  }

  const search = ()=>{
    console.log("Looking for the date with these keys ....");
  }

  const deleteRecipe = (id)=>{
    console.log(`Recipe with id ${id} is removed from the user's profile page`);
  }
  // axios.get(url)
  // .then(res=>{
  //   setOurFavoriteRecipes(res.data);
  // })
  // .catch(error=>{
  //   console.log("Something went wrong");
  // })

  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route 
        path="/user"
        render={props => (
          <User {...props} data={data} 
          deleteRecipe={deleteRecipe} 
          recipeModalIsOpen={recipeModalIsOpen}
          setRecipeModalIsOpen={setRecipeModalIsOpen}
          />
        )}
      />
      <Route path="/about" component={About}/>

    </Switch>

    

    
  );
}

export default App;
