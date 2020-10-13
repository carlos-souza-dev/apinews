import styled from 'styled-components';

export const WrapperS = styled.div`
    height: calc(100vh - 50px);
    padding-top: 60px;
    padding-bottom: 50px;
    background: ${({themes}) => `${themes.background}`};
    background-color: yellow;
    @media (max-width: 414px){
        padding-top: 0px;
    }  

    button {
        color: ${({themes}) => `${themes.background}`};
        background: ${({themes}) => `${themes.tertiary1}`};
        border: .7px solid ${({themes}) => `${themes.tertiary1}`};
        display: ${({themes}) => `${themes.display}`};
        margin: 0 auto 20px auto; 

        &:hover {
            background: ${({themes}) => `${themes.tertiary}`};
            border: .7px solid ${({themes}) => `${themes.tertiary}`};
        }
    }
`;

export const ContainerS = styled.div `
    margin: 0 auto;
    padding: 16px 0 52px 0;
    background: ${({themes}) => `${themes.background}`};
    
    @media (max-width: 414px){
        padding: 44px 0 52px 0;
    }

    @media (max-width: 768px){
        padding-bottom: 0px; 
    }  

    .container__news {
        color: ${({themes}) => `${themes.alert}`};
        position: fixed;
        top: 22px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;

        @media (max-width: 768px){
            font-size: 14px;
        }

        @media (max-width: 414px){
            display: none;
        }  
    }

    @media (min-width: 768px) {

        &.card--block{
        width: 100%;
        height: auto;
        padding: 60px 40px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 40px 40px;

        @media (max-width: 1440px){
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-template-rows: auto;
        }
        
        @media (max-width: 1024px){
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px){
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            /* grid-template-rows: repeat(3, 1fr); */
        }

        @media (max-width: 414px){
            display: flex;
        }

        .card {
            width: 100%;
            min-width: 250px;
            padding: 16px;
            margin: 0 auto;
            transition: all 1s ease;
            display: flex;
            flex-direction: column;

            @media (max-width: 1024px){
                /* max-height: 350px; */
            }

            .card__title {
                display: block;
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

    @media (max-width: 414px){
        width: 338px;
        margin: 40px auto;
        font-size: 12px;
    }  

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
        flex-grow: 1;
        color: ${({themes}) => `${themes.title}`};
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 14px;
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

        text-align: center;


    .card__btn {
        display: inline-block;
        background: ${({themes}) => `${themes.colorbutton}`};
        color: ${({themes}) => `${themes.background}`};
        border: 2px solid ${({themes}) => `${themes.colorbutton}`};
        border-radius: 5px;
        line-height: 0;
        font-size: 1em;
        align-self: center;
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
