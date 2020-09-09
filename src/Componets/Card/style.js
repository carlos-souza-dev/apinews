import styled from "styled-components";

const variable = {
    primary: '#00796B',
    secundary: '#607D8B',
    colorbutton: '#E91E63',

    background: '#FFFFFF',
    text: '#212121',
}

export const StyleCard = styled.div `
    width: 65%;
    height: auto;
    margin: 0 auto;
    border: 3px solid ${variable.primary};
    padding: 20px;
    margin-bottom: 20px;
    transition: all .5s;

    &:hover {
        transition: all .5s;
        border: 3px solid ${variable.colorbutton};
    }

    h3 {
        color: #3c4d4c;
    }

    img {
        width: 100%;
        transition: all .5s;
        margin: 20px 0;
    }

    .modal__notice {
        color: #c5c5c5;
        text-align: left;        
    }
`;