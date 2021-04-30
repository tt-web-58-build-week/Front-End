import React, {useState} from "react";
import styled from "styled-components";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import RecipeModal from './RecipeModal'


const StyledProfile = styled.nav`

    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin:1.5rem 1rem 1rem 2rem;
    a{
        text-decoration: none;
    }
    .userImg {
        background-image: url("https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80");
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
    }

    .logOut, .addRecipe{
        display:flex;
        align-items:center;
        justify-content:center;
        border:solid 2px silver;
        border-radius:10px;
        font-size:1.5rem;
        width:45%;
        background-color: #999b84;
        color:#f4eee8;
    }
    
    .btns{
        display:flex;
        justify-content:space-between;
        width:40%;
    }

    @media(min-width:500px){

        img{
            width:25%;
            border-radius:100%;
        }
        h1{
            font-size:3.5rem;
            margin-left:1rem;
        }


    }
`
const RecipesDiv = styled.section`
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    text-align:center;
    h2{
        width:100%;
        font-size:2rem;
    }
    form{
        width:100%;
    }
    input{
        margin-top:1rem;
        margin-bottom:3rem;
        width:75%;
    }
`
const User = (props)=>{
    // {/* SPLIT INTO COMPONENTS!!! */}
    const [searchValue, setSearchValue] = useState("");

    const [recipeDisplayModalIsOpen, setRecipeDisplayModalIsOpen] = useState(false)
    const initialStateValues = {title: '', source: '', ingredients: [], instructions: [], category:[]}
    const [formValues, setFormValues] = useState(initialStateValues)

    const updateSearchValue = (evt)=>{
        const {value} = evt.target;
        setSearchValue(value);
    }
    const search = (evt)=>{
        evt.preventDefault();
        console.log(`Looking for ${searchValue}`);
        setSearchValue("");
    }
    
    const { data, deleteRecipe, recipeModalIsOpen, setRecipeModalIsOpen } = props;
    return(
        <div>
            <StyledProfile>
                <div className="user">
                    <div className="userImg"></div>
                    <h1>Jason</h1>
                </div>
                <div className="btns">
                    <Link to="/" className="logOut">Log Out</Link>
                    <button className="addRecipe" onClick={()=> setRecipeModalIsOpen(true)}>Add Recipe</button>
                    <RecipeModal modalIsOpen={ recipeModalIsOpen } setModalIsOpen={ setRecipeModalIsOpen } formValues={formValues} setFormValues={setFormValues} initialStateValues={initialStateValues}/>
                </div>
            </StyledProfile>
            {/* Make conditional (&&) */}
            <RecipesDiv>
                <h2>Recipes</h2>
                <form onSubmit={search}>
                    <input className="search" type="text" value={searchValue} onChange={updateSearchValue} name="keywords"/> 
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