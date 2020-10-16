import styled from "styled-components";

export const HeaderS = styled.header `
    width: 100%;
    height: 63px;
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    background-color: ${({themes}) => `${themes.primary}`};

    

    .menu {
        display: none;
    }

    @media (max-width: 414px){
        position: fixed;
        z-index: 3;

        .menu {
        display: block;
        width: 100px;
        height: 63px;
        display: flex;
        justify-content: center;
        align-items: center;

        .menu__hamburger-is {
            position: absolute;
            width: 10%;
            height: 3px;
            background-color: white;
            transform:  ${({menu}) => menu ? `scaleX(0)` : `scaleX(1)`};
            transition: all .5s;
        }
            .menu__hamburger {
                position: relative;
                width: 50%;
                height: 3px;
                background-color: ${({themes}) => `${themes.primary}`};
                scale:  ${({menu}) => menu ? `0` : `1`};
            
                &:before {
                    content: '';
                    width: 100%;
                    height: 3px;
                    position: absolute;
                    top: -12px;
                    background-color: white;
                    transform:  ${({menu}) => menu ? `rotateZ(45deg)` : `rotateZ(0)`}; 
                    top:  ${({menu}) => menu ? `0px` : `-12px`}; 
                    transition: all .5s;
                }

                &:after {
                    content: '';
                    width: 100%;
                    height: 3px;
                    position: absolute;
                    top: 12px;
                    background-color: white;
                    transform:  ${({menu}) => menu ? `rotateZ(-45deg)` : `rotateZ(0)`}; 
                    top:  ${({menu}) => menu ? `0px` : `12px`}; 
                    transition: all .5s;
                }
            }
        }
    }

    .menu__nav {
        width: 46%;
        height: 63px;

        @media (max-width: 414px) {
            width: 0;
        }
        
        ul {
            text-align: left;
            font-family: 'Montserrat', sans-serif;

        @media (max-width: 414px){
            position: absolute;
            top: 48px;
            left: 0;
            padding: 0;
            width: 100%;
            transform: translateY(0);
            z-index: -1;
            transition: all .5s;
            transform: ${({menu}) => menu ? `translateY(0%)` : `translateY(-100%)`};
        }
            
            li {
                display: inline-block;
                list-style: none;
                color: #fff;
                padding: 8px 15px;
                transition: all .5s;

                @media (max-width: 1024px){
                    padding: 8px 12px;
                }

                @media (max-width: 768px){
                    padding: 8px 5px;
                    font-size: 14px;
                }
                
                &:hover {
                    transition: all .5s;
                    color: ${({themes}) => `${themes.hover}`};
                }  

                @media (max-width: 414px){
                    display: block;
                    background-color: red;
                    text-align: center;
                    background-color: ${({themes}) => `${themes.primary}`};
                    color:  ${({themes, menu}) => menu ?  `white` : `${themes.primary}`};
                }          
            }
        }
    }

    .from-search {
        width: 46%;
        height: 100%;
        background-color: ${({themes}) => `${themes.primary}`};
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        input {
            width: 30%;
            padding: 8px 8px;
            margin: 0;
            border: 0;
            border-radius: 5px;
            background: ${({themes}) => `${themes.backgroundCard}`};
            color: ${({themes}) => `${themes.label}`};

        }

        button {
            display: block;
        }

        @media (max-width: 1024px){
            width: 44%;
        }

        @media (max-width: 414px){
            width: 100%;
            display: flex;

            input {
                width: 100%;
            }
        }  
    }

    .theme {
        width: 4%;

        img {
            margin: auto 0;
            width: 50%;
            height: 50%;
            background-size: cover;
        }

        @media (max-width: 414px){
            display: none;
        }

    }

    .filter__display {
        width: 4%;
    
        i {
            display: block;
            font-size: 28px;
            margin: 10px;
            color: ${({themes}) => `${themes.label}`};
        }

        @media (max-width: 1024px){
            width: 6%;
        }

        @media (max-width: 414px){
            display: none;
        }
    }

`;
