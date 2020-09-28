import styled from 'styled-components';

export const WrapperS = styled.div`
    padding-top: 60px;
    padding-bottom: 50px;
    background: ${({themes}) => `${themes.background}`};

    button {
        color: ${({themes}) => `${themes.background}`};
        background: ${({themes}) => `${themes.description}`};
        border: .7px solid ${({themes}) => `${themes.description}`};
        display: ${({themes}) => `${themes.display}`};
        margin: 0 auto;

        &:hover {
            background: ${({themes}) => `${themes.tertiary1}`};
            border: .7px solid ${({themes}) => `${themes.tertiary1}`};
        }
    }
`;

export const ContainerS = styled.div `
    margin: 0 auto;
    padding: 16px 0 52px 0;
    background: ${({themes}) => `${themes.background}`};

    .container__news {
        color: ${({themes}) => `${themes.alert}`};
        position: fixed;
        top: 22px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
    }

    &.card--block{
        width: 100%;
        padding: 60px 40px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 50%;
        grid-gap: 40px 40px;

        .card {
            width: 100%;
            min-width: 250px;
            padding: 16px;
            margin: 0 auto;
            transition: all 1s ease;
            display: flex;
            flex-direction: column;

            .card__title {
                display: block;
                /* flex-grow: 1; */
            }
            
            .card__notice, .card__description {
                display: none;
            }

            .card__like i {
                font-size: 24px;
                bottom: 20px;
            }

            .card__btn {
                align-self: center;
            }
        }
    }
`;

export const CardS = styled.div `
    position: relative;
    width: 65%;
    height: auto;
    margin: 72px auto;
    background: ${({themes}) => `${themes.backgroundCard}`};
    padding: 20px;
    transition: all .3s linear;
    border-radius: 14px;
    box-shadow: -14px 14px 26px ${({themes}) => `${themes.shadow}`};    

    &.like .card__like i {
            color: #bd4040;
    }

    &:hover {
        z-index: 1;
        transform: scale(1.1); 
        transition: all .3s linear;
        box-shadow: -52px 45px 50px -16px ${({themes}) => `${themes.shadow}`};

    }

    .card__title {
        color: #3c4d4c;
        flex-grow: 1;
        color: ${({themes}) => `${themes.title}`};
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

    .card__image {
        width: 100%;
        margin: 20px 0;
        position: relative;

        img {
        width: 100%;
        background-size: cover;
        transition: all .5s;
        }

        &:before {
            content: "";
            width: inherit;
            height: 99.8%;
            position: absolute;
            top: 0;
            left: 0;
            background: ${({themes}) => `${themes.opacity}`};
        }
    }

    .card__description {
        font-size: 16px;
        color: ${({themes}) => `${themes.description}`};        
    }
    
    .card__notice {
        color: #c5c5c5;
        text-align: left;
        color: ${({themes}) => `${themes.content}`};;        
    }

    .card__like i {
        position: absolute;
        left: 20px;
        bottom: 16px;
        font-size: 32px;
        color: #717171;

        &.like {
            color: #bd4040;
        }
    }

    .card__btn {
        display: inline-block;
        background: ${({themes}) => `${themes.colorbutton}`};
        color: ${({themes}) => `${themes.background}`};
        border: 2px solid ${({themes}) => `${themes.colorbutton}`};
        border-radius: 5px;
        line-height: 0;
        font-size: 1em;
        margin: 0 1em;
        padding: 14px 16px;
        border-radius: 5px;
        transition: all .7s ease;

        &:hover {
            background-color: ${({themes}) => `${themes.hover}`};
            border: 2px solid ${({themes}) => `${themes.hover}`};
            transition: all .7s ease;
        }
    }
`;
