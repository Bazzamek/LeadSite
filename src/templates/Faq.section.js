import React from 'react';
import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Text/Heading';
import Accordion from '../components/Accordion/Accordion';

const FaqLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    gap: 50px;
    /* background-color: red; */

`
const CustomHeading = styled(Heading)`
    color: #333;
`
const AccordionContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`
const Faq = ({data}) => {
    console.log(data)
    return (
        <FaqLayout>
            <CustomHeading content="Najczęstsze pytania" />
            <AccordionContainer>
            {data.faq.map(el=>{
                const {question, id, answer} = el;
                return(<Accordion question={question} id={id} key={id} answer={answer} />)
            })}
            </AccordionContainer>
        </FaqLayout>
    );
};


export default Faq;