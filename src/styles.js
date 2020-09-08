import styled from "styled-components";

export const Title = styled.h3 `
    color: #3c4d4c;

`;

export const Image = styled.img`
    width: 100%;
    transition: all .5s;
    margin: 20px 0;
`;

export const Header = styled.header `
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    background-color: teal;
`;

export const Navbar = styled.nav `
    width: 50%;

    ul {
        text-align: left;
        
        li {
            display: inline-block;
            list-style: none;

            a {
                display: block;
                color: #fff;
                padding: 8px 15px;
            }
        }
    }
`;

export const Form = styled.form `
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
`;


export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: palevioletred;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
`;