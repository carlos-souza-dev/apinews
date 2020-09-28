import React from 'react';
import { MainS } from '../Main/style'

function Main (props) {
    return(
        <>
        <MainS themes={props.themes}/>
        {props.children}
        </>
    );
}

export default Main;

// import React from 'react';
// import "./container.css";

// function Container (props) {
//     return (<section className="container">{props.children}</section>);
// }

// export default Container;