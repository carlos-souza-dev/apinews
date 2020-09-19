import React from 'react';
import { FooterS } from './style'

const Footer = (props) => {

    return(
        <FooterS themes={props.themes} className={`${props.className}`} > ApiNews - &copy;Copyright </FooterS>
        );
};

export default Footer;