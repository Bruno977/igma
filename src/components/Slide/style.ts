import styled from 'styled-components';

// Desktop Slide
export const Slides = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-direction: row;
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    gap: 1.5rem;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    gap: 1.25rem;
  }
`;
export const SlideContainer = styled.div`
  overflow: hidden;
  height: 900px;
  flex: 1;
`;
export const SlideWrapper = styled.div<{ time: number }>`
  animation: scroll ${(props) => props.time}s linear infinite;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  height: calc((406px * 6) + (2.5rem * 5));
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(calc(-406px * 3 + -2.5rem * 3));
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    gap: 1.5rem;
    height: calc((339px * 6) + (1.5rem * 5));
    @keyframes scroll {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(calc(-339px * 3 + -1.5rem * 3));
      }
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    gap: 1.25rem;
    height: calc((238px * 6) + (1.25rem * 5));
    @keyframes scroll {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(calc(-238px * 3 + -1.25rem * 3));
      }
    }
  }
  @media screen and (max-width: 1024px) {
  }
`;
export const SlideItem = styled.div`
  max-width: 193px;
  height: 406px;
  img {
    height: 100%;
    /* object-fit: cover; */
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    max-width: 161px;
    height: 339px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    max-width: 113px;
    height: 238px;
  }
`;

// Mobile Slide

export const SlidesMobile = styled.div`
  overflow: hidden;
  /* height: 900px; */
`;
export const SlideWapperMobile = styled.div<{ time: number }>`
  animation: scroll ${(props) => props.time}s linear infinite;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacingInline.xxs};
  width: calc(
    (113px * 24) + (${(props) => props.theme.spacingInline.xxs} * 23)
  );
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        calc(-113px * 12 + -${(props) => props.theme.spacingInline.xxs} * 12)
      );
    }
  }
`;
export const SlideItemMobile = styled.div`
  flex-shrink: 0;
  width: 113px;
  max-height: 238px;
  img {
    height: 100%;
    width: 100%;
    /* object-fit: cover; */
  }
`;
