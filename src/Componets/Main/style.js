import styled from 'styled-components';

export const ContainerS = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: ${({ themes }) => `${themes.background}`};
    
    .google-left {
        width: 13%;
        left: 25px;
        top: 90px;
        position: absolute;
        height: 100vh;
    }

    .google-right {
        width: 13%;
        right: 25px;
        top: 90px;
        position: absolute;
        height: 100vh;
    }

    button {
        color: ${({themes}) => `${themes.background}`};
        background: ${({themes}) => `${themes.tertiary1}`};
        border: .7px solid ${({themes}) => `${themes.tertiary1}`};
        display: ${({themes}) => `${themes.display}`};

        &:hover {
            background: ${({themes}) => `${themes.tertiary}`};
            border: .7px solid ${({themes}) => `${themes.tertiary}`};
        }
    }
`;