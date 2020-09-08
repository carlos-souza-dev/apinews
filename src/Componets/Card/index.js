import React from 'react';
import { StyleCard } from "./style";

const Card = (props) => {
    return(
        <StyleCard className="card">
            <h3>{props.title}</h3>
            <img className="card__image" src={props.image} alt=""/>
            <p className="card__description">{props.description}</p>
            <a href={props.url}>Fonte</a>
        </StyleCard>
    )
};

export default Card;