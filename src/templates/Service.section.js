import React from 'react';
import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Heading from '../components/Text/Heading';
import Slider from '../components/Slider/Slider';
import Card from '../components/Card/Card';
import { graphql, useStaticQuery } from 'gatsby';

const ServiceLayout = styled(Layout)`
    height: 50vh;
`   
const WavesContainer = styled.div`
    position: absolute;
    top: -10%;
    z-index: 1;


`
const CustomHeading = styled(Heading)`
    color:white;
    z-index: 2;
    margin-bottom: 50px;

`
const Container = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100%;
    z-index: 2;
    
`
const Service = ({data}) => {

    return (
        <ServiceLayout>
            <WavesContainer>
                <StaticImage src='../images/Wavees.svg' />
            </WavesContainer>
            <Container>
                <CustomHeading content="Czym się zajmujemy?" />
                <Slider data={data} />

            </Container>
        
        </ServiceLayout>
    );
}

export default Service;