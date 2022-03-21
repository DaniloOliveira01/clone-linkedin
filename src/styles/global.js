import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
  overflow-y: scroll;
  overflow-x: hidden;
}

:root,
body,
html {
  background-color: #f5f5f5;
  box-sizing: border-box;
}

div,
h1,
h2,
h3,
h4,
h5,
h6,
header,
html,
i,
img,
label,
li,
nav,
p,
small,
span,
ul {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  font-family: Arial, sans-serif;
}
`;