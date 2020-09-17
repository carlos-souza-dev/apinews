import styled from "styled-components";

export const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',

    background: '#FFFFFF',
    text: '#212121',
}

export const HeaderS = styled.header `
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${variable.primary};

    .filter__display {
        width: 4%;
    
        i {
            display: block;
            font-size: 28px;
            margin: 10px;
            color: ${variable.background}
        }
    }

    nav {
        width: 48%;

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

    form {
        width: 48%;
        text-align: right;

        input {
            width: 30%;
            padding: 8px 8px;
            margin: 0;
            border: 0;
            border-radius: 5px;
        }
    }
`;
