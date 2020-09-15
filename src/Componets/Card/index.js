import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',
    colorhover: '#c96657',

    background: '#FFFFFF',
    text: '#212121',
}

const WrapperS = styled.div`
   margin-bottom: 20px;
`;

const Container = styled.div `
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

const StyleCard = styled.div `
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

const Card = ({ queryApi, styleContainer }) => {

    const [ news, setNews ] = useState(5);
    
    useEffect( () => {
    }, [news])

    const position = (e) => {
        const windowTop = window.pageYOffset;
        return windowTop;
    }
    
    window.addEventListener('scroll', function() {
        position();
    })
    
    const to = () => {
        const value = position()
        setTimeout(() => {
                window.scrollTo(0, value)
        }, 1);
    }
    
    const funcMore = () => {
        setNews(news + 5);
        to();        
    };

    const qtdeNews = Array.from({length:news}, (v, i) => queryApi[i]);

    return(
        <WrapperS>
        <Container className={styleContainer ? `${styleContainer}` : "card--block"}>
        <span className="container__news">{queryApi.length >= 5 ? `+${queryApi.length - news}` : queryApi.length } Notícia(s)</span>
            {qtdeNews.map((notice, indice) => (
            <StyleCard className="card" id={notice.publishedAt} key={indice}>
                <h3 className="card__title" >{notice.title}</h3>
                <img className="card__image" src={notice.urlToImage} alt=""/>
                <p className="card__description">{notice.description}</p>
                <p className="card__notice">{notice.content}</p>
                <span className="card__like"><i className="fa fa-heart"></i></span>
                <a className="card__btn" target="_blank" href={notice.url}>Ver notícia</a>
            </StyleCard>
            ))}
        </Container>
        <Button    
            btnFunc={funcMore}
            background={variable.background} 
            color={variable.colorbutton} 
            colorHover={variable.colorhover} 
            value={"Ver mais"} 
        />
        </WrapperS>
        )
};

export default Card;