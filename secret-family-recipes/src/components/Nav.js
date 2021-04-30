import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'


const StyledNav = styled.nav`
    margin: 0 auto;
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items:center;
    height: 10vh;

    @media (max-width: 768px) {
        height: 50vh;
        flex-direction: column;
        align-items: center;
      }

    button {
    color: ${pr => pr.theme.lightGray};
    letter-spacing: 1px;
    height: 50px;
    width: 150px;
    margin: 10px 20px;
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

const Nav = (props)=>{
    const { submit, setUserID } = props;

    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false)



   
    return(
        <StyledNav>
            {/* prevent default and pop out the login menu for these anchor tag */}
            {/* <Link to="/user"><button>Login</button></Link> */}
        <button onClick={()=> setLoginModalIsOpen(true)}>LOGIN</button>
        <LoginModal modalIsOpen={ loginModalIsOpen } setModalIsOpen={ setLoginModalIsOpen} submit={submit} setUserID={setUserID}/>
        
        <button onClick={()=> setSignUpModalIsOpen(true)}>SIGN UP</button>
        <SignUpModal modalIsOpen={ signUpModalIsOpen } setModalIsOpen={ setSignUpModalIsOpen }/>

            {/* <Link to="/user"><button>Sing Up</button></Link> */}
        </StyledNav>
    )
}


export default Nav;