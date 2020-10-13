import styled from 'styled-components';

export const ContainerS = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100%;
    background-color: ${({ themes }) => `${themes.background}`};
    
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