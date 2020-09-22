import React, { useEffect, useState } from 'react';
import { WrapperS, CardS, ContainerS } from './style';
import Button from '../Button';
import ImageDefault from '../../assets/image-default.jpeg'

const Card = (props) => {

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
        console.log("Mais")
        setNews(news + 5);
        to();        
    };

    const qtdeNews = Array.from({length:news}, (v, i) => props.queryApi[i]);
    
    return(
        <WrapperS themes={props.themes}>
            <ContainerS themes={props.themes} className={props.styleContainer ? `${props.styleContainer}` : "card--block"} >
                <span className="container__news">{props.queryApi.length >= 5 ? `+${props.queryApi.length - news}` : props.queryApi.length } Notícia(s)</span>
                {qtdeNews.map((notice, indice) => (
                <CardS themes={props.themes} 
                    className="card" 
                    id={notice.publishedAt} 
                    key={indice}>
                    <h3 className="card__title" >{notice.title ? notice.title : "Sem Título"}</h3>
                    <div className="card__image"><img src={notice.urlToImage ? notice.urlToImage : ImageDefault} alt=""/></div>
                    <h6 className="card__description">{notice.description ? notice.description : "Sem Descrição"}</h6>
                    <p className="card__notice">{notice.content ? notice.content : "Sem notícia"}</p>
                    <span className="card__like"><i className="fa fa-heart"></i></span>
                    <a className="card__btn" target="_blank" href={notice.url}>Ver notícia</a>
                </CardS>
                ))}
            </ContainerS>
        <Button
            themes={props.themes}    
            btnFunc={funcMore}
            value={"Ver mais"} 
        />
        </WrapperS>
        )
};

export default Card;