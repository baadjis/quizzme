 import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/quizzme.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-color: #272c52;
    background-image:url(${BGImage});
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-blend-mode: darken;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Fondamento', cursive;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
 
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #8c52ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #272c52);
    border: 2px solid #8c52ff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;