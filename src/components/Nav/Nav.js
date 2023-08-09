import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import { styled } from 'styled-components';

const NavStyles = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    gap: 20px;
    @media screen and (max-width: 768px){
        position: fixed;
        z-index: 100;
        width: 300px;
        height: 200vh;
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: first baseline;
        backdrop-filter: blur(300px);
    
    }
    
`
export const Anchor = styled(Link)`
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
const Nav = () => {
    return (
        <AnimatePresence>
            <NavStyles key="sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
                <Anchor to="#home">Home</Anchor>
                <Anchor to="#about">O nas</Anchor>
                <Anchor to="#services">Usługi</Anchor>
                <Anchor to="#contact">Kontakt</Anchor>
                <Anchor to="#brief">Wypełnij brief</Anchor>
            </NavStyles>
        </AnimatePresence>
    );
};


export default Nav;