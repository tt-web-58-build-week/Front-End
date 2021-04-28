import React from "react";
import styled from 'styled-components';
import img from '../thumbs/05.jpg';
import { Link } from 'react-router-dom';

const StyledHero = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)), url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    padding: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 50vh;
        flex-direction: column;
        align-items: center;
      }

    h1 {
    font-size: 3rem;
    }
    div {
        background-color: white;
        padding: 1rem;
        width: 80%;
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
    color: white;
    height: 50px;
    width: 100px;
    margin: 20px 0;
    border-radius: 0;
    background-color: ${pr => pr.theme.green};
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


const Hero = (prop) => {
    return (
        <StyledHero>
            <ul>
                <li>Twitter</li>
                <li>GitHub</li>
                <li>Dribbble</li>
                <li>Email</li>
            </ul>
            <div>
                <h1>We are us!</h1>
                <p>And you like us! Or atleast you should and here's why...</p>
                <Link to="/about"><button>Learn More</button></Link>
            </div>
        </StyledHero>
    )
}


export default Hero; 