import styled from "styled-components";

export const Header = styled.header `
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    background-color: teal;

    nav {
        width: 50%;

        ul {
            text-align: left;
            
            li {
                display: inline-block;
                list-style: none;
                color: #fff;
                padding: 8px 15px;
            }
        }
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

            &:focus {
                border: 3px solid green;
            }
        }
    }
`;
