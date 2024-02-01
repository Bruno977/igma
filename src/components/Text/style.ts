import styled from 'styled-components';
import { TextProps } from '../../@types/text';

export const TitleElement = styled.div<TextProps>`
  ${(props) =>
    props.as === 'h1' &&
    `
    font-size: ${props.theme.fontSize.xxl};
    font-weight: ${props.theme.fontWeight.semibold};
    line-height: ${props.theme.lineHeight.sm};
    color: ${props.theme.colors.dark.highlight};
  `};
  ${(props) =>
    props.as === 'p' &&
    `
    color: ${props.theme.colors.dark.main};
    font-size: ${props.theme.fontSize.lg};
    font-weight: ${props.theme.fontWeight.semibold};
    line-height: ${props.theme.lineHeight.lg};
  `};
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    ${(props) =>
      props.as === 'h1' &&
      `
        font-size: ${props.theme.fontSize.xl};
      `};
    ${(props) =>
      props.as === 'p' &&
      `
        font-size: ${props.theme.fontSize.md};
      `};
  }
  @media screen and (max-width: 1280px) {
    ${(props) =>
      props.as === 'h1' &&
      `
        font-size: ${props.theme.fontSize.lg};
      `};
    ${(props) =>
      props.as === 'p' &&
      `
        font-size: ${props.theme.fontSize.xs};
      `};
  }
`;
