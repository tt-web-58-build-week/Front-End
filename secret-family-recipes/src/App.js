import React, { useState } from 'react';
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import { MOCK_DATA as data} from './mockData/mockData';
import {signUpRequest, loginRequest} from './utils/requests';
import Modal from 'react-modal'
import axios from "axios";

Modal.setAppElement('#root')

function App() {
  // const [ourFavoriteRecipes, setOurFavoriteRecipes] = useState(MOCK_DATA);

  // axios.get(url)
  // .then(res=>{
  //   setOurFavoriteRecipes(res.data);
  // })
  // .catch(error=>{
  //   console.log("Something went wrong");
  // })
  const storedUserID = localStorage.getItem('userID');
  const [userID, setUserID] = useState(storedUserID ? storedUserID : null);
  console.log('userID:', userID);

 return (
    
    <Switch>
      <Route 
        path="/user" 
        render={props => (
          <User {...props} data={data}/>
          )}
      />
      <Route path="/about" component={About}/>
      <Route exact path="/">
        <Home submitS={signUpRequest} submitL ={loginRequest} setUserID={setUserID}/>
      </Route>

    </Switch>

    

    
  );
}

export default App;
