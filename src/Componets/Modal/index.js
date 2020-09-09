import React from "react";
import styled from "styled-components"

const variable = {
        primary: '#00796B',
        secundary: '#607D8B',
        colorbutton: '#E91E63',

        background: '#FFFFFF',
        text: '#212121',
}

const StyleModal = styled.div `
    width: 100%;
    height: 100vh;
    padding: 65px;
    background-color: ${variable.background};
    opacity: 1;
    
    h3 {
        top: 0;
        margin: 20px 0;
        color: ${variable.text};
        }

    div {
        position: relative;
        width: 65%;
        height: 70%;
        margin: 20px auto;

        span {
            position: absolute;
            right: 0;
            display: block;
            width: 70%;
            height: 100%;
            padding: 20px 24px;
            text-align: right;
            clip-path: polygon(100% 0%, 8% 0, 48% 100%, 100% 100%);
            background-color: ${variable.secundary};
            color: #FFFFFF;
            font-weight: bold;
        }
        
        img {
            position: absolute;
            left: 0;
            width: 70%;
            height: 100%;
            transition: all .5s;
            clip-path: polygon(0 0, 58% 0, 100% 100%, 0% 100%);
        }
    }

    .modal__notice {
        color: #c5c5c5;
        text-align: left;        
    }
`;

const Modal = (props) => {
    return(
        <StyleModal >
            <h3>{props.title}</h3>
            <div>
                <span>{props.author}</span>
                <img  src={props.image} alt=""/>
            </div>
            <p>{props.description}</p>
            <p className="modal__notice">{props.content}</p>
            <a href={props.url} target="_black">Fonte</a>
        </StyleModal>
    )
};

export default Modal;