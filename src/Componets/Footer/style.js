import styled from 'styled-components';

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',
    colorhover: '#c96657',

    background: '#FFFFFF',
    text: '#212121',
}

export const FooterS = styled.footer `
    z-index: 2;
    width: 100%;
    height: 50px;
    line-height:50px;
    align-items: center;
    color: ${variable.background};
    background-color: ${variable.primary};

    &.lot-text {
        position: absolute;
        bottom: 0;
    }
`;
