import React from "react";
import styled from 'styled-components';

const StyledAbout = styled.section`
  background-color: white;
  margin: 0 auto;
  width: 80%;
  padding-top: 1rem;

  h2 {
    font-size: 3rem;
  }

  button {
    color: white;
    height: 50px;
    width: 100px;
    margin: 20px 0;
    border-radius: 0;
    background-color: ${pr => pr.theme.yellow};
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    transition: all .75s ease-out;

    &:hover {
        background-color: black;
        transition: all .25s ease-in;
    }
`

const About = (prop)=>{

    return(
        <StyledAbout>
            <header>
                <h2>
                    Anyone can go out and buy a cookbook these days, 
                    <br></br>
                    but you want a place to store all your 
                    <br></br>
                    secret family recipes,
                    <br></br>
                    handed down from generation to generation.
                </h2>
            </header>
            <p>The little cards grandma wrote her recipes on in her beautiful cursive are getting lost or are hard to read. You need somewhere secure to keep my recipes with me forever!</p>
            
            <ul>
                <li>
                    <button><a href="#">Learn More</a></button>
                </li>
            </ul>
        </StyledAbout>
    );
}

export default About;