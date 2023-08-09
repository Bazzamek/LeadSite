import { styled } from "styled-components";
import React, { children } from 'react';
import { Link } from "gatsby";


const Nav = styled.nav`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`
const Anchor = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: all .3s;
    transform: scale(0.9);
    padding: 5px;
    &:hover{
        color: rgba(255,255,255,.8);
        transform: scale(1.1);
    }
`


const Navigation = () => {
    return (
        <Nav>
                <Anchor to="#home">Home</Anchor>
                <Anchor to="#about">O nas</Anchor>
                <Anchor to="#services">Usługi</Anchor>
                <Anchor to="#contact">Kontakt</Anchor>
                <Anchor to="#brief">Wypełnij brief</Anchor>

        </Nav>
    );
};

export default Navigation;