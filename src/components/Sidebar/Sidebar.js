import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Anchor } from '../Nav/Nav';

const SidebarContainer = styled.div`
  background-color: #4275CC;
  color: #fff;
  width: 250px;
  height: 100vh;
  position: fixed;
  z-index: 999;
  gap: 50px;

  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  transition: right  0.3s ease-in-out;
`;
const CloseButton = styled.button`
    margin: 20px;
    font-size: 30px;    
    background-color: transparent;
    border: none;
    border-radius: 100%;
    /* padding: 10px; */
    width: 50px;
    height: 50px;
    color: #fff;
    border: 2px solid transparent;
    &:hover{
        color: #1128A1;
        background-color: #fff;
        /* border: 2px solid white; */
        cursor: pointer;
        transition: .5s ease all;
    }
`
const LinkWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
// Komponent Sidebar
const Sidebar = ({open, close}) => {

  return (
    <>
      <SidebarContainer isOpen={open}>
        <CloseButton onClick={close}>X</CloseButton>
        <LinkWrapper>
                <Anchor to="#home">Home</Anchor>
                <Anchor to="#about">O nas</Anchor>
                <Anchor to="#services">Usługi</Anchor>
                <Anchor to="#contact">Kontakt</Anchor>
                <Anchor to="#brief">Wypełnij brief</Anchor>

        </LinkWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;