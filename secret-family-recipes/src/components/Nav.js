import React,{useState} from "react";
import styled from "styled-components";
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal'
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    margin: 0 auto;
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
        height: 50vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

    button {
    color: white;
    height: 50px;
    width: 100px;
    margin: 10px 20px;
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

const Nav = (prop)=>{
    const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    return(
        <StyledNav>
            {/* prevent default and pop out the login menu for these anchor tag */}
            <Link to="/user"><button>Ex Login In</button></Link>
            <button onClick={()=> setLoginModalIsOpen(true)}>Login In</button>
            <LoginModal modalIsOpen={ loginModalIsOpen } setModalIsOpen={ setLoginModalIsOpen }/>
            
            <button onClick={()=> setSignUpModalIsOpen(true)}>Sign Up</button>
            <SignUpModal modalIsOpen={ signUpModalIsOpen } setModalIsOpen={ setSignUpModalIsOpen }/>
        </StyledNav>
    )
}


export default Nav;