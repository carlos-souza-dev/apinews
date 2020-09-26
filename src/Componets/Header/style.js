import styled from "styled-components";

export const HeaderS = styled.header `
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({themes}) => `${themes.primary}`};

    nav {
        width: 46%;

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
        width: 46%;
        text-align: right;

        input {
            width: 30%;
            padding: 8px 8px;
            margin: 0;
            border: 0;
            border-radius: 5px;
            background: ${({themes}) => `${themes.backgroundCard}`};
            color: ${({themes}) => `${themes.label}`};
        }
    }

    .theme {
        width: 4%;

        img {
            margin: auto 0;
            width: 50%;
            height: 50%;
            background-size: cover;
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
`;
