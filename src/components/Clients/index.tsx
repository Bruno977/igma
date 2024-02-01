import { LogoAmbev } from '../../assets/icons/LogoAmbev';
import { LogoBayer } from '../../assets/icons/LogoBayer';
import { LogoBrasilPrev } from '../../assets/icons/LogoBrasilPrev';
import { LogoCentauro } from '../../assets/icons/LogoCentauro';
import { LogoComgas } from '../../assets/icons/LogoComgas';
import { LogoCvc } from '../../assets/icons/LogoCvc';
import { LogoGoogle } from '../../assets/icons/LogoGoogle';
import { LogoHonda } from '../../assets/icons/LogoHonda';
import { LogoIdb } from '../../assets/icons/LogoIdb';
import { LogoMrv } from '../../assets/icons/LogoMrv';
import { LogoNeoenergia } from '../../assets/icons/LogoNeoenergia';
import { LogoSirioLibanes } from '../../assets/icons/LogoSirioLibanes';
import { useMedia } from '../../hooks/useMedia';
import { GridColumns } from '../../theme/global';
import { Text } from '../Text';
import {
  ContainerDescription,
  ContainerImages,
  ContainerSection,
} from './style';

export function Clients() {
  const isMobile = useMedia('(max-width: 1024px)');
  return (
    <ContainerSection>
      <GridColumns>
        <ContainerDescription>
          <Text as="p">
            Expressamos mais de 20 anos de experiência criando plataformas
            digitais para as maiores empresas do Brasil, impactando milhões de
            pessoas.
          </Text>
        </ContainerDescription>
        <ContainerImages>
          {isMobile ? (
            <>
              <div>
                <LogoMrv />
                <LogoBrasilPrev />
              </div>
              <div>
                <LogoIdb />
                <LogoComgas />
              </div>
              <div>
                <LogoBayer />
                <LogoCvc />
              </div>
              <div>
                <LogoCentauro />
                <LogoNeoenergia />
              </div>
              <div>
                <LogoGoogle />
                <LogoHonda />
              </div>
              <div>
                <LogoAmbev />
                <LogoSirioLibanes />
              </div>
            </>
          ) : (
            <>
              <div>
                <LogoMrv />
                <LogoBrasilPrev />
                <LogoIdb />
              </div>
              <div>
                <LogoComgas />
                <LogoBayer />
                <LogoCvc />
              </div>
              <div>
                <LogoCentauro />
                <LogoNeoenergia />
                <LogoGoogle />
              </div>
              <div>
                <LogoHonda />
                <LogoAmbev />
                <LogoSirioLibanes />
              </div>
            </>
          )}
        </ContainerImages>
      </GridColumns>
    </ContainerSection>
  );
}
