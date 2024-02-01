import styled from 'styled-components';
import { Container } from '../../theme/global';

export const ContainerFooter = styled(Container)`
  footer {
    margin-top: ${(props) => props.theme.spacingStack.xxxl};
    margin-bottom: ${(props) => props.theme.spacingStack.xxxl};
    padding-top: ${(props) => props.theme.spacingStack.sm};
    border-top: 1px solid #000000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: ${(props) => props.theme.fontSize.md};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      line-height: ${(props) => props.theme.lineHeight.lg};
      color: ${(props) => props.theme.colors.dark.main};
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    footer {
      margin-top: ${(props) => props.theme.spacingStack.xxl};
      margin-bottom: ${(props) => props.theme.spacingStack.xxl};
      p {
        font-size: ${(props) => props.theme.fontSize.xs};
      }
    }
  }
  @media screen and (max-width: 1280px) {
    footer {
      margin-top: ${(props) => props.theme.spacingStack.xxl};
      margin-bottom: ${(props) => props.theme.spacingStack.xxl};
      p {
        font-size: ${(props) => props.theme.fontSize.xxs};
      }
      p + p {
        padding-top: ${(props) => props.theme.spacingStack.nano};
      }
    }
  }
  @media screen and (max-width: 1024px) {
    footer {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
