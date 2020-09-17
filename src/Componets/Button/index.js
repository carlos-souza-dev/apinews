import React from 'react';
import styled from "styled-components"

import { ButtonS } from './style'


const Button = (props) => {
    return(
            <ButtonS
              onClick={props.btnFunc}
              background={props.background}
              color={props.color}
              colorHover={props.colorHover}
            >
              {props.value}
            </ButtonS>
    )
};

export default Button;