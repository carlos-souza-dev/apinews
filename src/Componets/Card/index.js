import React, { useEffect, useState } from 'react';
import { WrapperS, CardS, ContainerS, variable } from './style';
import Button from '../Button';
import ImageDefault from '../../assets/image-default.jpeg'

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

    const qtdeNews = Array.from({length:5}, (v, i) => queryApi[i]);

    return(
        <WrapperS>
        <ContainerS className={styleContainer ? `${styleContainer}` : "card--block"}>
            <span className="container__news">{queryApi.length >= 5 ? `+${queryApi.length - news}` : queryApi.length } Notícia(s)</span>
            {qtdeNews.map((notice, indice) => (
            <CardS className="card" id={notice.publishedAt} key={indice}>
                <h3 className="card__title" >{notice.title ? notice.title : "Sem Título"}</h3>
                <img className="card__image" src={notice.urlToImage ? notice.urlToImage : ImageDefault} alt=""/>
                <p className="card__description">{notice.description ? notice.description : "Sem Descrição"}</p>
                <p className="card__notice">{notice.content ? notice.content : "Sem notícia"}</p>
                <span className="card__like"><i className="fa fa-heart"></i></span>
                <a className="card__btn" target="_blank" href={notice.url}>Ver notícia</a>
            </CardS>
            ))}
        </ContainerS>
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