import React from 'react';
import styled from 'styled-components';

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',
    colorhover: '#c96657',

    background: '#FFFFFF',
    text: '#212121',
}

const FooterStyle = styled.footer `
    position: static;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 50px;
    line-height:50px;
    align-items: center;
    color: ${variable.background};
    background-color: ${variable.primary};
`;

const Footer = () => {

    return(
        <FooterStyle> ApiNews - &copy;Copyright </FooterStyle>
        );
};

export default Footer;