import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";


const StyledProfile = styled.nav`

    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin:1.5rem 1rem 1rem 2rem;

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

    button{
        border:solid 2px silver;
        text-align:center;
        border-radius:10px;
        font-size:1.5rem;
        width:45%;
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
    }
    input{
        margin-top:1rem;
        margin-bottom:1rem;
        width:75%;
    }
`
const User = (props)=>{
    {/* SPLIT INTO COMPONENTS!!! */}
    const { data } = props;
    return(
        <div>
            <StyledProfile>
                <div className="user">
                    <div className="userImg"></div>
                    <h1>Jason</h1>
                </div>
                <div className="btns">
                    <Link to="/"><button className="addBtn">Log Out</button></Link>
                    <button className="logOut">Add Recipe</button>
                </div>

            </StyledProfile>
            {/* Make conditional (&&) */}
            <RecipesDiv>
                <h2>Recipes</h2>
                <input placeholder="Search"/>
                { 
                    data.map(recipe=>{
                    return <Recipe key={recipe.recipeid} recipe={recipe}/>
                  })
                }
            </RecipesDiv>
        </div>
    );
}


export default User;