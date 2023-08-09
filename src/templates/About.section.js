import React, { useState } from 'react';
import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Text/Heading';
import Article from '../components/Text/Article';
import { StaticImage } from 'gatsby-plugin-image';
import CTA from '../components/CTA/CTA';

const AboutLayout = styled(Layout)`
    gap: 20px;
    @media screen and (min-width: 1024px) {
        display: grid;
        width: 100%;
        margin: auto;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        position: relative;
        gap: 50px;
        grid-template-areas: 
        "img heading"
        "img article"
        "cta cta"
        
        ;
    }
`
const ArticleStyled = styled(Article)`
    text-align: left;
    font-size: 20px;
`


const About = ({data}) => {

    return (
        <AboutLayout>
            <Heading content = {data.title}/>
            <ArticleStyled content={data.description} />
            <StaticImage style={{gridArea: 'img'}}src="../images/wpabout.svg" />
            <CTA  />
        </AboutLayout>
    );
};


export default About;