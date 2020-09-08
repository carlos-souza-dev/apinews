import React from 'react';
import "./style.css";

import {Title, Image }from "../../styles";

const Card = (props) => {
    return(
        <div className="card">
            <Title>{props.title}</Title>
            <Image className="card__image" src={props.image} alt=""/>
            <p className="card__description">{props.description}</p>
            <a href={props.url}>Fonte</a>
        </div>
    )
};

export default Card;