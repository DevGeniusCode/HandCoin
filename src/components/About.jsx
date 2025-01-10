import React from 'react';
import styled, { keyframes } from 'styled-components';

const blinkCursor = keyframes`
    50% {
        opacity: 0;
    }
`;

const Cursor = styled.span`
    display: inline-block;
    width: 15px;
    height: 25px;
    background-color: #00ff00;
    margin-left: 5px;
    animation: ${blinkCursor} 1s step-end infinite;
`;

const AboutSection = styled.section`
  text-align: center;
  position: relative;
  width: 100%;
  display: flex; 
    justify-content: center; 
`;

const AboutParagraph = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  text-shadow: 0 0 3px #00ff00;
    width: fit-content;
    max-width: 90%;
  @media (max-width: 768px) {
    white-space: pre-line;
      text-align: left;
       width: 100%;
    }

`;


const About = () => {
    return (
        <AboutSection>
            <AboutParagraph>
                They say money can’t buy love, <br className="desktop-only"/> but HANDCOIN will definitely keep your hands busy.<Cursor/>
            </AboutParagraph>
        </AboutSection>
    );
};

export default About;