import React, {useState} from 'react';
import Nav from './Nav';
import Hero from './Hero';
import styled from 'styled-components';


const StyledHome = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`

export default function Home(props){
    const { submitS, submitL, setUserID } = props

    // const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    // const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false)
    // const [recipeModalIsOpen, setRecipeModalIsOpen] = useState(false)


    return(
        <StyledHome>
            {/* <Hero userID={userID} /> */}
            <Hero />
            {/* <Nav setUserID={setUserID}/> */}
            <Nav submitS={submitS} submitL={submitL} setUserID={setUserID}/>
        </StyledHome>
    )
}