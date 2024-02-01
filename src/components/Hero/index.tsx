import Desktop from '../../assets/img/Image@3x.png';
import Desktop2Xl from '../../assets/img/Image@2x.png';
import Mobile from '../../assets/img/Image.png';
import { ColumnDescription, ColumnImage, ContainerSection } from './style';
import { LogoTipoIgma } from '../../assets/icons/LogoTipoIgma';
import { VectorHero } from '../../assets/icons/VectorHero';
import { Text } from '../Text';
import { useMedia } from '../../hooks/useMedia';
import { GridColumns } from '../../theme/global';
export function Hero() {
  const is3Xl = useMedia('(min-width: 1440px)');
  const is2Xl = useMedia('(min-width: 1280px) and (max-width: 1440px)');
  return (
    <ContainerSection>
      <GridColumns>
        <ColumnImage>
          {is3Xl ? (
            <img
              src={Desktop}
              alt="Acreditamos em um mundo onde experiências incríveis são essenciais."
            />
          ) : is2Xl ? (
            <img
              src={Desktop2Xl}
              alt="Acreditamos em um mundo onde experiências incríveis são essenciais."
            />
          ) : (
            <img
              src={Mobile}
              alt="Acreditamos em um mundo onde experiências incríveis são essenciais."
            />
          )}
          <VectorHero />
        </ColumnImage>
        <ColumnDescription>
          <div>
            <p>Prazer, somos</p>
            <LogoTipoIgma />
          </div>
          <Text as="h1">
            Acreditamos em um mundo onde experiências incríveis são essenciais.
          </Text>
          <Text as="p">
            Unimos design e tecnologia para resolver problemas complexos de
            empresas. Criamos produtos digitais que revolucionam o
            relacionamento entre empresas e consumidores.
          </Text>
        </ColumnDescription>
      </GridColumns>
    </ContainerSection>
  );
}
