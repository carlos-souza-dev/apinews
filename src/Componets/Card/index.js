import React, { useEffect, useState } from "react";
import { WrapperS, CardS, ContainerS } from "./style";
import Button from "../Button";
import ImageDefault from "../../assets/image-default.jpeg"

const Card = (props) => {

    const numResponse = props.queryApi.length;
    const [ news, setNews ] = useState(numResponse < 5 ? numResponse : 5);

    useEffect( () => {
    }, [news])

    const position = (e) => {
        const windowTop = window.pageYOffset;
        return windowTop;
    }
    
    window.addEventListener("scroll", function() {
        position();
    })
    
    async function to (){
        const value = await position()
        window.scrollTo(0, value)
    }
    
    const funcMore = () => {
        if(numResponse > news + 5){
            setNews(news + 5);
            to(); 
        } else {
            setNews(news + (numResponse - news));
            to();
        }
    };
    
    if(numResponse === news){
        props.themes.display = "none";
    }

    const qtdeNews = Array.from({length:news}, (v, i) => props.queryApi[i]);
    
    return(
        <WrapperS themes={props.themes}>
            <ContainerS themes={props.themes} className={props.styleContainer ? `${props.styleContainer}` : "card--block"} >
                <span className="container__news" style={{display: `${(numResponse - news) < 1 ? "none" : "block"}`}}  >{numResponse >= 5 ? `+${numResponse - news} Notícia(s)` : numResponse }</span>
                {qtdeNews.map((notice, indice) => (
                <CardS themes={props.themes} 
                    className={`card   
                    ${props.list.indexOf(notice.publishedAt) >= 0 ? "like" : ""}
                     `}
                    id={notice.publishedAt} 
                    key={indice}>
                    <h3 className="card__title" >{
                        !props.styleContainer ? props.queryApi[2].title.length > 20 ?
                        `${notice.title.slice(0, 50) + "..."}` :
                        notice.title : 
                        notice.title}
                    </h3>
                    <div className="card__image"><img src={notice.urlToImage ? notice.urlToImage : ImageDefault} alt=""/></div>
                    <h6 className="card__description">{notice.description ? notice.description : "Sem Descrição"}</h6>
                    <p className="card__notice">{notice.content ? notice.content : "Sem notícia"}</p>
                    <span className="card__like" onClick={props.getLikes} >
                        <i id={notice.publishedAt} 
                           className={`fa fa-heart`}>
                        </i>
                    </span>
                    <a className="card__btn" rel="noopener noreferrer" target="_blank" href={notice.url}>Ver notícia</a>
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