import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import styled from 'styled-components';


const StyledHome = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`

export default function Home(){
    return(
        <StyledHome>
            <Hero />
            <Nav />
        </StyledHome>
    )
}