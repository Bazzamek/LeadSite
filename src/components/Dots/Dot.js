import React from 'react';
import { styled } from 'styled-components';


const DotStyles = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props=>props.active ? '#2A94FE' : '#fff' };
    border: 3px solid #2A94FE; 
    border-radius: 100%;
`
const Dot = ({click, active, id}) => {
    console.log(active)
    return (
        <DotStyles id={id} active={active} onClick={click}/>
        );
};

export default Dot;