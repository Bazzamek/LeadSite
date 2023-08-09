import React from 'react';
import { styled } from 'styled-components';

const BurgerButton = styled.button`
  display: block;
  background-color: transparent;
  color: #fff;
  font-size: 40px;
  border: none;
  padding: 12px;
  cursor: pointer;
`;

const Burger = ({click, isOpen}) => {
    return (
        <BurgerButton onClick={click}>
             ☰
        </BurgerButton>

    );
};

export default Burger;