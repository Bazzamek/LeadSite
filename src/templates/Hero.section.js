import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Heading from '../components/Text/Heading'
import { StaticImage } from 'gatsby-plugin-image';
import { isDesktop, isMobile, isTablet } from 'react-device-detect';
import Article from '../components/Text/Article';
import CTA from '../components/CTA/CTA';

const HeroLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    gap: 30px;
    position: relative;

`
    const Container = styled.div`
    margin-top: 20vh;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    scroll-behavior: none;

    gap: 20px;
    @media screen and (min-width: 1024px){
        display: grid;
        width: 80%;
        margina: auto;
        grid-template-columns: 1.5fr 1fr;
        justify-items: flex-start;
        align-items: flex-start;
        grid-template-rows: minmax(50px, max-content);
        grid-template-areas: 
        "header header"
        "heading image"
        "article image"
        "cta cta"
        ;
}
`
const BlobContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: -36%;
    z-index: 0;
`
const SecondBlob = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;

`

const Hero = ({data}) => {
    const [imageWidth, setImageWidth] = useState(300)
    
    useEffect(()=>{
        if (isMobile) return setImageWidth(400)
        if(isTablet) return setImageWidth(500)
    }, [])
    return (
        <HeroLayout>
            <BlobContainer>
                {isDesktop ? <StaticImage src="../images/Blob.svg" /> : null }
            </BlobContainer>
            <SecondBlob>
                {isDesktop ? <StaticImage src='../images/topHeroBlob.svg' /> : null }
            </SecondBlob>

            <Header />
            <Container>
                <Heading content={data.title}/>
                <div style={{gridArea: 'image'}}> 
                    <StaticImage width={500} src='../images/heroimg.png' alt="Strony Internetowe Chojnice" title="Strony Internetowe Chojnice" />
                </div>
                <Article content={data.description} />
            </Container>
            <CTA />
        </HeroLayout>
    );
};


export default Hero;