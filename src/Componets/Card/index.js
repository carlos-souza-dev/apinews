import React from 'react';
import styled from 'styled-components';

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',

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

    .modal__notice {
        color: #c5c5c5;
        text-align: left;        
    }
`;

const Card = ({ queryApi }) => {

    return(
        queryApi.map((notice, indice) => (
        <StyleCard key={indice}>
            <h3>{notice.title}</h3>
            <img className="card__image" src={notice.urlToImage} alt=""/>
            <p className="card__description">{notice.description}</p>
            <p className="modal__notice">{notice.content}</p>
            <a href={notice.url}>Ver notícia</a>
        </StyleCard>
        ))
    )
};

export default Card;