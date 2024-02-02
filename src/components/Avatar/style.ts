import styled from 'styled-components';

export const Button = styled.button`
  height: 3rem;
  width: 3rem;
  border: ${(props) => props.theme.borderWidth.thin} solid transparent;
  background-color: ${(props) => props.theme.colors.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.pill};
  cursor: pointer;

  transition-delay: 0s;
  transition-timing-function: linear;
  transition-duration: 2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.light};
    transition-delay: 0s;
    transition-timing-function: linear;
    transition-duration: 0s;
  }
  &:active {
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.contrast};
    background-color: ${(props) => props.theme.colors.primary.light};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.dark.disabled};
    cursor: not-allowed;
    svg path {
      fill: ${(props) => props.theme.colors.dark.secondary};
    }
  }
  @media screen and (max-width: 1280px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
