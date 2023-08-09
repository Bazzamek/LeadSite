import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';

const IconButton = styled(Link)`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        height: 35px;
        width: 35px
    }
`
const CTAWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    color:white;
    font-weight: bold;
`
const PhoneCTA = () => {
    return (
        <CTAWrapper>
            <IconButton>
                <StaticImage width={25} src="../../images/phone.png" />
            </IconButton>
        </CTAWrapper>
    );
};

export default PhoneCTA;