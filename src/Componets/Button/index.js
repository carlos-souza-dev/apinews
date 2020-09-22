import React from 'react';

import { ButtonS } from './style'


const Button = (props) => {
  console.log(props)
    return(
            <ButtonS
              themes={props.themes}
              onClick={props.btnFunc}
            >
              {props.value}
            </ButtonS>
    )
};

export default Button;