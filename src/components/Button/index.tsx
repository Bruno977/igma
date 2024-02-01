import { ComponentProps } from 'react';
import { ButtonElement } from './style';

type ButtonProps = ComponentProps<'button'> & {};

export function Button({ children }: ButtonProps) {
  return <ButtonElement>{children}</ButtonElement>;
}
