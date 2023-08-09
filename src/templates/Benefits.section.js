import React from 'react';
import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Text/Heading';
import Article from '../components/Text/Article';
import BenefitItem from '../components/BenefitItem';
import CTA from '../components/CTA/CTA'
import { graphql, useStaticQuery } from 'gatsby';
import { isDesktop } from 'react-device-detect';
import { StaticImage } from 'gatsby-plugin-image';

const BenefitsLayout = styled(Layout)`
    gap:20px;
    @media screen and (min-width: 1024px){
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        width: 80%;
        margin: auto;
        align-items: center;
        justify-content: center;
        align-self: center;
        grid-template-areas:
        "heading heading"
        "article article"
        "benefits image"
        ;
    }
`
const ArticleStyled = styled(Article)`
    line-height: 20px;
`
const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    gap: 20px;
    grid-area: benefits;

`
const Benefits = ({data}) => {
console.log(data)
    return (
        <BenefitsLayout>
            <Heading content={data.title}/>
            <ArticleStyled content={data.description} />
            <BenefitsContainer>
                {data.benefits.map((benefit, index)=>{
                    const {content, icon, title, imgTitle, alt} = benefit;
                    return (<BenefitItem icon={icon.childImageSharp.gatsbyImageData} id={index} content={content} name={title} imgTitle={imgTitle} alt={alt}/>
                    )
                })}
            </BenefitsContainer>
            {isDesktop ? <StaticImage style={{gridArea: 'image'}}src='../images/secondaboutimage.svg'/> : null}
            <CTA />
        </BenefitsLayout>
    );
};


export default Benefits;