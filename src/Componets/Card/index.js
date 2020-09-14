import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',
    colorhover: '#c96657',

    background: '#FFFFFF',
    text: '#212121',
}

const Container = styled.div `
    margin: 0 auto;
    padding: 52px 0;
`;

const StyleCard = styled.div `
    position: relative;
    width: 65%;
    height: auto;
    margin: 0px auto;
    border: 3px solid ${variable.primary};
    padding: 20px;
    margin-bottom: 20px;
    transition: all .5s;

    &:hover {
        transition: all .5s;
        border: 3px solid ${variable.colorbutton};
    }

    h3 {
        color: #3c4d4c;
    }

    img {
        width: 100%;
        transition: all .5s;
        margin: 20px 0;
    }

    .card__notice {
        color: #c5c5c5;
        text-align: left;        
    }

    .card__like i {
        position: absolute;
        left: 20px;
        bottom: 16px;
        font-size: 32px;
        color: #717171;
    }

    .card__btn {
        display: inline-block;
        background: ${variable.colorbutton};
        color: #ffff;
        border: 2px solid ${variable.colorbutton};
        border-radius: 5px;
        line-height: 0;
        font-size: 1em;
        margin: 0 1em;
        padding: 14px 16px;
        border-radius: 5px;

        &:hover {
            background-color: ${variable.colorhover};
            border: 2px solid ${variable.colorhover};
        }
    }
`;

const Card = ({ queryApi, funcMore }) => {

    return(
        <Container>
            {queryApi.map((notice, indice) => (
            <StyleCard id={notice.publishedAt} key={indice}>
                <h3 >{notice.title}</h3>
                <img className="card__image" src={notice.urlToImage} alt=""/>
                <p className="card__description">{notice.description}</p>
                <p className="card__notice">{notice.content}</p>
                <span className="card__like"><i className="fa fa-heart"></i></span>
                <a className="card__btn" target="_blank" href={notice.url}>Ver notícia</a>
            </StyleCard>
            ))}
            <Button 
                funcMore={funcMore}              
                background={variable.background} 
                color={variable.colorbutton} 
                colorHover={variable.colorhover} 
                value={"Ver mais"} 
            />
        </Container>
        )
};

export default Card;