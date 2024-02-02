import styled from 'styled-components';
import { Container } from '../../theme/global';

export const ContainerSection = styled(Container)`
  @media screen and (max-width: 1024px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const ColumnNewsletter = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;

  p {
    &:first-of-type {
      font-size: ${(props) => props.theme.fontSize.xs};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      line-height: ${(props) => props.theme.lineHeight.sm};
      color: ${(props) => props.theme.colors.dark.main};
    }
    &:last-of-type {
      padding-top: ${(props) => props.theme.spacingStack.md};
      padding-bottom: ${(props) => props.theme.spacingStack.md};
    }
  }
  form {
    input + input {
      margin-top: ${(props) => props.theme.spacingStack.xxs};
    }
    button {
      margin-top: ${(props) => props.theme.spacingStack.lg};
    }
  }
  @media screen and (max-width: 1024px) {
    grid-column: span 4;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export const ColumnSlide = styled.div`
  grid-column-start: 6;
  grid-column-end: 13;
  @media screen and (max-width: 1024px) {
    grid-column: span 4;
    margin-top: calc(${(props) => props.theme.spacingStack.xxl} - 1rem);
  }
`;
