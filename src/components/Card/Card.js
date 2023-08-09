import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';

const CardWrapper = styled.div`
    padding: 10px;
    position: relative;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
    margin: 50px auto;
    transform: rotate(-45deg);
    width: 70vw;
    height: 70vw;
    transition: all .3s ;
    @media screen and (min-width: 450px) {
        width: 50vw;
        height: 50vw
    }
    `
const Button = styled(Link)`
    width: 100%;
    height: 50px;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
    color: white;
    font-size: 14px;
    font-weight: bold;
    background-color: #2A94FE;
    border-radius: 15px;
    outline: none;
    border: none;
    margin-top: 15%;
    text-decoration: none;
    text-align: center;
    


`
const RotatedContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    top: 50%;
    height: 120%;
    gap: 20px;
    text-align: center;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%) rotate(45deg);
`
const TitleStyles = styled.h3`
    width: 80%;
    text-align: center;
    font-size: 16px;
`
const Article = styled.p`
    width: 100%;
    font-size: 11px;
    text-align: center;
`
const Card = ({title, content, id, icon, button, link}) => {
    return (
        <CardWrapper id={id} key={id}r>
            <RotatedContent>
                <GatsbyImage style={{width: '60px'}} image={icon} />
                <TitleStyles>{title}</TitleStyles>
                <Article>{content}</Article>
                <Button to={link}>{button}</Button>
            </RotatedContent>
        </CardWrapper>
    );
};

export default Card;