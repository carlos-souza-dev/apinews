import React from 'react';
import styled from "styled-components"

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',
    colorhover: '#c96657',
  
    background: '#FFFFFF',
    text: '#212121',
  }
  
  
 const StyleButton = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => `${props.background}`};
    color: ${props => `${props.color}`};
    line-height: 0;
    font-size: 1em;
    margin: 0 1em;
    padding: 14px 16px;
    border: 2px solid ${variable.colorbutton};
    border-radius: 5px;

    &:hover {
      background-color: ${props => `${props.colorHover}`};
      border: 2px solid ${variable.colorhover};
      color: ${variable.background};
    }

    &:disabled {
      background-color: ${props => `${props.colorHover}`};
      border: 2px solid ${variable.colorhover};
      color: ${variable.background};
    }

    &:enabled {
      background: ${props => `${props.background}`};
      color: ${props => `${props.color}`};
    }
  `;

const Button = (props) => {
    return(
            <StyleButton
              onClick={props.btnFunc}
              background={props.background}
              color={props.color}
              colorHover={props.colorHover}
            >
              {props.value}
            </StyleButton>
    )
};

export default Button;