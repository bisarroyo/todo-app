import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
  color: #000000;
  /* transition: 0.3s all ease; */
 }
 p, input, li {
  font-size: 16px !important;
 }
 h1, h2 {
  text-align: center;
  margin-bottom: 20px;
 }
`
