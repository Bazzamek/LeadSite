import React from 'react';
import { styled } from 'styled-components';

const CTAstyles = styled.button`
    width: 80%;
    height: 60px;
    border-radius: 15px 0px 15px 0px;
    font-weight: bold;
    font-size: 15px;
    color:white;
    background-color: #FA9049;
    outline: none;
    border: none;
    transition:all .2s ease ;
    grid-area: cta;
    align-self: center;
    @media screen and (min-width: 1024px) {
        width: 400px;
        height: 100px;
        border-radius: 30px 0px 30px 0px;
        cursor: pointer;
        &:hover{
            box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.25);
        }

        /* padding: 30px; */
    }

`
const CTA = ({className}) => {
    return (
        <CTAstyles className={className}>GREGOR MEDIA KREATYWNY MARKETING</CTAstyles>
        );
};

export default CTA;