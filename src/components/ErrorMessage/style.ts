import styled from 'styled-components';

export const Message = styled.span`
  color: ${(props) => props.theme.colors.error.dark};
  font-size: ${(props) => props.theme.fontSize.xxxs};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.lineHeight.lg};
`;
