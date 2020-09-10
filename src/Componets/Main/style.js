import styled from "styled-components";

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',

    background: '#FFFFFF',
    text: '#212121',
}

export const Header = styled.header `
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    background-color: ${variable.primary};

    nav {
        width: 50%;

        ul {
            text-align: left;
            
            li {
                display: inline-block;
                list-style: none;
                color: #fff;
                padding: 8px 15px;
                transition: all .5s;
                
                &:hover {
                    transition: all .5s;
                    color: ${variable.colorbutton};
                }
            }
        }
    }

    span {
        color: ${variable.secundary};
    }

    form {
        width: 50%;
        text-align: right;

        input {
            width: 30%;
            padding: 5px;
            margin: 0;
            border: 0;
            border-radius: 5px;
        }
    }
`;
