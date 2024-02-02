import Desktop from '../../assets/img/Image@3x.png';
import { ColumnDescription, ColumnImage, ContainerSection } from './style';
import { LogoTipoIgma } from '../../assets/icons/LogoTipoIgma';
import { VectorHero } from '../../assets/icons/VectorHero';
import { Text } from '../Text';
import { GridColumns } from '../../theme/global';
export function Hero() {
  return (
    <ContainerSection>
      <GridColumns>
        <ColumnImage>
          <img
            src={Desktop}
            alt="Acreditamos em um mundo onde experiências incríveis são essenciais."
          />
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
