import React, { useState } from 'react';
import About from "./components/About";
import Company from "./components/Company";
import Recipe from "./components/Recipe";
import Nav from "./components/NavBar";
import {Route, Switch, Link, Router} from "react-router-dom";
import User from "./components/User"
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

      <Route path="/user">
        <User/>
      </Route>
      <Route path="/">
        <section>
          <div>
            <Company/>
          </div>
          <div>
            <Nav/>
            <About/>
          </div>
        </section>
      </Route>
    </Switch>

    
  );
}

export default App;
