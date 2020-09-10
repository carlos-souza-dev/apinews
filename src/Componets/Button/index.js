import React from 'react';
import styled from "styled-components"

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',
  
    background: '#FFFFFF',
    text: '#212121',
  }
  
  
 const StyleButton = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${variable.colorbutton};
    color: #ffff;
  
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${variable.colorbutton};
    border-radius: 5px;
  `;

const Button = () => {
    return(
            <StyleButton>
                Pesquisar
            </StyleButton>
    )
};

export default Button;