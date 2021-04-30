import React, {useState} from "react";
import styled from "styled-components";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import RecipeModal from './RecipeModal'


const StyledProfile = styled.nav`
    margin: 0 auto;
    width: 100%;
    padding: 0 10rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 10vh;


    .userImg {
        background-image: url("https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        border-radius: 100%;
        width: 100px;
        height: 100px;
    }
    .user {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-family: serif;
            font-size: 3.5rem;
            margin-left: 2rem;
        }
    }

    button {
        color: ${pr => pr.theme.lightGray};
        letter-spacing: 1px;
        height: 50px;
        width: 150px;
        margin: 10px 20px;
        border-radius: 0;
        background-color: ${pr => pr.theme.darkGray};
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        transition: all .5s ease-out;
    
        &:hover {
            background-color: ${pr => pr.theme.lightGray};
            border: 3px solid ${pr => pr.theme.gray};
            color: ${pr => pr.theme.gray};
            transition: all .1s ease-in;
        }

`
const RecipesDiv = styled.section`
    background-color: ${pr => pr.theme.lightGray};
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    height: 90vh;
    padding: 1rem 20rem;

    form {
        width: 100%;
    }
`
const searchInitialValue = {
    category: "",
    keywords:""
}
const User = (props)=>{
    const [searchValue, setSearchValue] = useState(searchInitialValue);

    const [recipeDisplayModalIsOpen, setRecipeDisplayModalIsOpen] = useState(false)
    const initialStateValues = {title: '', source: '', ingredients: [], instructions: [], category:[]}
    const [formValues, setFormValues] = useState(initialStateValues)

    const updateSearchValue = (evt)=>{
        const {name,value} = evt.target;
        setSearchValue({...searchValue, [name]:value});
    }
    const search = (evt)=>{
        evt.preventDefault();
        console.log(`Looking for ${searchValue.keywords} from category ${searchValue.category}`);
        setSearchValue(searchInitialValue);
    }
    
    const { data, deleteRecipe, recipeModalIsOpen, setRecipeModalIsOpen } = props;
    return(
        <div>
            <StyledProfile>
                <div className="user">
                    <div className="userImg"></div>
                    <h1>Rebecca</h1>
                </div>
                <div className="btns">
                    <Link to="/"><button>Log Out</button></Link>
                    <button className="addRecipe" onClick={()=> setRecipeModalIsOpen(true)}>Add Recipe</button>
                    <RecipeModal modalIsOpen={ recipeModalIsOpen } setModalIsOpen={ setRecipeModalIsOpen } formValues={formValues} setFormValues={setFormValues} initialStateValues={initialStateValues}/>
                </div>
            </StyledProfile>
            <RecipesDiv>
                <h2>Recipes</h2>
                <form onSubmit={search}>
                    <select className="category" name="category" onChange={updateSearchValue}>
                        <option value="">-- Select a Category --</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Italian">Italian</option>
                        <option value ="Dessert">Dessert</option>
                        <option value="BBQ">BBQ</option>
                        <option value="Thai">Thai</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Egyptian">Egyptian</option>
                        <option value="Hawaiian">Hawaiian</option>
                        <option value="Chuck Norris Fuel">Chuck Norris Fuel</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Pizza">Pizza</option>
                        <option value="French">French</option>

                    </select>
                    <input className="search" type="text" value={searchValue.keywords} onChange={updateSearchValue} name="keywords" placeholder="Search for a favorite or something new!"/> 
                    <button>Search</button>
                </form>
                { 
                    data.map(recipe=>{
                    return <Recipe key={recipe.recipeid} recipe={recipe} deleteRecipe={deleteRecipe}
                    recipeDisplayModalIsOpen={ recipeDisplayModalIsOpen } setRecipeDisplayModalIsOpen={ setRecipeDisplayModalIsOpen } recipeModalIsOpen={ recipeModalIsOpen } setRecipeModalIsOpen={ setRecipeModalIsOpen } formValues={formValues} setFormValues={setFormValues} initialStateValues={initialStateValues}/>
                  })
                }
            </RecipesDiv>
        </div>
    );
}


export default User;