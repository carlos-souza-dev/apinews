import React from 'react';
import { StyleCard } from "./style";

const Card = (props) => {



    return(
        <StyleCard >
            <h3>{props.title}</h3>
            <img className="card__image" src={props.image} alt=""/>
            <p className="card__description">{props.description}</p>
            <p className="modal__notice">{props.content}</p>
            <a href={props.url}>Ver notícia</a>
        </StyleCard>
    )
};

export default Card;