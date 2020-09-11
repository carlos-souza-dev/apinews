import React from 'react';
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

const StyleCard = styled.div `
    width: 65%;
    height: auto;
    margin: 0 auto;
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

    .card__button {
        background: ${variable.colorbutton};
        color: #ffff;
    
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid ${variable.colorbutton};
        border-radius: 5px;

        &:hover {
            background-color: ${variable.colorhover};
            border: 2px solid ${variable.colorhover};
        }
    }
`;

const Card = ({ queryApi }) => {

    return(
        <div>
        {queryApi.map((notice, indice) => (
        <StyleCard key={indice}>
            <h3>{notice.title}</h3>
            <img className="card__image" src={notice.urlToImage} alt=""/>
            <p className="card__description">{notice.description}</p>
            <p className="card__notice">{notice.content}</p>
            <a className="card__button" target="_blank" href={notice.url}>Ver notícia</a>
        </StyleCard>
        ))}
        <Button color='black' value={"Ver mais"} />
        </div>
    )
};

export default Card;