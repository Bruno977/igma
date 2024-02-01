import styled from 'styled-components';

export const ButtonElement = styled.button`
  height: 3.5rem;
  min-width: 10rem;
  color: ${(props) => props.theme.colors.light.contrast};
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  line-height: ${(props) => props.theme.lineHeight.lg};
  padding: 0rem ${(props) => props.theme.spacingInline.md};
  border-radius: ${(props) => props.theme.borderRadius.none};
  background-color: ${(props) => props.theme.colors.dark.highlight};
  border: ${(props) => props.theme.borderWidth.thin} solid transparent;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.dark.main};
  }
  &:focus,
  &:focus-within,
  &:focus-visible {
    border-color: ${(props) => props.theme.colors.primary.main};
    background-color: ${(props) => props.theme.colors.dark.main};
  }
  &:target {
    color: ${(props) => props.theme.colors.light.secondary};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.dark.disabled};
    color: ${(props) => props.theme.colors.light.secondary};
    cursor: not-allowed;
  }

  @media screen and (max-width: 1280px) {
    height: 3rem;
    min-width: 7.5rem;
    font-size: ${(props) => props.theme.fontSize.xxs};
    padding: 0rem ${(props) => props.theme.spacingInline.sm};
  }
`;
