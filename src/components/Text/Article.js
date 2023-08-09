import React from 'react';
import { styled } from 'styled-components';


const ArticleStyles = styled.p`
    font-size: 15px;
    font-weight: 400;
    line-height: 35px;
    text-align: center;
    margin: auto;
    color: #333;
    width: 80%;
    grid-area: article;
    @media screen  and (min-width: 1024px){
        font-size: 22px;
        z-index: 2;

    }


`

const Article = ({className, content}) => {
    return (
        <ArticleStyles className={className}>{content}</ArticleStyles>
    );
};

export default Article;