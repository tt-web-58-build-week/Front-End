import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe";

const MOCK_DATA = [
    {
        recipeid: 1,
        source: 'example',
        title: 'Recipe1',
        categories: [{categoryid: 1, name: 'example1'}, {categoryid: 2, name: 'example2'}],
        ingredients: [{ingredientid: 1, ingredientname: 'example1'}, {ingredientid: 2, ingredientname: 'example2'}, {ingredientid: 3, ingredientname: 'example3'}, {ingredientid: 4, ingredientname: 'example4'}],
        instructions: [{instructionsid: 1, instructionDetails: 'sample instructions 1'}, {instructionsid: 2, instructionDetails: 'sample instructions 2'}],
        user: {email: 'jeff@jeff.jeff', password: '1234', passwordNoEncrypt: '1234', userid: 1, username: 'jeff'}
    },
    {
        recipeid: 2,
        source: 'example',
        title: 'Recipe2',
        categories: [{categoryid: 1, name: 'example1'}, {categoryid: 2, name: 'example2'}],
        ingredients: [{ingredientid: 1, ingredientname: 'example1'}, {ingredientid: 2, ingredientname: 'example2'}, {ingredientid: 3, ingredientname: 'example3'}, {ingredientid: 4, ingredientname: 'example4'}],
        instructions: [{instructionsid: 1, instructionDetails: 'sample instructions 1'}, {instructionsid: 2, instructionDetails: 'sample instructions 2'}],
        user: {email: 'jeff@jeff.jeff', password: '1234', passwordNoEncrypt: '1234', userid: 1, username: 'jeff'}
    },
    {
        recipeid: 3,
        source: 'example',
        title: 'Recipe3',
        categories: [{categoryid: 1, name: 'example1'}, {categoryid: 2, name: 'example2'}],
        ingredients: [{ingredientid: 1, ingredientname: 'example1'}, {ingredientid: 2, ingredientname: 'example2'}, {ingredientid: 3, ingredientname: 'example3'}, {ingredientid: 4, ingredientname: 'example4'}],
        instructions: [{instructionsid: 1, instructionDetails: 'sample instructions 1'}, {instructionsid: 2, instructionDetails: 'sample instructions 2'}],
        user: {email: 'jeff@jeff.jeff', password: '1234', passwordNoEncrypt: '1234', userid: 1, username: 'jeff'}
    },
    {
        recipeid: 4,
        source: 'example',
        title: 'Recipe4',
        categories: [{categoryid: 1, name: 'example1'}, {categoryid: 2, name: 'example2'}],
        ingredients: [{ingredientid: 1, ingredientname: 'example1'}, {ingredientid: 2, ingredientname: 'example2'}, {ingredientid: 3, ingredientname: 'example3'}, {ingredientid: 4, ingredientname: 'example4'}],
        instructions: [{instructionsid: 1, instructionDetails: 'sample instructions 1'}, {instructionsid: 2, instructionDetails: 'sample instructions 2'}],
        user: {email: 'jeff@jeff.jeff', password: '1234', passwordNoEncrypt: '1234', userid: 1, username: 'jeff'}
    }
  ];


const HeaderDiv = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin:1.5rem 1rem 1rem 2rem;

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
            border-radius:50%;
        }
        h1{
            font-size:3.5rem;
            margin-left:1rem;
        }


    }
`
const RecipesDiv = styled.div`
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
const User = (prop)=>{
    return(
        <div>
            <HeaderDiv>
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80">
                </img>
                <h1>Jason</h1>
                <div className="btns">
                    <button className="addBtn">Add Recipe</button>
                    <button className="logOut">Log Out</button>
                </div>

            </HeaderDiv>
            <RecipesDiv>
                <h2>Recipes</h2>
                <input placeholder="Search"/>
                { 
                    MOCK_DATA.map(recipe=>{
                    return <Recipe key={recipe.recipeid} recipe={recipe}/>
                  })
                }
            </RecipesDiv>
        </div>
    );
}


export default User;