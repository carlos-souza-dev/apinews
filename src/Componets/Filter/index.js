import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button'

const variable = {
    primary: '#2B303A',
    secundary: '#58A4B0',
    colorbutton: '#D64933',
    colorhover: '#c96657',

    background: '#FFFFFF',
    text: '#212121',
}

const FilterStyle = styled.div `
    width: 100%;
    height: 70px;
    line-height:70px;
    align-items: center;
    color: ${variable.background};
    background-color: #ccced4;
    display: flex;
    justify-content: center;
    align-items: center;
    
    #select {
        width: 30%;
        padding: 8px 8px;
        margin: 15px;
        border-radius: 5px;
        background-color: ${variable.background};
    }

    .filter__display {
            position: absolute;
            right: 32px;
    
        i {
            display: block;
            font-size: 28px;
            margin: 10px;
            color: ${variable.text}
        }
    }
`;

const categorys = [ 
        {
            en: "business",
            pt: "Negócios"
        },   
        {
            en: "entertainment",
            pt: "Entretenimento",
        },
        {
            en: "health",
            pt: "Saúde",
        },
        {
            en: "science",
            pt: "Ciência",
        },
        {
            en: "sports",
            pt: "Esporte",
        },
        {
            en: "technology",
            pt: "Tecnologia"
        },
]

const Filter = (props) => {

    const [ icon, setIcon ] = useState("fa fa-bars");

    const alterIcon = () => {
        setIcon(icon == "fa fa-th" ? "fa fa-bars" : "fa fa-th")
    }

    // pegando o valor do select
    const handleCategory = (e) => {
        const select = document.getElementById("select")
        var value = select.options[select.selectedIndex].value;
        props.getCategory(value)
        console.log(value)
    }

    return(
        <FilterStyle> 
            <select   id="select">
                <option value="general" selected>Geral</option>
                {categorys.map((category, indice) => (
                    <option  className="value" value={`${category.en}`}>{category.pt}</option> 
                ))}
            </select>
            <Button 
                btnFunc={handleCategory}
                background={variable.background} 
                color={variable.colorbutton} 
                colorHover={variable.colorhover} 
                value={"Filtrar"}
            />   
            <div onClick={props.getStyle} className="filter__display"><i onClick={alterIcon} className={`${icon}`}></i></div>
        </FilterStyle>
        );
};

export default Filter;