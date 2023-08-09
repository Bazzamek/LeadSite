import React from 'react';
import { styled } from 'styled-components';

const HeadingStyles = styled.h1`
    font-size: 25px;
    color: #FA9049;
    font-weight: bold;
    text-align: center;
    margin: auto;
    @media screen and (min-width: 1024px){
        font-size: 45px;
        grid-area: heading;
        z-index: 2;
    }
`



const Heading = ({className, content}) => {
    return (
        <HeadingStyles className={className}>{content}</HeadingStyles>
    );
};

export default Heading;