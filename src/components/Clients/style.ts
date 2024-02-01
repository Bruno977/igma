import styled from 'styled-components';
import { Container } from '../../theme/global';

export const ContainerSection = styled(Container)`
  margin-top: 6.125rem;
  margin-bottom: 6.125rem;
  @media screen and (max-width: 1280px) {
    margin-top: ${(props) => props.theme.spacingStack.xxl};
    margin-bottom: ${(props) => props.theme.spacingStack.xxl};
  }
`;

export const ContainerDescription = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  align-self: center;

  @media screen and (max-width: 1024px) {
    grid-column: span 4;
    padding-bottom: calc(${(props) => props.theme.spacingStack.sm} - 1rem);
  }
`;

export const ContainerImages = styled.div`
  grid-column-start: 6;
  grid-column-end: 13;

  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    svg {
      width: 210px;
      height: 153px;
    }
  }
  @media screen and (max-width: 1280px) {
    svg {
      width: 170px;
      height: 124px;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-column: span 4;
  }
`;
