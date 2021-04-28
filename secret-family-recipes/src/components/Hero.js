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
    padding: 3rem;

    h1 {
    font-size: 3rem;
    }
    div {
        background-color: white;
        padding: 1rem;
    }

    div button {
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


export default function Hero(prop){
    return (
        <StyledHero> {/*Background img here*/}
            <ul class="icons">
                <li><i class="fab fa-twitter"></i></li>
                <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
                <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
                <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
            </ul>
            <div>
                <h1>We are us!</h1>
                <p>And you like us! Or atleast you should and here's why...</p>
                <Link to="/about"><button>Learn More</button></Link>
            </div>
        </StyledHero>
    )
}


