import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const StyledAbout = styled.section`
  background-color: ${pr => pr.theme.lightGray};
  margin: 0 auto;
  width: 100%;
  height: 90vh;
  padding-top: 1rem;

  div {
      width: 70%;
      max-width: 900px;
      margin: 100px auto;
  }

  h2 {
    font-family: serif;
    font-size: 7rem;
    line-height: 8rem;
    letter-spacing: 1px;
    color: ${pr => pr.theme.darkGray};
  }

  p {
    margin: 2rem 0;
    font-size: 2.25rem;
  }

  button {
    color: ${pr => pr.theme.lightGray};
    letter-spacing: 1px;
    height: 50px;
    width: 150px;
    margin: 20px auto;
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

const About = (prop)=>{

    return(
        <div>
            <Nav />
            <StyledAbout>
                <div>
                    <h2>
                    Anyone can go out and buy a cookbook these days, but you want a place to store all your secret family recipes, handed down from generation to generation.
                    </h2>
                    <p>The little cards grandma wrote her recipes on in her beautiful cursive are getting lost or are hard to read. You need somewhere secure to keep my recipes with me forever!</p>
                    <Link to="/"><button>Back</button></Link>
                </div>
        </StyledAbout>
        </div>
    );
}

export default About;