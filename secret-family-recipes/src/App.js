import React, { useState } from 'react';
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import { MOCK_DATA as data} from './mockData/mockData';
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
      <Route 
        path="/user" 
        render={props => (
          <User {...props} data={data}/>
        )}
      />
      <Route path="/about" component={About}/>
    </Switch>

    
  );
}

export default App;
