import React from "react";

import { ButtonS } from "./style"


const Button = (props) => {
    return(
            <ButtonS
              themes={props.themes}
              onClick={ props.btnFunc}
            >
              {props.value}
            </ButtonS>
    )
};

export default Button;