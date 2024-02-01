import styled from 'styled-components';

type InputProps = {
  $hasError?: boolean;
};

export const InputElement = styled.input<InputProps>`
  height: 4rem;
  width: 100%;
  color: ${(props) => props.theme.colors.dark.highlight};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.lineHeight.xl};
  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.theme.colors.dark.highlight};
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;

  outline: 0;
  &::placeholder {
    color: ${(props) => props.theme.colors.dark.highlight};
  }
  &:hover {
    border-bottom-width: 3px;
  }
  &:focus,
  &:focus-visible {
    border-left: 1px solid ${(props) => props.theme.colors.primary.light};
    border-top: 1px solid ${(props) => props.theme.colors.primary.light};
    border-right: 1px solid ${(props) => props.theme.colors.primary.light};
    border-bottom-width: 3px;
  }
  &:active {
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
  &:disabled {
    border-bottom-color: ${(props) => props.theme.colors.dark.disabled};
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.dark.disabled};
    &::placeholder {
      color: ${(props) => props.theme.colors.dark.disabled};
    }
  }
  ${(props) =>
    props.$hasError &&
    ` border-bottom-color: ${props.theme.colors.error.main};`}
  &:invalid {
    border-bottom-color: ${(props) => props.theme.colors.error.main};
  }

  @media screen and (max-width: 1280px) {
    height: 3.5rem;
    font-size: ${(props) => props.theme.fontSize.xs};
  }
`;
