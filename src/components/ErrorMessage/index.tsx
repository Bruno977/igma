import { PropsWithChildren } from 'react';
import { Message } from './style';

export function ErrorMessage({ children }: PropsWithChildren) {
  return <Message>{children}</Message>;
}
