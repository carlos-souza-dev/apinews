import styled from 'styled-components'
  
export const ButtonS = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${({themes}) => `${themes.colorbutton}`};
    color: ${({themes}) => `${themes.background}`};
    line-height: 0;
    font-size: 1em;
    margin: 0 1em;
    padding: 14px 16px;
    border: 2px solid ${({themes}) => `${themes.colorbutton}`};
    border-radius: 5px;
    transition: all .7s ease;

    &:hover {
      background-color: ${({themes}) => `${themes.hover}`};
      border: 2px solid ${({themes}) => `${themes.hover}`};
      transition: all .7s ease;
    }
  `;