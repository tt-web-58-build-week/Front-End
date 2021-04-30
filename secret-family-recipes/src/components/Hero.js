import React from "react";
import styled from 'styled-components';
import img from '../thumbs/07.jpg';
import { Link } from 'react-router-dom';

const StyledHero = styled.section`
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 90vh;
    padding: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
        height: 50vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    
    span {
        color: ${pr => pr.theme.brown};
    }

    h1, p {
        color: ${pr => pr.theme.lightGray};
        margin-bottom: 2rem;
    }

    p {
        font-size: 2.25rem;
        color: ${pr => pr.theme.lightGray};
    }

    h1 {
    font-size: 6rem;
    font-family: 'Lobster', cursive;
    color: ${pr => pr.theme.green};
    line-height: 6rem;
    }

    div {
        background-color: ${pr => pr.theme.darkGreen};
        border-radius: 0 150px 0px 150px;
        padding: 3rem 6rem 5rem 6rem;
        width: 80%;
        max-width: 1000px;
        height: 40%;
        margin-top: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        @media (max-width: 768px) {
            height: 70%;
            width: 90%;
            margin-top: 10px;
          }
    }

    ul {
        display: flex;
        justify-content: flex-end;
        width: 80%;
        list-style-type: none;
      }
    
    li {
        margin-left: 10px;
        cursor: pointer;

        &:hover {
            color: ${pr => pr.theme.green};
            transition: all .25s ease-in;
            text-shadow: 0px 0px 10px rgba(100,100,100,0.5);
        }
    }

    div button {
        color: ${pr => pr.theme.darkGray};
        letter-spacing: 1px;
        height: 50px;
        width: 150px;
        margin: 10px 20px;
        border-radius: 0;
        background-color: ${pr => pr.theme.green};
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        transition: all .5s ease-out;
    
        &:hover {
            background-color: ${pr => pr.theme.darkGreen};
            border: 3px solid ${pr => pr.theme.green};
            color: ${pr => pr.theme.lightGray};
            transition: all .1s ease-in;
        }
`

const Hero = (prop) => {
    return (
        <StyledHero>
            <div>
                <h1>Secret Family Recipes<span>.com</span></h1>
                <p>Find that exquisite dish to wow all your friends while keeping your history and traditions safe and alive with Secret Family Recipe.com</p>
                <Link to="/about"><button>LEARN MORE</button></Link>
            </div>
        </StyledHero>
    )
}


export default Hero; 