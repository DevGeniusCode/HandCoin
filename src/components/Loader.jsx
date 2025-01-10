import React from 'react';
import styled, { keyframes } from 'styled-components';
import AnimatedHandshake from '../components/Handshake';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const TiktokAnimate = keyframes`
    0%, 100% {
        text-shadow: -2px -2px 0 #2943d1, 2px 2px 0 #f00;
    }

    25% {
        text-shadow: 2px 2px 0 #2943d1, -2px -2px 0 #f00;
    }

    50% {
        text-shadow: 2px -2px 0 #2943d1, -2px 2px 0 #f00;
    }

    75% {
        text-shadow: -2px 2px 0 #2943d1, 2px -2px 0 #f00;
    }

    100% {
        text-shadow: 2px 2px 0 #2943d1, -2px -2px 0 #f00;
    }
`;


const LoadingText = styled.p`
    font-size: 5rem;
    color: #00ff00;
    margin-top: 20px;
    animation: ${TiktokAnimate} 1.5s ease-in-out infinite;
`;


const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    z-index: 1000;
    animation: ${fadeIn} 0.5s ease-in-out forwards;
        &.hidden {
            animation: ${fadeOut} 0.5s ease-in-out forwards;
        pointer-events: none;
        }
`;


const ImageContainer = styled.div`
  text-align: center;
  position: relative;
`;


const GifImage = styled.img`
  width: 200px;
  height: 200px;
`;

const LoaderImage = ({ gifUrl, loadingText, isLoading }) => {
    return (
        <LoaderContainer className={isLoading ? '' : 'hidden'}>
            <ImageContainer>
                <GifImage src={gifUrl} alt="Loading..." />
                <LoadingText> {loadingText}</LoadingText>
            </ImageContainer>
        </LoaderContainer>
    );
};

const Loader = ({ isLoading }) => {
    return (
        <LoaderContainer className={isLoading ? '' : 'hidden'}>
            <AnimatedHandshake/>
            <LoadingText>HANDCOIN</LoadingText>
        </LoaderContainer>
    );
};

export default Loader;