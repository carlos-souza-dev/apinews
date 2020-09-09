import styled from "styled-components";

const variable = {
  primary: '#00796B',
  secundary: '#607D8B',
  colorbutton: '#E91E63',

  background: '#FFFFFF',
  text: '#212121',
}


export const StyleButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: ${variable.colorbutton};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${variable.colorbutton};
  border-radius: 5px;
`;