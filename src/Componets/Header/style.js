import styled from "styled-components";

export const HeaderS = styled.header `
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({themes}) => `${themes.primary}`};

    .theme {
        width: 4%;
    
        i {
            display: block;
            font-size: 28px;
            margin: 10px;
            color: ${({themes}) => `${themes.label}`};
        }
    }

    .filter__display {
        width: 4%;
    
        i {
            display: block;
            font-size: 28px;
            margin: 10px;
            color: ${({themes}) => `${themes.label}`};
        }
    }

    nav {
        width: 48%;

        ul {
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            
            li {
                display: inline-block;
                list-style: none;
                color: #fff;
                padding: 8px 15px;
                transition: all .5s;
                
                &:hover {
                    transition: all .5s;
                    color: ${({themes}) => `${themes.hover}`};
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
