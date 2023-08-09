import { AnimatePresence, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const AccordionStyles = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    /* background-color: #2A94FE; */
    background-color: #5292FF;
    padding: 40px 8px 40px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.05);
    transition: all .3s;
    &:hover{
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
        transform: scale(1.05);
    }
`
const QuestionStyles = styled.h4`
    width: 95%;
    text-align: left;
    color: white;
    font-weight: bold;
    /* border-radius: 20px; */
`
const Arrow = styled(motion.div)`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color:white;
`
const AnswersStyles = styled(motion.div)`
        width: 90%;
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 10px;
        text-align: center;
        background-color: #5292FF;
        color: white;
        font-weight: medium;
`
const Accordion = ({key, id,question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
    <AccordionStyles key={key} id={id} onClick={()=>setIsOpen(!isOpen)}>
            <QuestionStyles>{question}</QuestionStyles>
            <Arrow
                 animate={{ rotate: isOpen ? 180 : 0 }}
                 transition={{ duration: 0.3 }}>
                
                <StaticImage src='../../images/icons/arrow.svg'/>
            </Arrow>
        </AccordionStyles>
            {isOpen && (
                <AnimatePresence>

                <AnswersStyles key="1"
                    initial={{ height: 'auto', opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 'auto',  opacity: 0 }} 
                    transition={{ duration: 0.7 }}>
                    <p>
                        {answer}
                    </p>
                </AnswersStyles>
            </AnimatePresence>

            )}
        </>
    );
};

export default Accordion;