import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html,
  body {
    background-color: ${(props) => props.theme.colors.background[1]};
    font-family: ${(props) => props.theme.fontFamily.base};
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  ol, ul {
     list-style: none; 
  }
  img {
    max-width: 100%; 
}
`;

export const Container = styled.div`
  /* max-width: 1624px; */
  margin-left: 9.25rem;
  margin-right: 9.25rem;
  /* margin-top: ${(props) => props.theme.spacingStack.xxxl}; */
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    margin-left: 4.5rem;
    margin-right: 4.5rem;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    /* margin-top: ${(props) => props.theme.spacingStack.xxl}; */
  }
  @media screen and (max-width: 1024px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    /* margin-top: ${(props) => props.theme.spacingStack.xxs}; */
  }
`;

export const GridColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.5rem;
  @media screen and (max-width: 1440px) {
    grid-gap: 1rem;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
