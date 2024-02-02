import { FormEvent } from 'react';
import { GridColumns } from '../../theme/global';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { Input } from '../Input';
import { Text } from '../Text';
import { ColumnNewsletter, ColumnSlide, ContainerSection } from './style';
import { Slide } from '../Slide';

export function Newsletter() {
  const error = false;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
    };
    if (data.name === '' || data.email === '') {
      alert('Preencha os Campos!');
      return;
    }
    alert(`Nome: ${data.name} - Email: ${data.email}`);
  }

  return (
    <ContainerSection>
      <GridColumns>
        <ColumnNewsletter>
          <p>Assine nossa newsletter</p>
          <Text as="p">
            Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada
            15 dias.
          </Text>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Nome"
              id="name"
              name="name"
              type="text"
              hasError={error}
              // disabled
            />
            {error && <ErrorMessage>Text Error</ErrorMessage>}
            <Input placeholder="Email" id="email" name="email" type="email" />
            <Button type="submit">Assinar Newsletter</Button>
          </form>
        </ColumnNewsletter>
        <ColumnSlide>
          <Slide />
        </ColumnSlide>
      </GridColumns>
    </ContainerSection>
  );
}
