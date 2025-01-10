import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  color: #aaa;
    font-size: 0.8rem;
  text-align: center;
  padding: 10px 0;
    z-index: 10;
`;

const Footer = () => {
    return (
        <FooterContainer>
            © 2025 #HandCoin. All rights reserved.
        </FooterContainer>
    );
};

export default Footer;