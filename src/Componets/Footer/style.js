import styled from 'styled-components';

export const FooterS = styled.footer `
    z-index: 2;
    width: 100%;
    height: 50px;
    line-height:50px;
    text-align: center;
    color: ${({themes}) => `${themes.label}`};
    background-color: ${({themes}) => `${themes.primary}`};

    &.lot-text {
        position: absolute;
        bottom: 0;
    }
`;
