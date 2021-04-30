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
    .category{
        width:15%;
        height:43%;
        
    }
    input{
        margin-top:1rem;
        margin-bottom:3rem;
        width:65%;
    }
`
const searchInitialValue = {
    category: "",
    keywords:""
}
const User = (props)=>{
    // {/* SPLIT INTO COMPONENTS!!! */}
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
                    <select className="category" name="category" onChange={updateSearchValue}>
                        <option value="">Categories</option>
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
                    <input className="search" type="text" value={searchValue.keywords} onChange={updateSearchValue} name="keywords"/> 
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