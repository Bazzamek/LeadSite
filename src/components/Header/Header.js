import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';
import Burger from '../Burger/Burger';
import PhoneCTA from '../PhoneCTA/PhoneCTA';
import Sidebar from '../Sidebar/Sidebar';
import Navigation from '../Navigation/Navigation';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const HeaderStyles = styled.div`
    position: ${props=>props.position ? props.position : 'fixed'} ;
    z-index: 999;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #2A94FE;
    backdrop-filter: blur(500px);
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.5);
    overflow: hidden;
`
const Header = ({children, position, text, src, callText, logo, size, phone}) => {
    const isMobile = useMediaQuery({maxWidth: '1023px'})
    const isDesktop = useMediaQuery({minWidth: '1024px'})
    const [isOpen, setIsOpen] = useState(false);

    const handleSidebarToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <>
        {isMobile && 
        <> 
        <HeaderStyles position={position}>
            <Link to='/'>
                <StaticImage  width={100} src="../../images/Logo (4).png" alt="SIC!" title="Strony Internetowe Chojnice" />
            </Link>
            <PhoneCTA callText={callText} logo = {logo} size={size} phone={phone} />
            <Burger isOpen = {isOpen} click={handleSidebarToggle} /> 
        </HeaderStyles>
        <Sidebar open={isOpen} close={handleSidebarToggle}>
                {children}
        </Sidebar>

        </>
        }
        {isDesktop &&
        <HeaderStyles>
            <Link to='/'>
                <StaticImage  width={140} src="../../images/Logo (4).png" alt="SIC!" title="Strony Internetowe Chojnice" />
            </Link>
            <PhoneCTA callText={callText} logo = {logo} size={size} phone={phone} />
            <Navigation / >
        </HeaderStyles>}

        </>
        );
};

export default Header;