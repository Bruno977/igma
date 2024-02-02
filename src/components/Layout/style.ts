import styled from 'styled-components';

export const Main = styled.main<{ $animate: boolean }>`
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 2s ease-in-out,
    transform 1s ease-in-out;
  ${(props) =>
    props.$animate &&
    `
    opacity: 1; 
    transform: translateY(0px);
`}
`;
