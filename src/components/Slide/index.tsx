import {
  SlideContainer,
  SlideItem,
  SlideItemMobile,
  SlideWapperMobile,
  SlideWrapper,
  Slides,
  SlidesMobile,
} from './style';

import celular1 from '../../assets/img/celular1.png';
import celular2 from '../../assets/img/celular2.png';
import celular3 from '../../assets/img/celular3.png';

import celular4 from '../../assets/img/celular4.png';
import celular5 from '../../assets/img/celular5.png';
import celular6 from '../../assets/img/celular6.png';

import celular7 from '../../assets/img/celular7.png';
import celular8 from '../../assets/img/celular8.png';
import celular9 from '../../assets/img/celular9.png';

import celular10 from '../../assets/img/celular10.png';
import celular11 from '../../assets/img/celular11.png';
import celular12 from '../../assets/img/celular12.png';
import { useMedia } from '../../hooks/useMedia';

export function Slide() {
  const isMobile = useMedia('(max-width: 1024px)');
  return (
    <>
      {isMobile ? (
        <SlidesMobile>
          <SlideWapperMobile time={18}>
            <SlideItemMobile>
              <img src={celular1} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular2} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular3} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular4} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular5} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular6} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular7} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular8} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular9} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular10} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular11} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular12} alt="" />
            </SlideItemMobile>

            <SlideItemMobile>
              <img src={celular1} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular2} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular3} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular4} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular5} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular6} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular7} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular8} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular9} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular10} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular11} alt="" />
            </SlideItemMobile>
            <SlideItemMobile>
              <img src={celular12} alt="" />
            </SlideItemMobile>
          </SlideWapperMobile>
        </SlidesMobile>
      ) : (
        <Slides>
          <SlideContainer>
            <SlideWrapper time={18}>
              <SlideItem>
                <img src={celular1} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular2} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular3} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular1} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular2} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular3} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular1} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular2} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular3} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular1} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular2} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular3} alt="" />
              </SlideItem>
            </SlideWrapper>
          </SlideContainer>
          <SlideContainer>
            <SlideWrapper time={12}>
              <SlideItem>
                <img src={celular4} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular5} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular6} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular4} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular5} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular6} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular4} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular5} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular6} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular4} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular5} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular6} alt="" />
              </SlideItem>
            </SlideWrapper>
          </SlideContainer>
          <SlideContainer>
            <SlideWrapper time={16}>
              <SlideItem>
                <img src={celular7} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular8} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular9} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular7} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular8} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular9} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular7} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular8} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular9} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular7} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular8} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular9} alt="" />
              </SlideItem>
            </SlideWrapper>
          </SlideContainer>
          <SlideContainer>
            <SlideWrapper time={14}>
              <SlideItem>
                <img src={celular10} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular11} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular12} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular10} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular11} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular12} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular10} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular11} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular12} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular10} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular11} alt="" />
              </SlideItem>
              <SlideItem>
                <img src={celular12} alt="" />
              </SlideItem>
            </SlideWrapper>
          </SlideContainer>
        </Slides>
      )}
    </>
  );
}
