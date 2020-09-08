import styled from "styled-components";

export const StyleCard = styled.div `
    width: 65%;
    height: auto;
    margin: 0 auto;
    border: 3px solid rgb(44, 144, 226);
    padding: 20px;
    margin-bottom: 20px;
    transition: all .5s;

    &:hover {
        transition: all .5s;
        border: 3px solid rgb(10, 77, 133);
    }

    h3 {
        color: #3c4d4c;
    }

    img {
        width: 100%;
        transition: all .5s;
        margin: 20px 0;
    }
`;