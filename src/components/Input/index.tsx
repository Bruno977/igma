import { ComponentProps } from 'react';
import { InputElement } from './style';

type InputProps = ComponentProps<'input'> & {
  hasError?: boolean;
};

export function Input({ children, hasError, ...props }: InputProps) {
  return (
    <InputElement $hasError={hasError} {...props}>
      {children}
    </InputElement>
  );
}
