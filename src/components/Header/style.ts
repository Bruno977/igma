import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $animate: boolean }>`
  opacity: 0;
  transform: translateY(-20px);
  transition:
    opacity 1s ease-in-out,
    transform 1s ease-in-out;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.theme.spacingStack.xxl};
  margin-right: 9.25rem;
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    margin-right: 4.5rem;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    margin-right: 2.5rem;
    > svg {
      width: 5rem;
      height: 1.75rem;
    }
  }
  @media screen and (max-width: 1024px) {
    > svg {
      width: 5rem;
      height: 1.75rem;
    }
    margin-right: 1.5rem;
  }

  ${(props) =>
    props.$animate &&
    `
    opacity: 1; 
    transform: translateY(0px);
`}
`;
