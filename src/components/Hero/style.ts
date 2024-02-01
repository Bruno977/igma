import styled from 'styled-components';
import { Container } from '../../theme/global';

export const ContainerSection = styled(Container)`
  margin-top: ${(props) => props.theme.spacingStack.xxxl};
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    margin-top: ${(props) => props.theme.spacingStack.xxl};
  }
  @media screen and (max-width: 1024px) {
    margin-top: ${(props) => props.theme.spacingStack.xxs};
    margin-right: 0px;
  }
`;

export const ColumnImage = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  position: relative;
  img {
    height: 100%;
    object-fit: cover;
  }

  svg {
    position: absolute;
    top: 50%;
    left: -16px;
    transform: translateY(-50%);
  }
  @media screen and (max-width: 1024px) {
    grid-column: span 4;
    order: 2;
    img {
      width: 100%;
    }
  }
`;

export const ColumnDescription = styled.div`
  grid-column-start: 7;
  grid-column-end: 12;
  h1 {
    padding-top: ${(props) => props.theme.spacingStack.xl};
    padding-bottom: ${(props) => props.theme.spacingStack.md};
  }
  div {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacingInline.xxxs};
    p {
      font-size: ${(props) => props.theme.fontSize.md};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      line-height: ${(props) => props.theme.lineHeight.sm};
    }
  }
  @media screen and (max-width: 1280px) {
    h1 {
      padding-bottom: ${(props) => props.theme.spacingStack.xs};
    }
  }
  @media screen and (max-width: 1024px) {
    grid-column: span 4;
    order: 1;
    margin-right: 1.5rem;
    > p {
      padding-bottom: calc(${(props) => props.theme.spacingStack.xxl} - 1rem);
    }
  }
`;
