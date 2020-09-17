import styled from 'styled-components';

export const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',
    colorhover: '#c96657',

    background: '#FFFFFF',
    text: '#212121',
}

export const WrapperS = styled.div`
    margin-bottom: 20px;
`;

export const ContainerS = styled.div `
    margin: 0 auto;
    padding: 52px 0;

    .container__news {
        color: ${variable.secundary};
        position: fixed;
        top: 22px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
    }

    &.card--block{
        display: flex;
        flex-wrap: wrap;

        .card {
            width: 30%;
            min-width: 250px;
            padding: 8px;
            margin: 15px auto;
            transition: all 1s ease;
            display: flex;
            flex-direction: column;

            .card__title {
                display: block;
                color: #3c4d4c;
                flex-grow: 1;
            }
            
            .card__notice, .card__description {
                display: none;
            }

            .card__like i {
                font-size: 24px;
                bottom: 10px;
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
    margin: 0px auto;
    border: 3px solid ${variable.primary};
    padding: 20px;
    margin-bottom: 20px;
    transition: all 1s ease;
    border-radius: 15px;


    &:hover {
        transition: all .5s;
        border: 3px solid ${variable.colorbutton};
    }

    .card__title {
        color: #3c4d4c;
        flex-grow: 1;
    }

    img {
        width: 100%;
        transition: all .5s;
        margin: 20px 0;
    }

    .card__notice {
        color: #c5c5c5;
        text-align: left;        
    }

    .card__like i {
        position: absolute;
        left: 20px;
        bottom: 16px;
        font-size: 32px;
        color: #717171;
    }

    .card__btn {
        display: inline-block;
        background: ${variable.colorbutton};
        color: #ffff;
        border: 2px solid ${variable.colorbutton};
        border-radius: 5px;
        line-height: 0;
        font-size: 1em;
        margin: 0 1em;
        padding: 14px 16px;
        border-radius: 5px;

        &:hover {
            background-color: ${variable.colorhover};
            border: 2px solid ${variable.colorhover};
        }
    }
`;
