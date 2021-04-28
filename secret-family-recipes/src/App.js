import React, { useState } from 'react';
import About from "./components/About";
import Recipe from "./components/Recipe";
import Nav from "./components/Nav";
import {Route, Switch, Link, Router} from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import axios from "axios";




function App() {
  // const [ourFavoriteRecipes, setOurFavoriteRecipes] = useState(MOCK_DATA);

  // axios.get(url)
  // .then(res=>{
  //   setOurFavoriteRecipes(res.data);
  // })
  // .catch(error=>{
  //   console.log("Something went wrong");
  // })

  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/user" component={User}/>
      <Route path="/about" component={About}/>
    </Switch>

    
  );
}

export default App;
