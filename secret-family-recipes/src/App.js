import React from "react";
import About from "./components/About";
import Company from "./components/Company";
import Recipe from "./components/Recipe";
import Nav from "./components/NavBar";

function App() {
  return (
    <section>
      <div>
        <Company/>
      </div>
      <div>
        <Nav/>
        <About/>
        <section>
            <h2>Some of our favorite recipes</h2>
            <Recipe/>
        </section>
      </div>
    </section>
  );
}

export default App;
