import React from 'react';
import { styled } from 'styled-components';

const StyledLayout = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    overflow: hidden;

`
const Layout = ({className, children}) => {
    return (
        <StyledLayout className={className}>
            {children}
        </StyledLayout>
    );
};

export default Layout;