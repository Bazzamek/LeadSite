import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';

const Styles = styled.div`
    width: 90%;
    background: rgba(42, 148, 254, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 20px 10px 20px;
    align-items: center;
    border-radius: 50px;
    font-size: 14px;
    height: auto;
    @media screen and (min-width: 1024px)
    {
        width: 50%;
    }

    
`
const TextContainer = styled.div`
    width: 70%;
`

const BenefitItem = ({id,name, content,icon, imgTitle, alt}) => {
    return (
        <Styles key={id}> 
            <GatsbyImage title={imgTitle} alt={alt} style={{width: '100px'}} image={icon} />
            <TextContainer>
                <h3>{name}</h3>
                <p>{content}</p>
            </TextContainer>
        </Styles>
    );
};

export default BenefitItem;